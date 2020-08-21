import React from 'react';
import './docs.css';

type Props = {
    title: string;
    text: string;
}
 
const Documentation: React.SFC<Props> = ({ title, text }) => {
    return ( 
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-sm-12 col-lg-8">
                    <div className="doc">
                        <h1>{ title }</h1>
                        <p>{ text }</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Documentation;