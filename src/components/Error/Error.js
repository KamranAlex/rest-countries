import React from "react";
import Header from "../Header/Header";
import "./Error.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
const Error = () => {
  return (
    <div>
      <Header showSearch={false}></Header>
      <div className='container h-100 error'>
        <div className='row d-flex justify-content-center align-items-center flex-column'>
          <h1 className='error-code text-danger'> Error 404 !!!</h1>
          <br />
          <p className='error-text text-info'>
            Page Couldn't Found <FontAwesomeIcon icon={faExclamationTriangle} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
