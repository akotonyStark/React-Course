import * as FaIcons from 'react-icons/fa'

function NavBar() {
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
          <FaIcons.FaSearch style={{ marginRight: '40px' }} />
          <FaIcons.FaBell style={{ marginRight: '40px' }} />
          <img
            className='profilePic'
            src='https://avatars.githubusercontent.com/u/25799830?v=4'
          />
        </div>
      </div>
    </>
  )
}

export default NavBar
