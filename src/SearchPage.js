import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';

function SearchPage() {
    const[{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data)
    return (
        <div className='searchpage'>
           <div className='searchpage__header'>
                <h1>{term}</h1>
           </div> 
        </div>
    )
}

export default SearchPage
