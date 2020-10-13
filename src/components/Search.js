import React from 'react'
import './Search.css'
import  SearchIcon from "@material-ui/icons/Search"
import  MicIcon from "@material-ui/icons/Mic"

function Search() {
    return (
        <div className='search'>
            <div className='search__input'>
               <SearchIcon className="search_inputIcon" />
               <input />
               <MicIcon />
            </div>
        </div>
    )
}

export default Search
