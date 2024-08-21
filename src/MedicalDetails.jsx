import React from 'react';
import './App.css'; // Import the App.css file for styling

const MedicalDetails = ({ Case, condition, specialty, medicalHistory }) => {
  return (
    <div className="medical-card">
      <h3>Medical Details</h3>
      <p>Case: {Case}</p>
      <p>Condition: {condition}</p>
      <p>Specialty: {specialty}</p>
      <p>Medical History: {medicalHistory}</p>
    </div>
  );
};

export default MedicalDetails;
