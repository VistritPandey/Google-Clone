import React from 'react'
import './Home.css'
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className='home'>
            <h1>This is home page</h1>
            <div className='home__header'>
                <div className='home__headerleft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__headerright'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    {/*Icon*/}
                    {/*Avatar*/}
                </div>
            </div>

            <div className='home__body'>

            </div>
        </div>
    )
}

export default Home
