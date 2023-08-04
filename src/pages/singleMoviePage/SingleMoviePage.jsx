import React, { useEffect, useState } from 'react'
import styles from "./SingleMoviePage.module.css"
import { useParams } from 'react-router-dom'
import SingleMovieComponent from '../../components/singleMovieComponent/SingleMovieComponent';

const SingleMoviePage = () => {
  const { id } = useParams();
  const [singleMovieData, setSingleMovieData] = useState([]);
  const fetchMovieData = async (search) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${search}&apikey=${
          import.meta.env.VITE_MOVIE_API_KEY
        }`
      );
      const data = await response.json();
      setSingleMovieData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieData(id);
  }, []);
  return (
    <div className={styles.singleMovieComponentWrapper}>
      <SingleMovieComponent {...singleMovieData}/>
      
    </div>
  )
}

export default SingleMoviePage