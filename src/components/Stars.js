function Stars({ rating }) {
  let num = rating
  let temp = []

  for (let i = 1; i <= num; i++) {
    temp.push(i)
  }
  if (rating % 2 === 0.5 || rating % 2 === 1.5) {
    temp.push(rating)
  }

  return (
    <>
      {temp.map((star) => {
        if (star % 2 === 0.5 || star % 2 === 1.5) {
          return <FaIcons.FaStarHalf />
        }
        return <FaIcons.FaStar color='yellow' />
      })}
    </>
  )
}
