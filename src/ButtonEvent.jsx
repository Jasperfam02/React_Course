function ButtonEvent(){

    const handleClick = () => console.log("Click Me");

    return(
        <button onClick={handleClick}>Click Me</button>
    );
}

export default ButtonEvent