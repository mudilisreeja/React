import pic from './assets/7.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image"src={pic} alt=" pic"/>
            <h2 className="card-title">my card</h2>
            <p className='card-text'>I am learning React</p>



        </div>
    );


}
export default Card;