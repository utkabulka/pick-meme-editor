import PropTypes from 'prop-types'

function Card({
  id = '',
  text = 'Card text',
  author = 'Author',
  cardColor = '#000000',
  textColor = '#FFFFFF',
  onDelete = () => {},
}) {
  const styles = {
    color: textColor,
    backgroundColor: cardColor,
  }

  return (
    <div className='card' style={styles}>
      <p>{text}</p>
      <p className='author'>#{author.toUpperCase()}</p>
      <button onClick={() => {onDelete(id)}}>Delete</button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  cardColor: PropTypes.string,
  textColor: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default Card
