import React from 'react';
import '../styles/style.css';


class AdoptPostInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Initialize state for input fields
            title: '',
            caption: '',
            petName: '',
            speciesBreed: '',
            location: '',
            dateOfBirth: '',
        };
    }

    // Function to handle form submission
    handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Create a new post object from the state
        const newPost = {
            title: this.state.title,
            caption: this.state.caption,
            petName: this.state.petName,
            speciesBreed: this.state.speciesBreed,
            location: this.state.location,
            dateOfBirth: this.state.dateOfBirth,
        };
        // Call the addPost function passed down from parent
        this.props.addPost(newPost);
        // Clear input fields
        this.setState({
            title: '',
            caption: '',
            petName: '',
            speciesBreed: '',
            location: '',
            dateOfBirth: '',
        });
    };

    // Function to handle input changes
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render(){
        return (
            <div>
                <div class="write-post-container">
                    <form onSubmit={this.handleSubmit}>
                        
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
                                        Title: <input type="text" name="title" value={this.state.title} onChange={this.handleChange} class="textarea"/> 
                                    </div>
                                    <div class="input-text">
                                        Captions: <input type="text" name="caption" value={this.state.caption} onChange={this.handleChange} class="textarea"/> 
                                    </div>
                                    <div class="input-text">
                                        Pet Name: <input type="text" name="petName" value={this.state.petName} onChange={this.handleChange} class="textarea"/>
                                    </div>
                                    <div class="input-text">
                                        Species / Breed: <input type="text" name="speciesBreed" value={this.state.speciesBreed} onChange={this.handleChange} class="textarea"/> 
                                    </div>
                                    <div class="input-text">
                                        Location: <input type="text" name="location" value={this.state.location} onChange={this.handleChange} class="textarea"/>                        
                                    </div>
                                    
                                    <div class="add-post-links">
                                        <div class="input-text">
                                            Date of Birth: <input type="date" name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange}/>
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
} export default AdoptPostInput;