import React from 'react';
import '../styles/style.css';

class EditProfile extends React.Component {
    render(){
        return (
            <div>
                <div className ="body">
                    <div className="wrapper">
                    <a href="./profile" className="exit">
                    <img src="images/cross-small.png" className="cross"/>
                </a>
                
                    <h1>Edit Profile</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                        <img src="images/user.png" className="user-icon"/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Email" required/>
                        <img src="images/envelope.png" className="email-icon"/>
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Password" required id="password"/>
                        <img src="images/lock.png" className="lock-icon"/>
                    </div>
                    
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" required id="confirm-password"/>
                        <img src="images/lock (1).png" className="lock1-icon"/>
                    </div>                    
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;