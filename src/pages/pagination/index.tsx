import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

import './pagination.css';

const dir = <FontAwesomeIcon icon={faFolder} />;

/*
TODO: When click dir simulate a open dir in the current dir
      Example: oop/polimorfismo. If a click oop, go back to '/'
*/

const ExampleList = () => {
  return (
    <div className="pagination">
        <ul>
            <li><Link to={'/oop'}>{dir} OOP</Link></li>
            <li><Link to={'/polimorfismo'}>{dir} Design Patterns</Link></li>
            <li><Link to={'/polimorfismo'}>{dir} Types</Link></li>
        </ul>
    </div>
  );
};

export default ExampleList;
