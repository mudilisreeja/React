function Image(){
    const imageurl='./src/assets/7.jpg';
    const handleclick=(e)=>e.target.style.display='none';
    return(<img id='image' onClick={(e)=>handleclick(e)} src={imageurl}></img>);

}
export default Image;