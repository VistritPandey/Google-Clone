import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";


function SearchPage() {
    const[{ term='Apple' }, dispatch] = useStateValue();
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
                        <div className='searchPage__optionsLeft'>
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/more">more</Link>
                            </div>
                        </div>
                        <div className='searchPage__optionsRight'>
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {true && (
            <div className='searchPage__results'>
                <p className="searchPage__resultCount">
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>
                {data?.items.map(item => (
                    <div className='searchPage__result'>
                        <a href={item.link}>
                         {item.displayLink} ▼ 
                         </a>
                        <a className="searchPage__resultTitle" href={item.link}> 
                        <h2>{item.title}</h2>
                        </a>
                        <p></p>
                    </div>
                ))}
            </div> 
        )}
        </div>

        
        
    )
}

export default SearchPage
