import React, { useState } from 'react'

const Header = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    
    return (
        <header id="top">
            <a href="#top"><h1>MovieDB</h1></a>
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
