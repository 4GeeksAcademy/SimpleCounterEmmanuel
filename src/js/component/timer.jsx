import React from "react";
import FunctionClock from "./FunctionClock.jsx";
import FunctionClock1 from "./FunctionClock1.jsx";
import FunctionClock2 from "./FunctionClock2.jsx";
import FunctionClock3 from "./FunctionClock3.jsx";
import FunctionClock4 from "./FunctionClock4.jsx";
import FunctionClock5 from "./FunctionClock5.jsx";

const Timer = () => {
	return (
        <div>
        <h1 className="main text-light">Welcome to Simple Counter</h1>
		<div className="text-center">
			<div className="main">
                <div className="sqr">
                    <img src="https://static.vecteezy.com/system/resources/previews/019/132/343/non_2x/clock-logo-icon-vector.jpg" alt="" srcset="" />
                </div>
                <FunctionClock5 />
                <FunctionClock4 />
                <FunctionClock3 />
                <FunctionClock2 />
                <FunctionClock1 />
                <FunctionClock />
            </div>
		</div>
        </div>
	);
};

export default Timer;
