import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    link: string;
    name: string;
}
 
const Pages: React.SFC<Props> = ({ link, name }) => {
    return ( 
        <div className="pages">
            <Link to={link}>{name}/</Link>
        </div>
     );
}
 
export default Pages;