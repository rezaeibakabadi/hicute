import React, { Component } from "react";
import Body from './../Body/body';
import Footer from './../Footer/Footer1'

import classes from './container.css'
class container extends Component {
    render() {
        return (<div>
            <div className={classes.Body}>
                <Body />
            </div>

            <div className={classes.Footer}>
                <Footer />
            </div>
        </div>

        )
    }
}

export default container