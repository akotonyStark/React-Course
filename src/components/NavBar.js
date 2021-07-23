import * as FaIcons from 'react-icons/fa'
import { useState, useEffect } from 'react'

function NavBar() {
  const [username, setName] = useState('Mr Stark')
  const [show, setShow] = useState(false)

  const greet = 'Welcome ' + username || 'Welcome John Doe'
  const optionTwo = 'Welcome' && username

  const toggleIcon = (show) => {
    setShow(!show)
  }

  return (
    <>
      <div className='topnav'>
        <a className='active' href='#home'>
          Netfakes
        </a>
        <a href='#browse'>Home</a>
        <a href='#Series'>Series</a>
        <a href='#Movies'>Movies</a>
        <div className='hiddenNav'>
          <a href='#latest'>Latest</a>
          <a href='#MyList'>MyList</a>
        </div>

        <div className='userProfile'>
          {/* <FaIcons.FaSearch style={{ marginRight: '40px' }} /> */}
          {/* <FaIcons.FaBell style={{ marginRight: '40px' }} /> */}

          {/* <img
            className='profilePic'
            src='https://avatars.githubusercontent.com/u/25799830?v=4'
          /> */}

          {show && (
            <h5 style={{ display: 'inline-block', marginRight: '10px' }}>
              {greet}
            </h5>
          )}
          <FaIcons.FaToggleOn
            key='toggleMode'
            color='green'
            style={{ display: 'inline-block' }}
            onClick={() => toggleIcon(show)}
          />
        </div>
      </div>
    </>
  )
}

export default NavBar
