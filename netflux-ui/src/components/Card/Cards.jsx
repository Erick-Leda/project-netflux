import React from 'react';
import './Cards.css';

import {Link } from 'react-router-dom';

export default function  Cards() {
    return(
        <container>
            <div className='Cards'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </container>
    )
}

function Card(){
    return(
       <Link to='/viewmovie'>
         <div className="Card">
            <div className='MovieInfo'>
                <div className='MoviePoster'>
                <box-icon name='image' type='solid' color='rgb(255, 255, 255)'></box-icon>
                </div>
                <div className='MovieTitle'> 
                    <span>TITLE</span>
                </div>
                <div className='MovieIMDB'>
                <box-icon type='solid' name='star' color='rgb(220, 180, 18)'></box-icon> 
                    <span>2.0</span>
                </div>
                <div className='MovieYear'> 
                    <span>1190</span>
                </div>
                <div className='MovieGenre'> 
                    <span>Title</span>
                </div>
            </div>
        </div>
        </Link>
    )
}
