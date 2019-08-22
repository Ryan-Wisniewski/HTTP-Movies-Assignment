import React, {useState, useEffect} from 'react'
import axios from 'axios'

const initialMovie = {
    title: '',
    director: '',
    metascore: '',
}

const MovieForm = props => {
    // console.log('form',props)
    const [movie, setMovie] = useState(initialMovie)
    // useEffect(() => {

    // })
    const chageHandler = (e) => {
        //change to persist for testing
        // e.preventDefault()
        e.persist()
        let value = e.target.value
    setMovie({
        ...movie,
        [e.target.name]: value
    })
    // console.log(movie)
}
    
    const handleSubmit = e =>{
        e.preventDefault()
        //axios put call here
        axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => {
        console.log('res',res)       
        setMovie(initialMovie)
        console.log('movie',movie)
        props.updateItems(res.data)
        props.history.push('/movies')
      })
      .catch(err => console.log(err));
    }

    return (
        <>
            <h2>Update Items</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='title'
                    placeholder='Title'
                    onChange={chageHandler}
                    value={movie.title}
                />

                <input 
                    type='text'
                    name='director'
                    placeholder='Director'
                    onChange={chageHandler}
                    value={movie.director}
                />

                <input 
                    type='text'
                    name='metascore'
                    placeholder='MetaScore'
                    onChange={chageHandler}
                    value={movie.metascore}
                />
                <input 
                    type='text'
                    name='stars'
                    placeholder='stars'
                    onChange={chageHandler}
                    value={movie.stars}
                />
                <button type='submit'>Submit!</button>
             </form>
        </>
    )
}

export default MovieForm