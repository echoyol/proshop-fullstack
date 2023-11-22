import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

function Rating({ value, text }) {
  const renderStarIcon = (index) => {
    if (value >= index + 1) {
      return <FaStar />
    } else if (value >= index + 0.5) {
      return <FaStarHalfAlt />
    } else {
      return <FaRegStar />
    }
  }

  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i}>{renderStarIcon(i)}</span>)
    }
    return stars
  }

  return (
    <div className='rating'>
      {renderStars()}
      <span className='rating-text'>{text && text}</span>
    </div>
  )
}

export default Rating
