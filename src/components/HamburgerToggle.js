import Hamburger from 'hamburger-react';
import { useState, useEffect } from 'react';
import { faAngleRight, faMagnifyingGlass, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HamburgerToggle = () =>{
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
      <>
    <div className='fixed top-4 right-4 z-[9999]'>
      <Hamburger toggled={isOpen} toggle={setOpen} color="#ffffff" size={26}/>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black md:hidden z-[50] pt-20 text-white">
          <button className='p-3 w-full text-left flex justify-between border-t border-slate-500'>
            <div><FontAwesomeIcon icon={faMagnifyingGlass} />
             <span> Browse Movies </span>
             </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button className='p-3 w-full text-left flex justify-between'>
            <div>
            <FontAwesomeIcon icon={faAddressCard} />
            <span>  About</span>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      )}
    </>
    );
}
export default HamburgerToggle;