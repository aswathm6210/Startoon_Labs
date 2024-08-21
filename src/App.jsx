import React from 'react';
import ProfileDetails from './ProfileDetails';
import MedicalDetails from './MedicalDetails';
import GoalProgress from './GoalProgress';
import './App.css';

const App = () => {

  const profileData = {
    name: 'sankar',
    gender: 'Male',
    age: 20,
    picture: 'pictures/profile.jpeg',
    phone: '1234567890',
    email: 'sankar@gmail.com',
    patientID: '008',
  };

  const medicalData = {
    Case: 'accident',
    condition: 'severe',
    specialty: 'icu',
    medicalHistory: 'normal',
  };

  const goalPercentage = 75;

  return (
    <div className="App">
      <ProfileDetails {...profileData} />
      <MedicalDetails {...medicalData} />
      <GoalProgress percentage={goalPercentage} />
    </div>
  );
};

export default App;
