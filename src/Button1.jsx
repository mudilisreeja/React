function Button1(){
   // const handleclick=()=>console.log("ouch!");
    //const handleclick2=(name)=>console.log(`${name}stop clicking me `);
    let count=0;
    const handleclick=(name)=>{
        if(count<3){
            count++;
            console.log(`${name} you click me ${count}times`);
        }
        else{
            console.log(`${name} stop clicking me`);
        }
    }


   // return(<button onClick={handleclick}>Click me</button>);
   return(<button onClick={()=>handleclick("siri")}>Click me</button>);


}
export default Button1;