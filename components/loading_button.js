import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingButton = () => {
  return (
    <button type="button" className="link float-end">
      <Spinner animation="grow" variant="light" size="sm" />
      <span className="ms-1">Please wait...</span>
    </button>
  );
};

export default LoadingButton;
