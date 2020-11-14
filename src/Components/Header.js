import React from 'react';
import './Header.css';
import TyperEff from './TyperEff';

const Header = () => {
    return(
        <>
            
            <div className="headermain flex items-center m-12">
               <div className="w-3/5 headermain"> 
                <TyperEff />
                </div>  
                <div className="w-2/5 ml-12 ">
                    <img className="decgif" src="./dec.gif" alt=""/>
                </div>
            </div>
        </>
    );
};

export default Header;