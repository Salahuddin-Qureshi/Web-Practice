
import React, { useState } from "react";
import './lab.css'

function Counter(){

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handlePlusC1 = () => {
        if (count1 < 9) {
            setCount1(count1 + 1);
        }
        else{
            alert("cannot add more")
        }
    }


    const handleMinusC1 = () => {
        if (count1 > 0) {
            setCount1(count1 - 1);
        }
        else{
            alert("cannot less more")
        }
    }

    const handlePlusC2 = () => {
        if (count2 < 9) {
            setCount2(count2 + 1);
        }
        else{
            alert("cannot add more")
        }
    }

    const handleMinusC2 = () => {
        if (count2 > 0) {
            setCount2(count2 - 1);
        }
        else{
            alert("cannot less more")
        }
    }

    return(
        <>
        <div id="nav">
            Nav
        </div>
        <div id="counter1">
            <h2>Counter 1</h2>
            <div id="counter">
            <button id="minusC1" onClick={handleMinusC1}>-</button>
            <p>{count1}</p>
            <button id="plusC1" onClick={handlePlusC1}>+</button>
            </div>
        </div>

        <div id="counter2">
            <h2>Counter 2</h2>
            <div id="counter">
            <button id="minusC2" onClick={handleMinusC2}>-</button>
            <p>{count2}</p>
            <button id="plusC2" onClick={handlePlusC2}>+</button>
            </div>
        </div>
        
        <div id="nav">
            Footer
        </div>

        </>
    )
}

export default Counter


