import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
const Footer = () =>{

    const handleEmailClick = () => {
        const email = "shivanikanswal@gmail.com";
        navigator.clipboard.writeText(email);
        toast("Copied to clipboard!");
      };

    return (
        <footer className="footer flex flex-col text-white w-full min-h-28 bg-[#111] py-16 mt-40 items-center">
           <div className="link-grid grid w-7/12 grid-cols-1 gap-8 md:w-8/12 md:grid-cols-3 lg:w-9/12 xl:w-10/12 2xl:w-8/12">
            <div className="socials flex flex-col">
                <label className="text-3xl mb-4 underline">
                    MovieeAdda
                </label>
                <div className="flex space-x-2">
                    <a href="https://github.com/Shivanikanswal" target="_blank" aria-label="Github"/><FaGithub className="text-3xl transition duration-150 ease-in-out hover:opacity-80" />
                    <a href="" target="_blank" aria-label="LinkedIn"/><FaLinkedin className="text-3xl transition duration-150 ease-in-out hover:opacity-80"/>
                </div>
            </div>
            
            <div className="flex flex-col">
            <h2 className="text-xl mb-4 underline">Support</h2>
            <p className="text-md">Support Forum&nbsp;</p>
            <p className="">Documentation</p>  
            </div>
            <div className="contact">
                <h2 className="text-xl mb-4 underline">Contact Us</h2>
                    <div className="flex flex-col">
                        <p className="text-md">Have questions?&nbsp;</p>
                        <p className="">Reach out via email:</p>
                    </div>
                    <p
                        className="text-md mt-3 cursor-pointer hover:underline"
                        onClick={handleEmailClick}
                    >shivanikanswal@gmail.com</p><ToastContainer />
            </div>
           </div>
           <div className="container mt-12 w-7/12 text-left text-sm underline md:w-8/12 lg:w-9/12 xl:w-10/12 2xl:w-8/12">
        <p>&copy; 2025 MovieeAdda - All Rights Reserved.</p>
      </div>
        </footer>
    );
}

export default Footer;