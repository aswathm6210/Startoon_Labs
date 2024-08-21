import React from 'react';
import './App.css'; 

const ProfileDetails = ({ name, gender, age, picture, phone, email, patientID }) => {
  return (
    <div className="profile-card">
      <img src={picture} alt="Profile" />
      <div>
        <h2>{name}</h2>
        <p>Gender: {gender}</p>
        <p>Age: {age}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Patient ID: {patientID}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
