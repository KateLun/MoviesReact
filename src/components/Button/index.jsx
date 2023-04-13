import 'components/Button/Button.css';

function Button(props) {

    const { title, handleClick } = props
    
    return (
        <button onClick={event => handleClick(event)} className='button' >
            {title}
        </button>
    )
}

export default Button