import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function NetFlix() {
  return (
    <>
      <MovieList />
    </>
  )
}

function MovieList() {
  return (
    <>
      <h1>Trending Now</h1>
      <section className='movielist'>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </section>
    </>
  )
}

const Movie = () => {
  return (
    <>
      <div className='movie'>
        <Image />
        <Title />
        <Description />
      </div>
    </>
  )
}

const Title = () => {
  return <h2>Lion King</h2>
}

const Description = () => {
  return (
    <h5 style={{ color: '#617d98', fontSize: '0.75rem', margin: '0.25rem' }}>
      Simba
    </h5>
  )
}

const Image = () => (
  <img
    src='https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
    alt='picture'
  />
)

ReactDOM.render(
  <React.StrictMode>
    <NetFlix />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
