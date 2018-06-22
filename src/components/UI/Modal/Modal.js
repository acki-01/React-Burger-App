import React from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <React.Fragment>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translate(0)" : "translate(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      <Backdrop show={props.show} clicked={props.modalClosed} />
      {props.children}
    </div>
  </React.Fragment>
);

export default modal;
