import React from "react";
import footers from './../../../assets/img/pad.png'

import classes from './footer.css'
const footer = () => {
    return <div className={classes.Footer}>
        <div className={classes.Left}>
            <img src={footers} alt="footer" className={classes.imgFooter} />
        </div>

        <div className={classes.Right}>
            <p className={classes.textFooter}>One Kit. One Price.</p>
            <p className={classes.textFooter2}>Experience a heavily discounted bundle </p>
            <button className={classes.btnLearn}>LEARN MORE</button>
        </div>


    </div>
}

export default footer;