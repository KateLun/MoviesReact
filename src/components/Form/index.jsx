import Button from 'components/Button';
//import 'components/Form/styles.scss';
import 'components/Form/Form.css';
import { useState } from "react";
import Content from 'components/Content';

function Form( ) {

    const [ movie, setMovie ] = useState('')
    const [ result, setResult ] = useState('')
    const [ films, setFilms ] = useState([])

    async function showMovies(e) {
        e.preventDefault()
        if (movie) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'Td24bfq18lmsh5KqGTIsh6amrNJRp1h4MngjsnIdn2a8CFcrl5',
                'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
            }
        };
        
        const response = await fetch(`https://moviesdb5.p.rapidapi.com/om?s=${movie}`, options)
        const data = await response.json()
        
        console.log(data)
        setResult(movie)
        setMovie('')
        setFilms(data.Search)
        console.log(data.Search)
    }
    }

    return (
        <div>
            <div className='py-8'>
                <div className='flex flex-row gap-2'>
                    <h1 className='welcome'>Welcome!</h1>
                    <img className='popcorn' alt='' src='https://pngicon.ru/file/uploads/popcorn.png' />
                </div>
                <h2 className='textsmall'>Millions of movies, TV shows and people to discover. Explore now</h2>
            </div>
            <form className='form'>
                <input 
                    onChange={(e) => setMovie(e.target.value)}
                    value={movie}
                    className='input' 
                    type='text' 
                    placeholder='Search for a movie....( English )' />
                <Button title='Search' handleClick={showMovies} type='submit' />
            </form>
            <h3 className='result-text'>Search results for: {result} <span className='inp-val' id='searchRes'></span></h3>
            <Content films={films} />
        </div>
    )
}
export default Form