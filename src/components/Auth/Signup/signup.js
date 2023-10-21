import React, { Component } from "react";
import header from './../../../assets/img/header.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ir from 'react-phone-input-2/lang/es.json'
import ReactCodeInput from 'react-verification-code-input';
import classes from './signup.css';



class signup extends Component {

    render() {
        this.state = {
            value: null,
            setValue: {

            },

        }


        return (
            <div className={classes.Container}>
                <div className={classes.Header}>
                    <img src={header} alt="header" className={classes.imgHeader} />
                    <span className={classes.textPhone}> تایید شماره تلفن </span>
                </div>

                <div className={classes.Phone}>
                    <form className={classes.formControl}>
                        <PhoneInput specialLabel="شماره تلفن همراه خود را وارد نمایید "
                            inputClass={classes.inputControl}
                            containerStyle={{ display: "block", margin: "auto", width: "40%" }}
                            country={'ir'}
                            localization={ir}
                            inputProps={{
                                autoFormat: true,
                                enableAreaCodes: true,
                            }}
                            value={this.setState.value}
                            onChange={this.setState.setValue} />
                    </form>

                    <div className={classes.btnStyle}>
                        <button className={classes.btnSend}>
                            <span>
                                ارسال
                            </span>
                        </button>
                    </div>
                </div>


                <div className={classes.activeCode}>

                    <form className={classes.formControl}>
                        <ReactCodeInput className={classes.verificationInput}
                        title="کد فعالسازی"  
                        autoFocus={false} 
                        placeholder="......"/>
                    </form>

                    <div className={classes.btnStyle}>
                        <button className={classes.btnSend}>
                            <span>
                                تایید
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default signup