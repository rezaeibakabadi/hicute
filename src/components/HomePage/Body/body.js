import React from "react";
import beauty from './../../../assets/img/icon3.png';
import media from './../../../assets/img/icon1.png';
import club from './../../../assets/img/icon.png'
import store from './../../../assets/img/icon2.png'

import classes from './body.css'
const body = (props) => {
    return <div className={classes.bodyContainer}>
        <div className={classes.firstItem}>
            <a className={classes.Beauty}>
                <div className={classes.diamondRight}></div>
                <div className={classes.diamondLeft}></div>
                <div className={classes.colBeauty}>
                    <img src={beauty} className={classes.imgBeauty} alt="beauty"/>
                    <p className={classes.beautyText}>beauty  services</p>
                </div>

                <p className={classes.beautyText2}> جذاب شو </p>
            </a>
        </div>

        <div className={classes.secondItem}>
        <a className={classes.Media}>
                <div className={classes.diamondRight}></div>
                <div className={classes.diamondLeft}></div>
                <div className={classes.colBeauty}>
                    <img src={media} className={classes.imgMedia} alt="media"/>
                    <p className={classes.mediaText}>beauty  media</p>
                </div>

                <p className={classes.mediaText2}> رسانه جذابیت </p>
            </a>
        </div>

        <div className={classes.thirdItem}>
        <a className={classes.Club}>
                <div className={classes.diamondRight}></div>
                <div className={classes.diamondLeft}></div>
                <div className={classes.colBeauty}>
                    <img src={club} className={classes.imgClub} alt="club"/>
                    <p className={classes.clubText}>hicute  club</p>
                </div>

                <p className={classes.clubText2}> باشگاه مشتریان</p>
            </a>
        </div>
        <div className={classes.fourthItem}>
        <a className={classes.Store}>
                <div className={classes.diamondRight}></div>
                <div className={classes.diamondLeft}></div>
                <div className={classes.colBeauty}>
                    <img src={store} className={classes.imgStore} alt="store"/>
                    <p className={classes.storeText}>hicute  store</p>
                </div>

                <p className={classes.storeText2}> فروشگاه </p>
            </a>
        </div>
    </div>
}

export default body;