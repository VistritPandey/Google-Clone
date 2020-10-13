import React, { useState } from 'react'
import './Search.css'
import  SearchIcon from "@material-ui/icons/Search"
import  MicIcon from "@material-ui/icons/Mic"
import { Button } from '@material-ui/core'
import { useHistory } from "react-router-dom"

function Search() {
    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault()
        history.push('/search')
    }
    return (
        <form className='search'>
            <div className='search__input'>
               <SearchIcon className="search_inputIcon" />
               <input value={input} onChange={e => setInput(e.target.value)}/>
               <input />
               <MicIcon />
            </div>
            <div className="search__button">
            <Button type='submit' onClick={search} variant="outlined">
                Google Search 
            </Button>
        </div>
        </form>
    
    )
}

export default Search
