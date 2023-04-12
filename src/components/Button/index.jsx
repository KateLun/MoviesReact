function Button(props) {

    const { title, handleClick } = props
    
    return (
        <button onClick={event => handleClick(event)} className="mx-10 bg-blue-800 rounded-lg text-xl text-white px-4 py-2 shadow-md font-semibold">
            {title}
        </button>
    )
}

export default Button