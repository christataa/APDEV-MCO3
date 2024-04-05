import React, { useState } from 'react';
import '../styles/style.css';
import CommentsContainer from '../components/CommentsContainer';

class LostPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likesAmount: 0, // Assuming starting likes amount is 0 for the cow post
            isLiked: false,
            isEditing: false,
            isPostVisible: true, // State to control the visibility of the post
            caption: `Meet [Cow's Name], a gentle and loving bovine friend ready to find a forever pasture! With a heart as big as their moo, [Cow's Name] is a [age]-year-old [breed] cow with a unique personality that shines brighter than the morning sun on a dewy meadow. This adorable cow enjoys leisurely grazing, peaceful afternoons under the shade of a big oak tree, and the occasional scratch behind the ears. [Cow's Name] is not just a cow, but a companion who appreciates the simple joys of farm life. Whether you're a seasoned farmer or someone with a sizable piece of land looking for a gentle giant to add to your family, [Cow's Name] could be the perfect match. They are up-to-date on all vaccinations, health checks, and come with a health guarantee to ensure they're ready to seamlessly join their new home. Adopting a cow is a rewarding experience that brings a lot of joy and a bit of fun moo-sic into your life. If you're ready to welcome [Cow's Name] into your heart and home, please contact us for more information on how you can adopt this lovable cow. Let's give [Cow's Name] the loving forever home they deserve!`,
            editableCaption: '', // Temporary storage for caption while editing
        };
    }

    toggleLike = () => {
        this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            likesAmount: prevState.isLiked ? prevState.likesAmount - 1 : prevState.likesAmount + 1,
        }));
    };

    startEdit = () => {
        this.setState({ isEditing: true, editableCaption: this.state.caption });
    };

    handleCaptionChange = (event) => {
        this.setState({ editableCaption: event.target.value });
    };

    saveEdit = () => {
        this.setState({ isEditing: false, caption: this.state.editableCaption });
    };

    cancelEdit = () => {
        this.setState({ isEditing: false, editableCaption: '' });
    };

    deletePost = () => {
        this.setState({ isPostVisible: false }); // Hide the post
    };


    render() {
        const { likesAmount, isLiked, isEditing, caption, editableCaption, isPostVisible } = this.state;
        const { username } = this.props;
        if (!isPostVisible) {
            return <div className="post-deleted-message">Post Deleted</div>;
        }

        return (
            <div>
                <div className="post-top">                                            
                    <div className="adopt-pet-profile">
                        <img src="images/cow.jpg" className="pet-profile-img"/>
                        <div className="pet-info">
                            <div className="name">
                                <small>Name: </small> <div className="pet-name">CoWoo</div>
                            </div>                        
                            <span><hr/></span>
                            <div className="birth">
                                <small>Date of Birth: </small> <div className="birthdate">12/28/2003</div>
                            </div>
                            <div className="breed"> 
                                <small>Species/Breed: </small> <div className="pet-type">cow</div>
                            </div>
                            <div className="loc"> 
                                <small>Location: </small> <div className="location">omooshu</div>
                            </div>
                            <div className="date-posted">
                                <small>Date Posted: </small> <div className="date">09/03/2024</div>
                            </div>
                        </div>                
                    </div>
                    <div className="captions-col">                
                        <div className="user-profile">
                            <img src="images/profile-pic.png" className="user-img"/>
                            <div>
                                <p>title</p>
                                <span>{username}</span>
                            </div>
                            <div className="btn-container">
                        {!isEditing && (
                            <button className="edit-post-btn2" onClick={this.startEdit}><img src="images/edit-post.png" alt="Edit Post"/></button>
                        )}
                        <button className="delete-post-btn2" onClick={this.deletePost}><img src="images/trash-post.png" alt="Delete Post"/></button>
                    </div>
                    <hr/>
                </div>

                {isEditing ? (
                    <div>
                        <textarea value={editableCaption} onChange={this.handleCaptionChange} className="caption-edit" />
                        <button onClick={this.saveEdit}>Save</button>
                        <button onClick={this.cancelEdit}>Cancel</button>
                    </div>
                ) : (
                    <div className="captions2">{caption}</div>                    
                )}
                        <div className="reacts-container2">                                         
                            <div className="like-button2" onClick={this.toggleLike}>                        
                                <div className={`heart-icon2 ${isLiked ? 'liked' : ''}`}></div>
                                <div className="likes-amount2">{likesAmount}</div>
                                <div className="likes-text2">likes</div>
                            </div>
                            <button className="view-comments2">
                                <img src="images/comment-dots.png" alt="View Comments"/>
                            </button>                    
                        </div>
                        <CommentsContainer/>    
                    </div>                    
                </div> 
            </div>
        );
    }
}

export default LostPost;
