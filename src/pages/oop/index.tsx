import React from 'react';
import { Link } from 'react-router-dom';
import Pages from '../../pages/pagination/pagination';
import '../../pages/pagination/pagination.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const dir = <FontAwesomeIcon icon={faFolder} />;

interface Props {}
 
const OOP: React.SFC<Props> = () => {
    return (
        <> 
            <Pages 
                link="/"
                name="Index"
            />
            <div className="pagination">
                <ul>
                    <li><Link to={'/oop'}>{dir} Herency</Link></li>
                    <li><Link to={'/polimorfismo'}>{dir} Polymorphism</Link></li>
                    <li><Link to={'/polimorfismo'}>{dir} Composition</Link></li>
                </ul>
            </div>
        </>
     );
}
 
export default OOP;