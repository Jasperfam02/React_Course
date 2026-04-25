import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const incrementButton=()=>{
        setCount(count +1);
    }

    const decrementButton =()=>{
        setCount(count-1);
    }

     const resetButton =()=>{
        setCount(0);
    }

    return(

        <div>
            <p>Final Count: {count}</p>
            <button onClick={incrementButton}>Increment</button>
            <button onClick={decrementButton}>Decrement</button>
            <button onClick={resetButton}>Reset</button>
        </div>
    );

}

export default Counter