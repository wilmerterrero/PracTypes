import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

import './pagination.css';

const Folder = <FontAwesomeIcon icon={faFolder} />;

const ExampleList = () => {
  return (
    <div className="pagination">
        <ul>
            <li><Link to={'/polimorfismo'}>{Folder} OOP</Link></li>
            <li><Link to={'/polimorfismo'}>{Folder} Design Patterns</Link></li>
            <li><Link to={'/polimorfismo'}>{Folder} Types</Link></li>
        </ul>
    </div>
  );
};

export default ExampleList;
