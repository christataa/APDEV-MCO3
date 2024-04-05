import React, { useState } from 'react';
import '../styles/style.css';
import NavBarProfile from './nav-profile.component';
import MainPost from './main-post.component';
import AdoptPost from './adopt-post.component';
import LostPost from './lost-post.component';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'username',
            bio: 'Digital Nomad & Espresso Enthusiast 🌍✈️ | Tech Innovator 💡| Aspiring Polyglot 📚| Part-time Poet 🖋️| Full-time Dreamer 💭| Lover of the stars and everything in between 🌌| Seeking the magic in the mundane | Lets make the impossible, possible together 🚀',
            isEditing: false
        };

        this.toggleEdit = this.toggleEdit.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setBio = this.setBio.bind(this);
    }

    toggleEdit() {
        this.setState(state => ({ isEditing: !state.isEditing }));
    }

    setUsername(username) {
        this.setState({ username });
        localStorage.setItem('username', username); // Store username in localStorage
    }

    componentDidMount() {
        const username = localStorage.getItem('username'); // Retrieve stored username
        if (username) {
            this.setState({ username });
        }
    }

    setBio(bio) {
        this.setState({ bio });
    }

    render(){

    const { isEditing, username, bio } = this.state;

        return (
            <div>
               <NavBarProfile />
            <div className ="profile-top"> 
                <div className ="profile-container1">
                    <div>
                        <img src="images/banner.png" className ="cover-img"/>
                        <img src="images/edit.png" className ="edit-cover-img-btn"/>
                    </div>        
                    
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.toggleEdit();
                    }}>
                        <div className ="profile-details">
                            <div className ="pd-left">
                                <div className ="pd-row">
                                    <div>
                                        <img src="images/profile-pic.png" className ="pd-image"/>
                                        <img src="images/edit.png" className ="edit-profile-pic-btn"/>
                                    </div>                         

                                    <div>
                                        <h3>{""} 
                                        {isEditing ? (
                                            <input 
                                                value={username} 
                                                onChange={(e) => {
                                                    this.setUsername(e.target.value);
                                                }} 
                                            />
                                        ) : ( <b>{username}</b> )}
                                        </h3>
                                        <p>{''} 
                                            {isEditing ? (
                                                <input 
                                                    value={bio} 
                                                    onChange={(e) => {
                                                        this.setBio(e.target.value);
                                                    }} 
                                                />
                                            ) : ( <b>{bio}</b> )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button type="submit">{isEditing ? "Save" : "Edit"} Profile </button>
                        </div>
                    </form>
                </div> 
            </div>  
                <div className ="profile-container2">   
                            <div className ="main-content">            
                                {/* <MainPostInput /> */}
                                {/* <AdoptPostInput /> */}
                                
                                <div >
                                    <div className ="post-container"><MainPost username={username} /> </div>

                                    <div className ="post-container"> <AdoptPost username={username} />  </div>

                                    <div className ="post-container"> <LostPost username={username} /> </div>
                                </div>

                                
                                    
                                </div>
                             
                    </div>
                </div>
            
        );
    }
}

export default Profile;
