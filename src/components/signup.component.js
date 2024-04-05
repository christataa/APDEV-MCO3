import React, { Component } from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';

class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          registrationSuccess: false,
          showPassword: false, // Added state to control password visibility
        };
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        });
    };

    toggleShowPassword = () => { // Method to toggle password visibility
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }));
    };

    handleSubmit = async (e) => {
        e.preventDefault();
      
        const { username, email, password, confirmPassword } = this.state;
      
        // Add your validation here (e.g., check if passwords match)
      
        try {
          const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
          });
      
          if (!response.ok) {
            throw new Error('Registration failed');
          }
      
          alert('Registration successful');
          this.setState({ registrationSuccess: true });
        } catch (error) {
          console.error('Error during registration:', error.message);
          alert('Registration failed. Please try again.');
        }
    };

    render(){
        const { registrationSuccess, showPassword } = this.state;

        if (registrationSuccess) {
            return (
              <div className="body">
                <div className="wrapper">
                  <h2>Registration Successful!</h2>
                  <p>Back to <Link to="/login">Log in</Link></p>
                </div>
              </div>
            );
        }

        return (
            <div className="body">   
                <div className="wrapper">
                    <a href="./login" className="exit">
                        <img src="images/cross-small.png" className="cross"/>
                    </a>
            
                    <h1>Register</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-box">
                            <input type="text" placeholder="Username" 
                            id="username" value={this.state.username} onChange={this.handleChange} required/>
                            <img src="images/user.png" className="user-icon"/>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" 
                            id="email" value={this.state.email} onChange={this.handleChange} required/>
                            <img src="images/envelope.png" className="email-icon"/>
                        </div>

                        <div className="input-box">
                            <input type={showPassword ? "text" : "password"} placeholder="Password"
                            id="password" value={this.state.password} onChange={this.handleChange} required/>
                            <img src="images/lock.png" className="lock-icon"/>
                        </div>
                        
                        <div className="input-box">
                            <input type={showPassword ? "text" : "password"} placeholder="Confirm Password" 
                            id="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required/>
                            <img src="images/lock (1).png" className="lock1-icon"/>
                        </div>

                        <div className="show" onClick={this.toggleShowPassword}>
                            <img src="images/eye.png" className="show-icon1"/> <label>Show Password</label>
                        </div>
                        <button type="submit" className="input-box">Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default signup;
