import React, { Component } from 'react';
import '../styles/style.css';

class about extends Component {
    
    render(){

        return (
            <div>   
                <div className ="body">
                    <div className="wrapper">
                    <a href="./login" className="exit">
                        <img src="images/cross-small.png" className="cross"/>
                    </a>
                        <h1>About</h1>
                        <br/>
                        <div>
                          <per>
                            "name": "html_to_react",
                            "version": "0.1.0",
                            "private": true,
                            "dependencies": 
                            "@testing-library/jest-dom": "^5.17.0",
                            "@testing-library/react": "^13.4.0",
                            "@testing-library/user-event": "^13.5.0",
                            "cors": "^2.8.5",
                            "react": "^18.2.0",
                            "react-dom": "^18.2.0",
                            "react-router-dom": "^6.22.3",
                            "react-scripts": "5.0.1",
                            "web-vitals": "^2.1.4"
                            </per >

                        </div>
                          

                    </div>
                </div>
            </div>
        );
    }
}

export default about;