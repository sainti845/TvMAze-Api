import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ShowSummaryScreen.module.css";
const ShowSummaryScreen = () => {
  const [summary, setSummary] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchShowSummary = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        console.log(data);
        setSummary(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching show summary:", error);
      }
    };

    fetchShowSummary();
  }, [id]);

  console.log(summary);

  if (loading) {
    return <span>loading...</span>;
  }
  return (
    <div className={styles.container}>
      <div className="styles.left">
        <img src={summary?.image?.medium} className={styles.image}/>
      </div>
      <div className="styles.right">
      <h1>{summary?.name}</h1>
      <p>{summary?.genres && summary?.genres?.join(', ')}</p>
      <div dangerouslySetInnerHTML={{ __html: summary?.summary }} />
      <Link to={summary?.network?.officialSite} claassName="btn btn-success">Official Site</Link>
      <br/>
        <Link to={`/booking/${id}`} className="btn btn-primary">
          Book Ticket
        </Link>
      </div>

      
    </div>
  );
};

export default ShowSummaryScreen;
