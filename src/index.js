import React from 'react'
import ReactDOM from 'react-dom'
import Tippy from '@tippy.js/react'
import 'react-tippy/dist/tippy.css'
import './index.css'
import data from './data/movieList.json'
import NavBar from './components/NavBar'
import MovieItem from './components/MovieItem'

console.log({ Tippy })

function App() {
  return (
    <div className='App'>
      <NavBar />
      <MovieList />
    </div>
  )
}

//movie List component
function MovieList() {
  const [movies, setMovies] = React.useState(data)

  const removeItem = (id) => {
    let remainingMovies = movies.filter((movie) => movie.id !== id)
    setMovies(remainingMovies)
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
