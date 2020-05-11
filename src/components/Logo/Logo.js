import React from 'react';

import burgerLogo from '../../assets/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img alt="Burger Logo" src={burgerLogo}/>
        </div>
    );
}

export default logo;