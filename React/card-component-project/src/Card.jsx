import profilePic from './assets/profile.png'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Zain</h2>
            <p className='card-text'>I study Computer Science and play Minecraft</p>
        </div>
    )
}

export default Card