import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login.component'; 
import Home from './components/home.component';
import Profile from './components/profile.component';
import Lost from './components/lost.component';
import Adopt from './components/adopt.component';
import Signup from './components/signup.component';
import EditProfile from './components/editprofile.component';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/lost" element={<Lost />} /> 
          <Route path="/adopt" element={<Adopt />} /> 
          <Route path="/editprofile" element={<EditProfile />} /> 
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
