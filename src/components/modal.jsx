import classNames from 'classnames';

const Modal = ({ handleClose, isOpen, children }) => {
  const isOpened = classNames({ invisible: !isOpen });
  return (
    <>
      <div
        onClick={handleClose}
        className={`w-screen h-screen visible fixed top-0 bg-black/30 ${isOpened}`}
      ></div>
      <div
        className={`fixed w-[300px] h-[300px] flex items-center justify-center bg-slate-100 px-3 py-2 rounded-sm shadow-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isOpened}`}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
