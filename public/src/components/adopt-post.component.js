import React from 'react';
import '../styles/style.css';
import CommentsContainer from '../components/CommentsContainer';

class AdoptPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likesAmount: 0,
            isLiked: false,
            isEditing: false,
            isPostVisible: true,
        };
    }

    toggleLike = () => {
        this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            likesAmount: prevState.isLiked ? prevState.likesAmount - 1 : prevState.likesAmount + 1,
        }));
    };

    startEdit = () => {
        this.setState({ isEditing: true });
    };

    handleCaptionChange = (event) => {
        this.setState({ caption: event.target.value });
    };

    saveEdit = () => {
        this.setState({ isEditing: false });
    };

    cancelEdit = () => {
        this.setState({ isEditing: false });
    };

    deletePost = () => {
        this.setState({ isPostVisible: false });
    };


    render() {
        const { likesAmount, isLiked, isEditing, isPostVisible } = this.state;
        const { post } = this.props;

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
                                <small>Name: </small> <div className="pet-name">{post.petName}</div>
                            </div>                        
                            <span><hr/></span>
                            <div className="birth">
                                <small>Date of Birth: </small> <div className="birthdate">{post.dateOfBirth}</div>
                            </div>
                            <div className="breed"> 
                                <small>Species/Breed: </small> <div className="pet-type">{post.speciesBreed}</div>
                            </div>
                            <div className="loc"> 
                                <small>Location: </small> <div className="location">{post.location}</div>
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
                                <span>username</span>
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
                                <textarea value={post.caption} onChange={this.handleCaptionChange} className="caption-edit" />
                                <button onClick={this.saveEdit}>Save</button>
                                <button onClick={this.cancelEdit}>Cancel</button>
                            </div>
                        ) : (
                            <div className="captions2">{post.caption}</div>                    
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

export default AdoptPost;