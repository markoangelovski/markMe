const Modal = ({ setShowModal, children }) => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-600 opacity-50 z-10"></div>
      <div
        className="fixed inset-0 flex justify-center items-center h-screen z-10"
        onClick={() => setShowModal(false)}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
