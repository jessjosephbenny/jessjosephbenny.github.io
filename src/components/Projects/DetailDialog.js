import React from "react";
import { Modal } from "react-bootstrap";
import Slideshow from "./SlideShow";

function DetailDialog({open, setOpen, data}){
    return(
        <Modal show={open} onHide={()=>setOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {data['Title']}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Slideshow images={data.Images} />
          <p>
            {data['Details']}
          </p>
        </Modal.Body>
        </Modal>
    )
}

export default DetailDialog;