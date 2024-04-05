import React from 'react';
import '../styles/style.css';
import NavBar from './nav.component';
import LostPostInput from './lost-post-input.component';
import LostPost from './lost-post.component';


class Lost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [] // Array to hold the posts data
        };
    }

    addPost = (post) => {
        this.setState(prevState => ({
            posts: [...prevState.posts, post] // Add the new post to the existing posts array
        }));
    };

    render(){
        const { posts } = this.state;

        return(
            <div>
    
            <NavBar />
                <div class="container">
                    <div class="sidebar">
                        <div className="sidebar">
                            <div className="shortcut-links">            
                                <a href="./profile"><img src="images/profile.png" /><p>Profile</p></a>
                                <a href="./home"><img src="images/home.png" /><p>Home</p></a>
                                <a href="./lost"><img src="images/paw-heart.png" /><p>Lost and Found</p></a>
                                <a href="./adopt"><img src="images/paw.png" /><p className="highlight">Adoption Library</p></a>
                                <hr />
                            </div>
                        </div>           
                    </div>
        <div class="main-content">
            <div class="write-post-container"> <LostPostInput addPost={this.addPost} /> </div>
            <div class="post-container">               
                {posts.map((post, index) => (
                        <LostPost key={index} post={post} />
                    ))}
            </div>    
        </div>
        
        
        <div class="right-sidebar">
            <div class="right-title">
                <img src="images/address-book.png"/>
                <h2>Emergency Contacts</h2>
            </div>
            <hr/>
            <div class="right-info">
                <div class="contacts">
                    <div class="contact-label">
                        <img src="images/marker.png"/><h4>Sunnydale Veterinary Clinic</h4>
                    </div>
                    <ul>
                        <li>Address: 124 Oak Street, Sunnydale, CA 94086</li>
                        <li>Phone: (555) 123-4567</li>
                        <li>Email: <span class="email">info@sunnydalevet.com</span></li>
                        <li>Services: General checkups, vaccinations, emergency services</li>
                    </ul>
                </div>
                <div class="contacts">
                    <div class="contact-label">
                        <img src="images/marker.png"/><h4>Riverbank Animal Hospital</h4>
                    </div>
                    <ul>
                        <li>Address: 782 River Road, Springfield, IL 62704</li>
                        <li>Phone: (555) 234-5678</li>
                        <li>Email: <span class="email">contact@riverbankanimalhospital.com</span></li>
                        <li>Services: Surgery, dental care, wellness exams</li>
                    </ul>
                </div>
                <div class="contacts">
                    <div class="contact-label">
                        <img src="images/marker.png"/><h4>Greenfield Pet Clinic</h4>
                    </div>
                    <ul>
                        <li>Address: 339 Green Street, Greenfield, IN 46140</li>
                        <li>Phone: (555) 345-6789</li>
                        <li>Email: <span class="email">support@greenfieldpetclinic.com</span></li>
                        <li>Services: Diagnostic services, nutrition counseling, pharmacy</li>
                    </ul>
                </div>
                <div class="contacts">
                    <div class="contact-label">
                        <img src="images/marker.png"/><h4>Harborview Veterinary Services</h4>
                    </div>
                    <ul>
                        <li>Address: 560 Harborview Blvd, Miami, FL 33131</li>
                        <li>Phone: (555) 456-7890</li>
                        <li>Email: <span class="email">appointments@harborviewvet.com</span></li>
                        <li>Services: Orthopedic surgery, dermatology, cardiology</li>
                    </ul>
                </div>
                <div class="contacts">
                    <div class="contact-label">
                        <img src="images/marker.png"/><h4>Pine Ridge Veterinary Clinic</h4>
                    </div>
                    <ul>
                        <li>Address: 890 Pine Ridge Road, Boulder, CO 80302</li>
                        <li>Phone: (555) 567-8901</li>
                        <li>Email: <span class="email">pinevet@pineridgeclinic.com</span></li>
                        <li>Services: Acupuncture, physical therapy, preventive care</li>
                    </ul>
                </div>
                <div class="contacts">
                    <div class="contact-label">
                        <img src="images/marker.png"/><h4>Summit Veterinary Hospital</h4>
                    </div>
                    <ul>
                        <li>Address: 47 Summit Ave, Reno, NV 89501</li>
                        <li>Phone: (555) 678-9012</li>
                        <li>Email: <span class="email">info@summitvethospital.com</span></li>
                        <li>Services: Emergency care, oncology, behavioral therapy</li>
                    </ul>
                </div>
                <div class="contacts">
                    <div class="contact-label">
                        <img src="images/marker.png"/><h4>Willow Creek Animal Clinic</h4>
                    </div>
                    <ul>
                        <li>Address: 255 Willow Creek Path, Austin, TX 78745</li>
                        <li>Phone: (555) 789-0123</li>
                        <li>Email: <span class="email">contact@willowcreekanimalclinic.com</span></li>
                        <li>Services: Vaccinations, microchipping, senior pet care</li>
                    </ul>
                </div>
                <div class="contacts">
                    <div class="contact-label">
                        <img src="images/marker.png"/><h4>Lakeside Veterinary Practice</h4>
                    </div>
                    <ul>
                        <li>Address: 422 Lakeside Drive, Orlando, FL 32803</li>
                        <li>Phone: (555) 890-1234</li>
                        <li>Email: <span class="email">lakesidevet@lvpractice.com</span></li>
                        <li>Services: Exotic pet care, dental care, spay and neuter services</li>
                    </ul>
                </div>
                <div class="contacts">
                    <div class="contact-label">
                        <img src="images/marker.png"/> <h4>Mountain View Veterinary Clinic</h4>
                    </div>
                    <ul>
                        <li>Address: 108 Mountain Road, Denver, CO 80205</li>
                        <li>Phone: (555) 901-2345</li>
                        <li>Email: <span class="email">mountainview@mvvetclinic.com</span></li>
                        <li>Services: Emergency services, wellness exams, pet boarding</li>
                    </ul>
                </div>
                <div class="contacts">
                    <div class="contact-label">
                        <img src="images/marker.png"/> <h4>Cityside Animal Hospital</h4>
                    </div>  
                    <ul>
                        <li>Address: 670 Cityside Lane, New York, NY 10010</li>
                        <li>Phone: (555) 012-3456</li>
                        <li>Email: <span class="email">hello@citysideanimalhospital.com</span></li>
                        <li>Services: Surgical services, preventive care, pet nutrition</li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>

            </div>
        )
    }
}
export default Lost;