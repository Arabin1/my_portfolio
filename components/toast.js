import React from "react";
import PropTypes from "prop-types";

const Toast = (props) => {
  const computedClassName = props.show ? props.className : "display-none";

  return <div className={computedClassName}>{props.children}</div>;
};

Toast.propTypes = {
  show: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default Toast;
