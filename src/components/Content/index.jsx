function Content( props ) {

    const { films } = props
    
    return (
        <div className='bg-main'> 
            {films.length === 0 && (
                <div className="mt-20 text-center text-7xl text-gray-400 font-thin">movies not found</div>)
            }
            {films.length > 0 && films.map((film) => {
                return (
                    <div className='flex flex-row '>
                        <div className='w-1/3' id='container'>
                            <p>{film.title}</p>
                            <p>{film.year}</p>
                        </div> 
                    </div> 
                )
            })}
        </div>
    )
}

export default Content