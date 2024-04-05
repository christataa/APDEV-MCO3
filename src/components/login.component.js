import React, { Component } from 'react';
import '../styles/style.css';
import { Navigate, Link } from 'react-router-dom';

class login extends Component {
   constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        showPassword: false,
        loggedIn: false
    };
   }

   handleChange = (e) => { // Corrected the method name
    this.setState({
        [e.target.name]: e.target.value
    });
}

   togglePasswordVisibility = () => {
    this.setState(prevState => ({
        showPassword: !prevState.showPassword
    }));
   }

   handleSubmit = async (e) => { 
    e.preventDefault();
    const { username, password } = this.state;

        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Invalid response format');
            }

            const userData = await response.json();

            if (!response.ok || !userData) {
                throw new Error('User not found or invalid credentials');
            }

            console.log('User is logged in');
            localStorage.setItem('username', username);
            console.log(username);
            this.setState({ loggedIn: true });
        } catch (error) {
            console.error('Error logging in:', error.message);
            this.setState({ loggedIn: true });
            if (error.message === 'Invalid response format') {
                alert('Error logging in. Please try again.');
            } else {
                alert('Invalid credentials. Please try again.');
            }
        }
   }
    componentDidMount() {
        const eyeIcon = document.getElementById("eyeicon");
        const password = document.getElementById("password");

        eyeIcon.onClick = () => {
            if(password.type === "password") {
                password.type = "text";
            } else {
                password.type = "password";
            }
        };
    }

    render(){

        const { username, password, loggedIn } = this.state;

        if (loggedIn) {
            return <Navigate to="./home" />;
        }

        return (
            <div>   
                <div className ="body">
                    <div className="wrapper">
                        <h1>Log In</h1>
                          <form onSubmit={this.handleSubmit}>
                            <div className="input-box">
                                <input type="text" placeholder="Username"
                                name="username" value={username} onChange={this.handleChange}required />
                                <img src="images/user.png" className="user-icon" />
                            </div>

                            <div className="input-box">
                                <input type="password" placeholder="Password"
                                name="password" value={password} onChange={this.handleChange}required />
                                <img src="images/eye.png" id="eyeicon" className="show-icon" />
                            </div>

                            <button type="submit" className="input-box">Login</button>
                          </form>

                        <div className="register-link">
                            <p>Don't have an account? <a href="./home">Skip To Home</a></p>
                            <p>Don't have an account? <a href="./signup">Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default login;