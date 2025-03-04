import React,{useState, usestate} from "react";

//on change handler used form form elements like <input> <text area> fields.

function Mycomponent1(){
    const[name,setName]=useState("Guest");
    const[quantity,setQuantity]=useState("1");
    const[comment,setComment]=useState("");
    const[payment,setPayment]=useState("");
    

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantity(event){
        setQuantity(event.target.value)
    }
    function handleComment(event){
        setComment(event.target.value)
    }
    function handlepayment(event){
        setPayment(event.target.value)
    }

    return(<div>
                <input value={name} onChange={handleNameChange}/>
                <p>Name:{name}</p>

                <input value={quantity} onChange={handleQuantity} type="number"/>
                <p>Quantity:{quantity}</p>

                <textarea value={comment} onChange={handleComment} placeholder="Enter delivery instructions"/>
                <p>Comment:{comment}</p>

                <select value={payment} onChange={handlepayment}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Master Card">Master Card</option>
                    <option value="Rupay">Rupay</option>
                </select>
                <p>payment:{payment}</p>



             </div>);



}
export default Mycomponent1