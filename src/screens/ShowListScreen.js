import React, { useState, useEffect } from 'react';
import{useNavigate} from "react-router-dom"
import ShowCard from '../components/ShowCard';
import styles from "./ShowListScreen.module.css";


const ShowListScreen = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  const handleViewSummary = (show) => {
    
    navigate(`/show/${show.id}`);
  };

  return (
    <div className={styles.container }>
      <h1 className={styles.h1}>TV Show List</h1>
      <div className={styles.row}>
        {shows.map((show) => (
          <div className="" key={show.show.id}>
            <ShowCard show={show.show} onViewSummary={handleViewSummary} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowListScreen;
