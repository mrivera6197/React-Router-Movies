import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios';

//components
import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(res => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(res.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Switch> 

        <Route path={'/movies/:id'}>
          <Movie movies={movieList}/>
        </Route>

        <Route path='/'>
          <MovieList movies={movieList}/>
        </Route>
      </Switch>
    </div>
  );
}
