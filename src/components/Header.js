import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <div>
        <h1>Task Tracker</h1>
        <p>{title}</p>
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
