import React from 'react'
import MovieItem from './MovieItem'
import data from '../data/movieList.json'
import axios from 'axios'

const url = 'https://sleek-collections-api.herokuapp.com/products'
const URL = 'https://api.github.com/users'

//movie List component
function MovieList() {
  const [product, setProducts] = React.useState([])
  const [user, setUsers] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isError, setIsError] = React.useState(false)
  const [movies, setMovies] = React.useState(data)

  const removeItem = (id) => {
    // let remainingMovies = movies.filter((movie) => movie.id !== id)
    // setMovies(remainingMovies)
    //this setmovies updates the original state of the movies data
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

  const checkSize = () => {
    console.log(window.innerWidth)
  }

  const getProducts = async () => {
    axios(url)
      .then((response) => console.log(response.data))
      .then((response) => setProducts(response.data))
      .catch((error) => console.log('Error: ', error))
  }

  const getUsers = async () => {
    // const response = await fetch(URL)
    // const users = await response.json()
    // console.log('Users: ', users)
    // setUsers(users)

    axios(URL)
      .then((response) => console.log('Users: ', response.data))
      .then((response) => {
        setUsers(response)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        setIsError(true)
        console.log('Error: ', error)
      })
  }

  const getMovies = async () => {
    const movieData = fetch('../data/movieList.json')
      .then((response) => response.json())
      .then((movies) => {
        console.log(movies)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
    setMovies(movieData)
  }

  React.useEffect(() => {
    console.log('useEffect')
    console.log('fetching api data...')
    getProducts()
    getUsers()
    //getMovies()

    window.addEventListener('resize', checkSize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div style={{ textAlign: 'center', color: 'darkred' }}>
        <h1>Error...</h1>
      </div>
    )
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
