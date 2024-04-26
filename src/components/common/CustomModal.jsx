import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function CustomModal({ open, onCloseModal, title, children, ...props }) {
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      styles={{
        modal: {
          borderRadius: 10,
          background: "white",
        },
      }}
    >
      <div className={`bg-white sm:py-6 sm:px-3 p-3`}>
        <p className="text-gray-950 tracking-wider text-xl font-semibold mb-6">
          {title}
        </p>
        {children}
      </div>
    </Modal>
  );
}

export default CustomModal;
