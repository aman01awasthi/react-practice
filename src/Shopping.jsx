//here we want to change price as the quantity changes on real time basis
// we receive quantity chnage from user
//as per user required quantity price gets updated
import { useState } from "react";

function Shopping({title,itemName, price}){
    const [quantity, setQuantity] = useState(1);
    const handleDecrement = () => {
        if(quantity === 1){
            setQuantity(1);
        } else{
            setQuantity(prev => prev - 1);
        }
    }
    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    }
    let totalPrice = price * quantity;
    // console.log(handleIncrement);

    return(
        <div>
            <h2>{title}</h2>

            <div className="card">
                <h5><i>{itemName}</i></h5>
                <p>₹ {totalPrice}</p>
                <button onClick={handleDecrement}>-</button><span>{quantity}</span><button onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}

export default Shopping;