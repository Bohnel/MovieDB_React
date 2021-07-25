import React, { useState } from 'react'

const Header = ({ getGenre, getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    const onGenre = (genre) => {
        getQuery('')
        setText('')
        getGenre(genre)
    }
    
    return (
        <header id="top">
            <a href="."><h1>MovieDB</h1></a>
            <input type="button" className="genre" style={{padding: 0}} onClick={(e) => onGenre(e.target.id)} value="Action" id="28"></input>
            <input type="button" className="genre" style={{padding: 0}} onClick={(e) => onGenre(e.target.id)} value="Comedy" id="35"></input>
            <input type="button" className="genre" style={{padding: 0}} onClick={(e) => onGenre(e.target.id)} value="Drama" id="18"></input>
            <input type="button" className="genre" style={{padding: 0}} onClick={(e) => onGenre(e.target.id)} value="Favs" id="3"></input>
            <form>
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Search...' 
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                    />
            </form>
        </header>
    )
}

export default Header
