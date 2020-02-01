import React from "react";

const Preloader = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  );
};

//Set default value for a property
Preloader.defaultProps = {
  message: "Loading"
}

export default Preloader;
