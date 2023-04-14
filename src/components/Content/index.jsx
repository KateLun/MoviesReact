import Button from 'components/Button';
import 'components/Content/Content.css';

function Content( props ) {

    const { films } = props
    
    async function showInformation(imdbID) {
        if (imdbID) {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'Td24bfq18lmsh5KqGTIsh6amrNJRp1h4MngjsnIdn2a8CFcrl5',
                    'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
                }
            };

            const response = await fetch(`https://moviesdb5.p.rapidapi.com/om?i=${imdbID}`, options)
            const info = await response.json()
    
            console.log(info.Search)
            console.log("КНОПКА РАБОТАЕТ")
        }
    }

    return (
        <div className=''> 
            {films.length === 0 && (
                <div className="mt-20 text-center text-7xl text-gray-400 font-thin pb-48">movies not found</div>)
            }
            {films.length > 0 && films.map((film) => {
                return (
                    <div className='movie_result'> 
                        <div className='movie_card' >
                            <img className='poster' alt='' src={film.Poster} />
                            <p>{film.Title} ({film.Year})</p>
                            <Button title='Information' handleClick={showInformation} />
                        </div> 
                    </div> 
                )
            })}
        </div>
    )
}

export default Content