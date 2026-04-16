//need to create form controlled input along with live preview
//we will receive userinputs
//then will return the same entered input where we are displaying value live to user
import { useState } from "react";

function Form({title}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const displayName = (e) => {setName(e.target.value)};
    const displayEmail = (e) => {setEmail(e.target.value)};

    return(
        <div>
            <h2>{title}</h2>

            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" value={name} onChange={displayName}/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="abc@xyz.com" value={email} onChange={displayEmail}/>
            </form>

            <div className="">
                <p><strong>Name:</strong> {name}
                <br />
                <strong>Email:</strong> {email}  
                </p>
            </div>
        </div>
    )
}

export default Form;