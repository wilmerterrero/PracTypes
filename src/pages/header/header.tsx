import React from "react";
import ts from '../../img/ts.svg';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Github = <FontAwesomeIcon icon={faGithub} />;

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-primary">
      <span className="navbar-brand mb-0 h1 logo">
        <img src={ts} alt="ts-logo" className="d-inline-block align-top" />
        PracTypes
      </span>
      <a href='https://github.com'>{Github}</a>
    </nav>
  );
};

export default Header;
