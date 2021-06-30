import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

function Greeting() {
  return (
    <>
      <h4>Hello world. This is Augustine Akoto</h4>
      <ul>
        <li>Tasha</li>
        <li>Nala</li>
      </ul>
      <article>This is an article</article>
    </>
  )
}

// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hello world. This is Augustine Akoto')
// }

ReactDOM.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
