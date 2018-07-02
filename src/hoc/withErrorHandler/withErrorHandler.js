import React from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = Component => {
  return props => {
    return (
      <React.Fragment>
        <Modal>Something went wrong</Modal>
        <Component {...props} />
      </React.Fragment>
    );
  };
};

export default withErrorHandler;
