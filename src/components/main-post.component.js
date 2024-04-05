import React from 'react';
import '../styles/style.css';
import CommentsContainer from '../components/CommentsContainer';

class MainPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likesAmount: 7,
            isLiked: false,
            editing: false,
            caption: 'Found this lost Husky in front of my house. Whoever owns this adorable furball message me ASAP!!! Owner you better reply to me soon OR ELSE I will really end up keeping him I think I\'ll name him Snow.',
            tempCaption: '',
            isPostVisible: true, // State to control the visibility of the post
        };
    }

    toggleLike = () => {
        this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            likesAmount: prevState.isLiked ? prevState.likesAmount - 1 : prevState.likesAmount + 1,
        }));
    };

    startEdit = () => {
        this.setState({ editing: true, tempCaption: this.state.caption });
    };

    handleCaptionChange = (event) => {
        this.setState({ tempCaption: event.target.value });
    };

    saveEdit = () => {
        this.setState({ editing: false, caption: this.state.tempCaption });
    };

    cancelEdit = () => {
        this.setState({ editing: false, tempCaption: '' });
    };

    deletePost = () => {
        this.setState({ isPostVisible: false }); // Function to "delete" the post by hiding it
    };

    render() {
        const { likesAmount, isLiked, editing, caption, tempCaption, isPostVisible } = this.state;
        const { username } = this.props;

        // If the post is not visible, don't render anything
        if (!isPostVisible) {
            return <div className="post-deleted-message">Post Deleted</div>;
        }

        return (
            <div>
                <div className="user-profile">
                    <img src="images/profile-pic.png" className="user-img"/>
                    <div>
                        <p>title</p>
                        <span>{username}</span>
                    </div>
                    <div className="btn-container">
                        <button className="edit-post-btn2" onClick={this.startEdit}><img src="images/edit-post.png" alt="Edit Post"/></button>
                        {/* Add onClick event handler to delete button */}
                        <button className="delete-post-btn2" onClick={this.deletePost}><img src="images/trash-post.png" alt="Delete Post"/></button>
                    </div>  
                    <hr/>                  
                </div>
                {editing ? (
                    <div>
                        <textarea value={tempCaption} onChange={this.handleCaptionChange} className="caption-edit" />
                        <button onClick={this.saveEdit}>Save</button>
                        <button onClick={this.cancelEdit}>Cancel</button>
                    </div>
                ) : (
                    <p className="caption">{caption}</p>
                )}
                <img src="images/post-image.jpg" className="post-img" alt="Lost Husky" />
                <div className="reacts-container">
                    <div className="like-button" onClick={this.toggleLike}>
                        <div className={`heart-icon ${isLiked ? 'liked' : ''}`}></div>
                    </div>
                    <button className="view-comments">
                        <img src="images/comment-dots.png" alt="View Comments" />
                    </button>
                </div>
                <div className="like-button">
                    <div className="likes-amount">{likesAmount}</div>
                    <div className="likes-text">likes</div>
                </div>
                <CommentsContainer />
            </div>
        );
    }
}

export default MainPost;
