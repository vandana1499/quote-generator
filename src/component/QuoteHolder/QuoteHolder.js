import React, { useState } from 'react';
import QuoteCard from '../QuoteCard/QuoteCard';
import classes from './QuoteHolder.module.css';
import quoteDatas from '../../assets/data.json';
const QuoteHolder = () => {

    const [quoteData , setQuoteData] = useState(quoteDatas[Math.floor(Math.random()*18)]);
    const [color,setColor] = useState('rgb(0,0,0)')
    const changeQuoteHandler = () =>{
        setQuoteData(quoteDatas[Math.floor(Math.random()*17)]);
        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        let changeColor = `rgb(${red},${green},${blue})`;
        setColor(changeColor);
    }
    return(
        <div className={classes.quote__holder} style = {{backgroundColor : color}}>
            <QuoteCard data={quoteData} color ={color} onModification ={changeQuoteHandler}/>
        </div>
    )
}
export default QuoteHolder;