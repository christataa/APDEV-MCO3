import React from 'react';
import '../styles/style.css';


class LostPostInput extends React.Component {
    render(){
        return (
            <div>
                <div class="write-post-container">
                            <form action="#">
                                <div class="user-profile">
                                    <img src="images/profile-pic.png"/>
                                    <div>
                                        <p>User Name</p> 
                                        <div class="visibility-container">
                                            <select class="visibility">
                                            <option value="public">Public</option>
                                            <option value="friends">Friends Only</option>
                                            <option value="private">Only Me</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-container">
                                    <div class="input-text">
                                        Title: <input type="text" class="textarea"/> 
                                    </div>
                                    <div class="input-text">
                                        Captions: <input type="text" class="textarea"/> 
                                    </div>
                                    <div class="input-text">
                                        Pet Name: <input type="text" class="textarea"/>
                                    </div>
                                    <div class="input-text">
                                        Species / Breed: <input type="text" class="textarea"/> 
                                    </div>
                                    <div class="input-text">
                                        Location: <input type="text" class="textarea"/>                        
                                    </div>
                                    
                                    <div class="add-post-links">
                                        <div class="input-text">
                                            Date of Birth: <input type="date"/>
                                        </div> 
                                        <label for="photo-upload" class="custom-file-upload">
                                            <img src="images/add-image.png" alt="Upload photo"/> Upload Photo</label>
                                        <input id="photo-upload" type="file" class="input-btn"/>  
                                                                
                                    </div>
                                    <button type="submit" class="post-btn"> post </button>
                                </div>
                            </form>                
                        </div>
            </div>
        );
    }
} export default LostPostInput;