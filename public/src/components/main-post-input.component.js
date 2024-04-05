import React from 'react';
import '../styles/style.css';


class MainPostInput extends React.Component {
    render(){
        return (
            <div className="write-post-container">
                <form action="#">
                    <div className="user-profile">
                        <img src="images/profile-pic.png" />
                        <div>
                            <p>User Name</p> 
                            <div className="visibility-container">
                                <select className="visibility">
                                <option value="public">Public</option>
                                <option value="friends">Friends Only</option>
                                <option value="private">Only Me</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-text">
                            <input type="text" placeholder="Add title" className="textarea" /> 
                        </div>
                        <div className="input-text">
                        <input type="text" placeholder="What's on your mind?" className="textarea" /> 
                        </div>
                        <div className="add-post-links">
                            <label for="photo-upload" className="custom-file-upload">
                                <img src="images/add-image.png" alt="Upload photo" /> Upload Photo</label>
                            <input id="photo-upload" type="file" className="input-btn" />                            
                        </div>
                        <button type="submit" className="post-btn"> post </button>
                    </div>
                </form>            

            </div>
        );
    }
}
export default MainPostInput;