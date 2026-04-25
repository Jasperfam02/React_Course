import React, {useState} from "react"

function MyComponent2(){

    const [name, setName] = useState();

    const[delivery, setDelivery] = useState("Pick up");

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleDeliveryChange(event){
        setDelivery(event.target.value)
    }

    return(

        <>
          <div>
            <input value ={name} onChange={handleNameChange}/>
            <p>{name}</p>

            <div>
                <label>
                    <input type="radio" value ="delivery" checked={delivery === "Delivery"} onChange={handleDeliveryChange}/>
                    Delivery
                </label>
                <label>
                    <input type="radio" value ="self pick up" checked={delivery === "Self pick up"} onChange={handleDeliveryChange}/>
                    Self-pickup
                </label>
                <p>{delivery}</p>
            </div>

          </div>
        </>
    );

}
export default MyComponent2