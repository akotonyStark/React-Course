import React from 'react'
import MovieItem from './MovieItem'
import data from '../data/movieList.json'

//movie List component
function MovieList() {
  const [movies, setMovies] = React.useState(data)

  const removeItem = (id) => {
    // let remainingMovies = movies.filter((movie) => movie.id !== id)
    // setMovies(remainingMovies)
    setMovies((originalMovieList) => {
      let remainingMovies = originalMovieList.filter((movie) => movie.id !== id)
      return remainingMovies
    })
  }

  const playPreview = (id) => {
    let selectedMovie = movies.filter((movie) => movie.id === id)
    //setMovies(selectedMovie)
    console.log(selectedMovie)
  }

  return (
    <>
      <br></br>
      <div className='movielist'>
        {movies.map((movie, index) => {
          //const { img, title, year, desc, children } = movie
          //console.log(movie)
          return (
            // <MovieItem key={movie.id} movies={movie}>
            <MovieItem
              key={index}
              {...movie}
              removeItem={removeItem}
              playPreview={playPreview}
            ></MovieItem>
          )
        })}
      </div>
    </>
  )
}

export default MovieList
