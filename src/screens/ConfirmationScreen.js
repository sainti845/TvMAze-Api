import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./ConfirmationScreen.module.css";

const ConfirmationScreen = () => {
  const navigate = useNavigate();
  const backtohome=()=>{
  navigate('/');
  }
  return (
    <div className={styles.container}>
      <h1>Booking Confirmed</h1>
      <p>Thank you for your booking!</p>
      <button onClick={backtohome} className={styles.button}>Back to home</button>
    </div>
  );
};

export default ConfirmationScreen;
