import React, {useState} from "react";

function MyComponent(){

    const [name, setName]  = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployee] = useState(false);

    const updateButton =()=>{
        setName("Spongebob");
    }

    const incrementAge =() =>{
        setAge(age +2);
    }

    const toggleEmployeeStatus =() =>{
        setIsEmployee(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateButton}>Click Me</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age </button>
        
            <p>Is employed: {isEmployed ?"Yes":"No"}</p>
            <button onClick={toggleEmployeeStatus}>Increment Age </button>

        </div>
    );
}

export default MyComponent