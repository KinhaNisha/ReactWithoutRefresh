import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import Image from '../components/Image';
// import './Login.css';

const Login = () => {
  const [emailOrNumber, setEmailOrNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <div className="row">
        <div className="col-md-6">
          <div className="login-form">
            <h1>Login</h1>
            <CustomInput
              label="Email or Number"
              type="text"
              placeholder="Enter your email or number"
              value={emailOrNumber}
              onChange={(e) => setEmailOrNumber(e.target.value)}
            />
            <CustomInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary">Log In</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="login-image">
            <Image
              imageUrl="https://thumbs.dreamstime.com/z/woman-using-laptop-student-girl-working-computer-search-internet-around-stacks-books-question-marks-drawn-white-wall-217088276.jpg"
              altText="Login Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
