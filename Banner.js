import './Banner.css';
import { Button } from '@material-ui/core';
import {useState} from 'react';
import Search from './Search';
import {useHistory} from 'react-router-dom';
const Banner=()=>
{
    const [showsearch, setShowSearch]=useState(false);
    const history=useHistory();

    return(
        <div className="banner">
            <div className="banner__search">
                {showsearch && <Search/>}

                <Button onClick={()=>setShowSearch(!showsearch)} 
                className="banner__searchButton" 
                variant="outlines">
                {showsearch ? "Hide":"Search Dates"}</Button>

            </div>

            <div className="banner__info">
                <h1>Get out and stretch your 
                imagination</h1>

                <h5>
                    plan a different kind of
                    gateway to uncover the hidden 
                    gems near you.
                </h5>

                <Button
                onClick={()=>history.push('/search')}
                variant="outlined">
                Explore Nearby</Button>
            </div>

        </div>
    );
}

export default Banner;