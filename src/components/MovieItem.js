import Stars from './Stars'
import * as FaIcons from 'react-icons/fa'

let watchList = []
const MovieItem = (props) => {
  //console.log(props)
  // attribute, eventHandler
  // onclick, onMouseOver

  const addToWatchlist = (e) => {
    watchList.push(title)
    console.log(watchList)
    console.log(e.target)
    //document.title = title
  }

  const { id, img, title, year, desc, rating } = props
  return (
    <>
      <div
        className='movie'
        onMouseOver={() => {
          //console.log(title)
        }}
      >
        <div>
          <img
            alt=''
            className='poster'
            style={{ width: 'auto', maxWidth: '182px', height: '268px' }}
            src={img}
            alt='poster'
            onClick={() => console.log(title)}
          />
          <span className='tooltiptext'>{desc}</span>
          <p>
            {title}
            <br />

            <h5 style={{ color: 'gold', margin: '7px  0' }}>Year: {year}</h5>
            <Stars rating={rating} />
            {/* {getRatings(movie?.rating ?? 'no rating')} */}
            <br></br>
            <button className='watchlistButt' onClick={addToWatchlist}>
              + Watchlist
            </button>
            <button
              style={{ float: 'right' }}
              className='watchlistButt'
              onClick={() => {
                props.removeItem(id)
              }}
            >
              Uninterested
            </button>
            <button
              className='onlyMeButt'
              onClick={() => {
                props.playPreview(id)
              }}
            >
              {' '}
              <FaIcons.FaPlay color='darkred' /> View Trailer
            </button>
          </p>
          {/* {props.children} */}
        </div>
      </div>
    </>
  )
}

export default MovieItem
