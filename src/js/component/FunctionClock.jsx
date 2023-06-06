import React, { useState, useEffect } from "react";

const FunctionClock = () => {
    const [count, setCount] = useState(0);
    const [arr, setArr] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const countStr = count.toString().split("");
        while (countStr.length < 5) {
            countStr.unshift("0");
        }
        setArr(countStr.reverse());
    }, [count]);

    return (
        <div>
        <div className="main"><h1>Welcome to Simple Counter</h1></div>
        <div className="main">
            <div className="sqr"><img src="https://cdn.pixabay.com/photo/2013/07/12/13/28/pocket-watch-147107_640.png" alt="" /></div>
            <div className="sqr">{arr[4]}</div>
            <div className="sqr">{arr[3]}</div>
            <div className="sqr">{arr[2]}</div>
            <div className="sqr">{arr[1]}</div>
            <div className="sqr">{arr[0]}</div>
        </div>
        </div>
    );
};

export default FunctionClock;
