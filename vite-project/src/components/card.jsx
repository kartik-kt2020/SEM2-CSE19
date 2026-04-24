import React from 'react';

const Card = ({ studentName, studentRollNo, img }) => {
  return (
    <div className="card">
      <h3>Student Information</h3>
      <img src={img} alt="Student" />
      <h3>Student name: {studentName}</h3>
      <h3>Student roll no: {studentRollNo}</h3>
    </div>
  );
}

export default Card;