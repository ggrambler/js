import profilePic from './assets/profile.jpg'

function Card(){
    return (
        <div className="card">
            <img className="ppic" src={profilePic} alt="Image Of Cute Dog" />
            <h2 className='cardtitle'>Divyansh Bhardwaj</h2>
            <p className='cardtext'>Hi I am a Student At SRM and I draw</p>
        </div>
    );
}

export default Card