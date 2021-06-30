import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    const clickMessage = (e) => {
        console.log('I was clicked!')
    }

    return <button 
            style={{backgroundColor: color}}
            className='btn'
            onClick={onClick}
        >
            {text}
        </button>
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Default'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button