import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import Image from '../components/Image';
// import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [enrollNo, setEnrollNo] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="signup-container">
      <div className="row">
        <div className="col-md-6">
          <div className="login-image">
            <Image
              imageUrl="https://thumbs.dreamstime.com/z/woman-using-laptop-student-girl-working-computer-search-internet-around-stacks-books-question-marks-drawn-white-wall-217088276.jpg"
              altText="Login Image"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="signup-form">
            <h1>Sign Up</h1>
            <CustomInput
              label="Name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CustomInput
              label="Email"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              label="Number"
              type="text"
              placeholder="Enter your number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <CustomInput
              label="Enrollment No"
              type="text"
              placeholder="Enter your enrollNo"
              value={enrollNo}
              onChange={(e) => setEnrollNo(e.target.value)}
            />
            <CustomInput
              label="Password"
              type="text"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
