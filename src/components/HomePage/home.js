import React, { Component } from "react";
import { Route, Routes , Link  } from 'react-router-dom';
import Container from './Container/container.js';
import Signup from "./../Auth/Signup/signup";
import leftBack from './../../assets/img/left.png';
import rightBack from './../../assets/img/right.png';
import Mobile from "./btnMobile/Mobile";
import Logo from './../../assets/img/logo.png';

import classes from './home.css'

class Home extends Component {
    render() {
        return <div className={classes.Container}>
            <img src={leftBack} alt="leftBack" className={classes.leftBack} />

            <div className={classes.colCenter}>
                
                    <div className={classes.Header}>

                        <Link to="/" className={classes.RightPart}><img src={Logo} alt="logo" /></Link>

                        <div className={classes.LeftPart}>
                            <Link to ="/signup" className={classes.Signup}>
                                <p>ثبت نام</p>
                            </Link>
                            <a className={classes.Login}>
                                <p>ورود</p>
                            </a>
                        </div>

                    </div>

                <Routes>
                    <Route path="/" exact Component={Container} />
                    <Route path="/signup" Component={Signup} />
                </Routes>
                
                

                <div className={classes.btnMobile}>
                    <Mobile />
                </div>
            </div>
            <img src={rightBack} alt="rightBack" className={classes.rightBack} />
        </div >
    }
}
export default Home;