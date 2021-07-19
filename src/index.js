import React from 'react'
import ReactDOM from 'react-dom'
import Tippy from '@tippy.js/react'
import 'react-tippy/dist/tippy.css'
import './index.css'
import NavBar from './components/NavBar'
import MovieList from './components/MovieList'

console.log({ Tippy })

function App() {
  return (
    <div className='App'>
      <NavBar />
      <MovieList />
    </div>
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
