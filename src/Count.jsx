//Purpose: To create a timer which increments every second
//Receives: AS soon user checks the component useEffect starts and as user leaves useEffect stops
//Returns: and it will return incremented count every second

import { useEffect, useState } from "react";

function Count({title}){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const timer = setInterval(() => {
            return setCount(prev=> prev + 1);
        }, 1000);

        return ()=>{
            clearInterval(timer);
        }

    }, []);

    return(
        <div>
            <h2>{title}</h2>
            <p>{count}</p>
        </div>
    )
}
export default Count;