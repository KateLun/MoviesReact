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
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'Td24bfq18lmsh5KqGTIsh6amrNJRp1h4MngjsnIdn2a8CFcrl5',
                'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
            }
        };
        
        const response = await fetch(`https://moviesdb5.p.rapidapi.com/om?s=${movie}`, options)
        const data = await response.json()
        
        console.log(movie)
        console.log(data)
        setResult(movie)
        setMovie('')
        setFilms(data)
    }

    return (
        <div>
            <div className='mx-4 my-6'>
                <h1 className='text-4xl text-stone-700'>Welcome!</h1>
                <h2 className='text-2xl text-stone-500 pt-2'>Millions of movies, TV shows and people to discover. Explore now</h2>
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
            <h3 className='result-text'>Search results: {result} <span className='inp-val' id='searchRes'></span></h3>
            <Content films={films} />
        </div>
    )
}
export default Form