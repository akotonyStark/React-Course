import React from 'react'
import ReactDOM from 'react-dom'
import Tippy from '@tippy.js/react'
import 'react-tippy/dist/tippy.css'
import './index.css'
import movies from './data/movieList.json'

console.log(movies)

function App() {
  return (
    <div className='App'>
      <NavBar />
      <MovieList />
    </div>
  )
}

function NavBar() {
  return (
    <>
      <div className='topnav'>
        <a className='active' href='#home'>
          Netflix
        </a>
        <a href='#news'>Home</a>
        <a href='#Series'>Series</a>
        <a href='#Movies'>Movies</a>
        <div className='hiddenNav'>
          <a href='#Originals'>Originals</a>
          <a href='#contact'>Recently Added</a>
          <a href='#MyList'>MyList</a>
        </div>
      </div>
    </>
  )
}

const MovieItem = (props) => {
  //console.log(props)
  const { img, title, year, desc } = props.movies
  return (
    <>
      <div className='movie'>
        <img
          className='poster'
          style={{ width: '182px', height: '268px' }}
          src={img}
        />
        {props.children}
      </div>
    </>
  )
}

function MovieList() {
  return (
    <>
      <br></br>
      <div className='movielist'>
        {movies.map((movie, index) => {
          const { img, title, year, desc, children } = movie
          return (
            // <MovieItem key={movie.id} movies={movie}>
            <MovieItem key={index} movies={movie}>
              <p>
                Lorem ipsum dolor sit amet elit adipisicing consectetur, Id,
                modi?
              </p>
            </MovieItem>
          )
          // return <MovieItem>{movie}</MovieItem>
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
