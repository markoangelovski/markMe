const Modal = ({ setShowModal, children }) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-10 bg-gray-600 opacity-50"
      onClick={() => setShowModal(false)}
    >
      {children}
    </div>
  );
};

export default Modal;
