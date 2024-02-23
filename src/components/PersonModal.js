import PersonDetail from "./PersonDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const PersonModal = (props) => {
  const { onCloseModal, creditData, isShowCastModal } = props;
  return (
    <div className="modal flex fixed top-0 left-0 w-full h-full z-[2] justify-center overflow-hidden items-center bg-[rgb(0,0,0,0.75)] backdrop-blur">
      <div className="modal-content rounded-2xl m-auto p-5 border border-solid border-[#888] w-4/5 text-white bg-cover bg-center">
        <div className="closeIcon text-right" onClick={onCloseModal}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <PersonDetail creditData={creditData} />
      </div>
    </div>
  );
};
export default PersonModal;
