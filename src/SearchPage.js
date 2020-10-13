import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'

function SearchPage() {
    const[{ term }, dispatch] = useStateValue();
    return (
        <div className='searchpage'>
           <div className='searchpage__header'>
                <h1>{term}</h1>
           </div> 
        </div>
    )
}

export default SearchPage
