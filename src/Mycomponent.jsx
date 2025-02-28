import React, { useState } from "react";
function Mycomponent(){
    const [name,setName]= useState('Guest');
    const[age,setAge]=useState(0);
    const[Isemployee,setisEmployee]=useState('true')
    const updateName=()=>{
        setName("shreyansh");
    }
    const incrementAge=()=>{
        setAge(age+1);
    }
    const toggledemployeestatus=()=>{
        setisEmployee(!Isemployee);

    }
    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age:{age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Isemployee:{Isemployee?"yes":"No"}</p>
            <button onClick={toggledemployeestatus}>Toggle status</button>
        </div>
    )

}
export default Mycomponent;