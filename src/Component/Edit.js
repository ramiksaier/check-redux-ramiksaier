import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { update } from "../Redux/Action";
const Edit = ({ task }) => {
  const [show, setShow] = useState(false);
  const [newtext, settext] = useState(task.title);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelEdit = () => {
    dispatch(update(task.id, newtext));
    handleClose();
  };
  return (
    <>
      <button className="btndelete" variant="primary" onClick={handleShow}>
        update
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit text</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={newtext} onChange={(e) => settext(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit;
