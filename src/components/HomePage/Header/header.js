import React from "react";
import { Link , NavLink } from 'react-router-dom';
import Signup from "../../Auth/Signup/signup";
import Logo from './../../../assets/img/logo.png';

import classes from './header.css'
const header = (props) => {
    return <div className={classes.Header}>

        <div className={classes.RightPart}><img src={Logo} alt="logo" /></div>

        <div className={classes.LeftPart}>
            <a className={classes.Signup}>
                <p>ثبت نام</p>
            </a>
            <a className={classes.Login}>
                <p>ورود</p>
            </a>
        </div>

    </div>


}

export default header