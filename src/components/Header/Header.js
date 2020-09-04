import React from "react";
import "./Header.css";
import { useState } from "react";

const Header = (props) => {
  return (
    <div className='header'>
      <h1>Rest-Countries</h1>
      <nav className='navbar navbar-dark bg-dark'>
        <a className='home' href='/home'>
          Home
        </a>
        {props.showSearch && (
          <form className='form-inline'>
            <input
              className='form-control mr-sm-2'
              type='text'
              placeholder='Search a Country...'
              onChange={props.handleChange}
            />
          </form>
        )}
      </nav>
    </div>
  );
};

export default Header;
