import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import { Link } from "react-router-dom";
import Search from "./Search"


function SearchPage() {
    const[{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data)
    return (
        <div className='searchpage'>
           <div className='searchpage__header'>
                <Link to ="/">
                <img className="searchPage_Logo"
                src = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt=""
                />
                </Link>
                <div className='searchPage__headerbody'>
                    <Search hideButtons />
                    <div className='searchPage__options'>
                    
                </div>
                </div>
                <div className='searchPage__results'>
                </div>
           </div> 
        </div>
    )
}

export default SearchPage
