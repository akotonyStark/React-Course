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
