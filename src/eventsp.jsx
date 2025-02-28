function Button2(){
    const handleclick=(e)=>e.target.textContent="Hello!";
    return (<button onDoubleClick={(e)=>handleclick(e)}>click me</button>);

}
export default Button2;