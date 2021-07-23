import React from 'react'
import ReactDOM from 'react-dom'
import Tippy from '@tippy.js/react'
import 'react-tippy/dist/tippy.css'
import './index.css'

const firstMovie = {
  title: '12 years a slave',
  year: '2013',
  desc: 'Chiwetel Ejiofor',
  img: 'https://upload.wikimedia.org/wikipedia/en/b/b3/12_Years_a_Slave_Soundtrack.png',
}

const secondMovie = {
  title: 'Lion King',
  year: '1993',
  desc: 'Simba regains his throne',
  img: 'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
}

const flash = {
  title: 'The Fash',
  year: 2015,
  desc: 'Run Barry run',
  img: 'https://upload.wikimedia.org/wikipedia/en/2/2e/The_Flash_season_6.jpg',
}

function NetFlix() {
  return (
    <>
      <NavBar />
      <MovieList />
    </>
  )
}

function NavBar() {
  return (
    <>
      <div className='topnav'>
        <a className='active' href='#home'>
          Netflix
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
function MovieList() {
  return (
    <>
      <br></br>
      <div className='movielist'>
        <MovieItem
          title={firstMovie.title}
          year={firstMovie.year}
          desc={firstMovie.desc}
          img={firstMovie.img}
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
        <MovieItem
          title={secondMovie.title}
          year={secondMovie.year}
          desc={secondMovie.desc}
          img={secondMovie.img}
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
        <MovieItem
          title={flash.title}
          year={flash.year}
          desc={flash.desc}
          img={flash.img}
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
        <MovieItem
          title='Infinity War'
          year='2018'
          desc='Thanos is Inevitable'
          img='https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg'
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
        <MovieItem
          title='Fatherhood'
          year='2021'
          desc='Kevin Hart'
          img='https://www.grandcentralpublishing.com/wp-content/uploads/2021/03/9781538734407.jpg?fit=492%2C750'
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
        <MovieItem
          title='12 years a slave'
          year='2013'
          desc='Chiwetel Ejiofor'
          img='https://upload.wikimedia.org/wikipedia/en/b/b3/12_Years_a_Slave_Soundtrack.png'
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
        <MovieItem
          title={flash.title}
          year={flash.year}
          desc={flash.desc}
          img={flash.img}
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
        <MovieItem
          title='Infinity War'
          year='2018'
          desc='Thanos is Inevitable'
          img='https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg'
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>

        <MovieItem
          title='Fatherhood'
          year='2021'
          desc='Kevin Hart'
          img='https://www.grandcentralpublishing.com/wp-content/uploads/2021/03/9781538734407.jpg?fit=492%2C750'
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
        <MovieItem
          title='Infinity War'
          year='2018'
          desc='Thanos is Inevitable'
          img='https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg'
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
        <MovieItem
          title='12 years a slave'
          year='2013'
          desc='Chiwetel Ejiofor'
          img='https://upload.wikimedia.org/wikipedia/en/b/b3/12_Years_a_Slave_Soundtrack.png'
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
        <MovieItem
          title={flash.title}
          year={flash.year}
          desc={flash.desc}
          img={flash.img}
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
        <MovieItem
          title='Fatherhood'
          year='2021'
          desc='Kevin Hart'
          img='https://www.grandcentralpublishing.com/wp-content/uploads/2021/03/9781538734407.jpg?fit=492%2C750'
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
        <MovieItem
          title='Lion King'
          year='1993'
          desc='Simba regains his throne'
          img='https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
        >
          <p>
            Lorem ipsum dolor sit amet elit adipisicing consectetur, Id, modi?
          </p>
        </MovieItem>
      </div>
    </>
  )
}

const MovieItem = (props) => {
  console.log(props)
  const { img, title, year, desc, children } = props
  return (
    <>
      <div className='movie'>
        <img
          className='poster'
          style={{ width: '182px', height: '268px' }}
          src={img}
        />
        {children}
      </div>
    </>
  )
}

const Movie = () => {
  return (
    <>
      <div className='movie'>
        <Image></Image>
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
    alt='pic'
  />
)

// ReactDOM.render(
//   <React.StrictMode>
//     <NetFlix />
//   </React.StrictMode>,
//   document.getElementById('
// )
