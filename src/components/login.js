import { useState, useEffect } from 'react'
import MovieList from './MovieList'
import Profiles from './Profiles'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [users, addUserToLog] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e) => {
    //preventDefaults prevents the page from auto refresh on submit
    e.preventDefault()

    //using the tenary operators
    username == 'user' && password == 'password'
      ? setIsLoggedIn(true)
      : alert('Wrong login credentials')

    if (username && password) {
      const user = { username, password }
      //users.push(user)
      //console.log(users)
      addUserToLog((users) => {
        console.log('new user', [user])
        console.log('prev state', [users])
        return [...users, user]
      })
      setUsername('')
      setPassword('')
    } else {
      alert('Please enter login credentials')
    }
  }

  return (
    <>
      <article>
        {!isLoggedIn ? (
          <form className='form' onSubmit={handleLogin}>
            <div className='form-control'>
              {/* <label htmlFor='username'>Username: </label> */}
              <input
                type='text'
                id='username'
                name='username'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='form-control'>
              {/* <label htmlFor='password'>Password: </label> */}
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className='onlyMeButt' type='submit'>
              Login
            </button>
          </form>
        ) : null}
        {isLoggedIn ? <Profiles /> : null}
      </article>
    </>
  )
}

export default Login
