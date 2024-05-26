import React from "react";
import classes from './Styles/Mybutton.module.css';

export function MyButton(props) {
    return (
        <button className={classes.myBtn} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
