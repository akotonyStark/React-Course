import React from 'react'
import ReactDOM from 'react-dom'
import Tippy from '@tippy.js/react'
import 'react-tippy/dist/tippy.css'
import './index.css'
import * as FaIcons from 'react-icons/fa'
import movies from './data/movieList.json'

console.log({ Tippy })

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
          Netfakes
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

function Stars({ rating }) {
  let num = rating
  let temp = []

  for (let i = 1; i <= num; i++) {
    temp.push(i)
  }
  if (rating % 2 === 0.5 || rating % 2 === 1.5) {
    temp.push(rating)
  }

  return (
    <>
      {temp.map((star) => {
        if (star % 2 === 0.5 || star % 2 === 1.5) {
          return <FaIcons.FaStarHalf />
        }
        return <FaIcons.FaStar color='yellow' />
      })}
    </>
  )
}

let watchList = []
const MovieItem = (props) => {
  //console.log(props)
  // attribute, eventHandler
  // onclick, onMouseOver

  const addToWatchlist = (e) => {
    watchList.push(title)
    console.log(watchList)
    console.log(e.target)
  }
  const { img, title, year, desc, rating } = props
  return (
    <>
      <div
        className='movie'
        onMouseOver={() => {
          console.log(title)
        }}
      >
        <div>
          <img
            alt=''
            className='poster'
            style={{ width: '182px', height: '268px' }}
            src={img}
            onClick={() => console.log(title)}
          />
          <span className='tooltiptext'>{desc}</span>
          <p>
            {title}
            <br />

            <h5 style={{ color: 'gold', margin: '7px  0' }}>Year: {year}</h5>
            <Stars rating={rating} />
            {/* {getRatings(movie?.rating ?? 'no rating')} */}
            <br></br>
            <button className='watchlistButt' onClick={addToWatchlist}>
              {' '}
              + Watchlist
            </button>
          </p>
          {/* {props.children} */}
        </div>
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
          //const { img, title, year, desc, children } = movie
          //console.log(movie)
          return (
            // <MovieItem key={movie.id} movies={movie}>
            <MovieItem key={index} {...movie}></MovieItem>
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
