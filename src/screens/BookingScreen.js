import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./BookingScreen.module.css";
const BookingScreen = () => {
  const [show, setShow] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error("Error fetching show:", error);
      }
    };

    fetchShow();
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const bookingForm = JSON.parse(localStorage.getItem("BOOKING")) || [];
    if (!bookingForm.length) {
      bookingForm.push({
        movieId: id,
        name,
        email,
      });
    } else {
      bookingForm.push({
        movieId: id,
        name,
        email,
      });
    }

    localStorage.setItem("BOOKING", JSON.stringify(bookingForm));
    // localStorage.setItem("movieId", id);
    // localStorage.setItem("name", name);
    // localStorage.setItem("email", email);
    window.location.href = "/confirmation";
  };

  return (
    <div className={styles.container}>
      {show ? (
        <>
          <h1>Booking for {show.name}</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                className={styles.input}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className={styles.input}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Confirm Booking
            </button>
          </form>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookingScreen;
