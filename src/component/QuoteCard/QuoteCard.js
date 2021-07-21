import React, { useState } from 'react';
import classes from './QuoteCard.module.css';
const QuoteCard = (props) => {

    const changeHandler = () => {
        props.onModification();
    }
    return (
        <div className={classes.quote__card}>
            <div className={classes.quote__content}>
                <i className={`fas fa-quote-left ${classes.quote__icon}`} style={{ color: props.color }}></i>
                <h1 className={classes.quote__content_h1} style={{ color: props.color }}>{props.data.quote}</h1>
            </div>
            <div className={classes.quote__author}>
                <p className={classes.quote__author_p} style={{ color: props.color }}>- {props.data.author}</p>

            </div>

            <div className={classes.btns_holder}>
                <button className={classes.new__quote_btn} onClick={changeHandler} style={{ backgroundColor: props.color }}>New quote</button>

            </div>
        </div>
    )
}
//Math.floor(Math.random() * 256)
export default QuoteCard;