import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Main = (props) => {
  const getCountry = props.singleCountry;
  return (
    <div className='col-md-3'>
      <div className='card bg-dark'>
        <div className='card-body'>
          <h4 className='text-warning'>{getCountry.name}</h4>
          <h6 className='text-danger'>{getCountry.region}</h6>
        </div>
        <div className='card-footer'>
          <Link to={`/name/${getCountry.alpha2Code}`}>
            <button className='btn btn-success'>
              {" "}
              <FontAwesomeIcon icon={faInfoCircle} /> View Country Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
