import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const clickMessage = (e) => {
      console.log('Hello')
  }
  
  return (
    <div className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={clickMessage}/>
    </div>
  )
}

Header.defaultProps = {
    title: 'Default text'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// Styling contained within a variable
// const headerStyle = {
//     color: 'red',
//     backgroundColor: 'blue',
// }

export default Header
