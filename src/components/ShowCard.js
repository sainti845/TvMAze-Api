import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from "./ShowCard.module.css"

const ShowCard = ({ show, onViewSummary }) => {
  return (
    <Card className={styles.card}>
      <Card.Img className={styles.image} variant="top" src={show.image && show.image.medium} alt={show.name} />
      <Card.Body>
        <Card.Title className={styles.description}>{show.name}</Card.Title>
        <Card.Text className={styles.description}>{show.genres && show.genres.join(', ')}</Card.Text>
        <Button className={`${styles.description} ${styles.button}`} variant="primary" onClick={() => onViewSummary(show)}>View Summary</Button>
      </Card.Body>
    </Card>
  );
};

export default ShowCard;
