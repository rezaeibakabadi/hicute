import React from "react";

import classes from './btnMobile.css';

const btnMobile = () => {
    return <div className={classes.Body}>
        <div className={classes.Person}>
            <a>
                <svg
                    xmlns="http://www.w3.org/2000/svg" class="svg-icon"
                    style={{ width: ' 2.6em', height: '2.6em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden', color: '#cccccc' }}
                    viewBox="0 0 1024 1024" version="1.1">
                    <path d="M512 597.994667q108.010667 0 225.002667 46.997333t116.992 123.008l0 85.994667-684.010667 0 0-85.994667q0-76.010667 116.992-123.008t225.002667-46.997333zM512 512q-69.994667 0-120-50.005333t-50.005333-120 50.005333-121.002667 120-51.008 120 51.008 50.005333 121.002667-50.005333 120-120 50.005333z" />
                </svg>
            </a>
        </div>

        <div className={classes.Fav}>
            <a>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg-icon"
                    style={{ width: '2.1em', height: '2.1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden', color: '#cccccc' }}
                    viewBox="0 0 1024 1024"
                    version="1.1">
                    <path d="M539.569231 61.046154l90.584615 295.384615c3.938462 11.815385 15.753846 17.723077 27.569231 17.723077h295.384615c29.538462 0 41.353846 39.384615 17.723077 57.107692l-240.246154 177.23077c-9.846154 7.876923-13.784615 21.661538-9.846153 33.476923L834.953846 945.230769c7.876923 27.569231-21.661538 51.2-45.292308 33.476923L531.692308 785.723077c-9.846154-7.876923-23.630769-7.876923-35.446154 0L236.307692 978.707692c-23.630769 17.723077-55.138462-5.907692-45.292307-33.476923l110.276923-303.261538c3.938462-11.815385 0-25.6-9.846154-33.476923l-240.246154-177.23077c-23.630769-17.723077-9.846154-57.107692 17.723077-57.107692h295.384615c13.784615 0 23.630769-3.938462 27.569231-17.723077L484.430769 59.076923c7.876923-27.569231 47.261538-25.6 55.138462 1.969231z" />
                </svg>
            </a>
        </div>

        <div className={classes.Bell}>
            <a>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg-icon"
                    style={{ width: '2.1em', height: '2.1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden', color: '#cccccc' }}
                    viewBox="0 0 1024 1024"
                    version="1.1">
                    <path d="M521.142857 969.142857q0-9.142857-9.142857-9.142857-33.714286 0-58-24.285714t-24.285714-58q0-9.142857-9.142857-9.142857t-9.142857 9.142857q0 41.714286 29.428571 71.142857t71.142857 29.428571q9.142857 0 9.142857-9.142857zm466.285714-164.571429q0 29.714286-21.714286 51.428571t-51.428571 21.714286l-256 0q0 60.571429-42.857143 103.428571t-103.428571 42.857143-103.428571-42.857143-42.857143-103.428571l-256 0q-29.714286 0-51.428571-21.714286t-21.714286-51.428571q28.571429-24 52-50.285714t48.571429-68.285714 42.571429-90.571429 28.571429-117.714286 11.142857-148.571429q0-86.857143 66.857143-161.428571t175.428571-90.571429q-4.571429-10.857143-4.571429-22.285714 0-22.857143 16-38.857143t38.857143-16 38.857143 16 16 38.857143q0 11.428571-4.571429 22.285714 108.571429 16 175.428571 90.571429t66.857143 161.428571q0 79.428571 11.142857 148.571429t28.571429 117.714286 42.571429 90.571429 48.571429 68.285714 52 50.285714z" />
                </svg>
            </a>
        </div>

        <div className={classes.Home}>
            <a>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg-icon"
                    style={{width: '2.3em',height: '2.3em', verticalAlign: 'middle',fill: 'currentColor',overflow: 'hidden',color:'#cccccc'}}
                    viewBox="0 0 1024 1024"
                    version="1.1">
                    <path d="M853.333333 853.333333a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667v-384H42.666667l440.618666-400.554666a42.666667 42.666667 0 0 1 57.429334 0L981.333333 469.333333h-128v384z m-341.333333-128l143.317333-143.317333a96 96 0 1 0-135.765333-135.765333l-7.552 7.552-7.552-7.552a96 96 0 1 0-135.765333 135.765333L512 725.333333z" />
                </svg>
            </a>
        </div>
    </div>
}

export default btnMobile