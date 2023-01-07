import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";


function ModalCommon({ open, height, handleClose, children , width  }){
  const style = {
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width,
    height: height,
    bgcolor: "#fff",
    border: "2px solid #fff",
    borderRadius : "5px",
    p: 2,
  };
  
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </>
  );
};

export default ModalCommon;
