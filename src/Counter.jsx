import { useState } from "react";

function Counter({ title }) {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(prev => prev + 1);
  };

  //Tried using if,else if but taht's not allowed in react to searched for a way out 
  //SO here what required was that decremented value can't be less than 0 
  //so used nested ternary operator here to get the desired result where inside here we are execution if else if as per js

  const handleDecrement = () => {
    if(value === 0){
        setValue(0);
    }else{
        setValue(prev => prev -1);
    }
};
// setValue(prev => prev === 0 ? 0 : prev - 1);

  const handleReset = () => {
    setValue(0);
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>{value}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;