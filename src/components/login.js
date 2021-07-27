import { useState, useEffect } from 'react'
import MovieList from './MovieList'
import Profiles from './Profiles'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [users, addUserToLog] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({ username: '', password: '' })

  // const handleLogin = (e) => {
  //   //preventDefaults prevents the page from auto refresh on submit
  //   e.preventDefault()

  //   //using the tenary operators
  //   username == 'user' && password == 'password'
  //     ? setIsLoggedIn(true)
  //     : alert('Wrong login credentials')

  //   if (username && password) {
  //     const user = { username, password }
  //     //users.push(user)
  //     //console.log(users)
  //     addUserToLog((users) => {
  //       console.log('new user', [user])
  //       console.log('prev state', [users])
  //       return [...users, user]
  //     })
  //     setUsername('')
  //     setPassword('')
  //   } else {
  //     alert('Please enter login credentials')
  //   }
  // }

  //much easier to use this to handle multiple change values
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    //console.log(name, value)
    //setUser({ ...user, username: value, password: value })
    setUser({ ...user, [name]: value })
  }

  const handleLogin = (e) => {
    e.preventDefault()

    //using the tenary operators
    user.username == 'user' && user.password == 'password'
      ? setIsLoggedIn(true)
      : alert('Wrong login credentials')

    if (isLoggedIn) {
      const userLog = {
        username: user.username,
        password: user.password,
        loggedInAt: new Date().getTime().toString(),
      }
      //users.push(user)
      //console.log(users)
      addUserToLog((e) => {
        console.log('new user', [user])
        console.log('prev state', [users])
        return [...users, userLog]
      })
      setUser({ username: '', password: '' })
    }
  }

  return (
    <>
      <article>
        {!isLoggedIn ? (
          <form className='form' onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <p style={{ color: '#cecece', fontSize: '12px' }}>Username: user</p>
            <p style={{ color: '#cecece', fontSize: '12px' }}>
              Password: password
            </p>
            <div className='form-control' style={{ marginTop: '50px' }}>
              {/* <label htmlFor='username'>Username: </label> */}
              <input
                type='text'
                id='username'
                name='username'
                placeholder='Username'
                // value={username}
                value={user.username}
                //onChange={(e) => setUsername(e.target.value)}
                onChange={handleChange}
              />
            </div>
            <div className='form-control' style={{ marginTop: '20px' }}>
              {/* <label htmlFor='password'>Password: </label> */}
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                // value={password}
                value={user.password}
                //onChange={(e) => setPassword(e.target.value)}
                onChange={handleChange}
              />
            </div>

            <button
              className='onlyMeButt'
              type='submit'
              style={{ marginTop: '50px' }}
            >
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
