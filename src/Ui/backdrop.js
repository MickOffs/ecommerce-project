import react from "react";
import "./backdrop.css";
import { useEffect } from "react";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick}></div>;
}

function Modal(props) {
  return <div className="modal">{props.children}</div>;
}

function FinalModal(props) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <>
      <Backdrop onClick={props.onClick} />
      <Modal> {props.children}</Modal>
    </>
  );
}

export default FinalModal;
