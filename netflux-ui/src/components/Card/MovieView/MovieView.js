import React, { useEffect } from 'react';

import './MovieView.css';

export default function MovieView () {
    return(
      <div className='MovieView'> 
      <div className='MovieInfos'>
        <div className='MoviePoster'>
        <box-icon name='image' type='solid' color='rgb(255, 255, 255)'></box-icon>
        </div>
        <div className='MovieTitle'> 
            <span>TITLE</span>
        </div>
        <div className='MovieYear'> 
            <span>1190</span>
        </div>
        <div className='MovieIMDB'>
        <box-icon type='solid' name='star' color='rgb(220, 180, 18)'></box-icon> 
            <span>2.0</span>
        </div>
        <div className='MovieGenre'> 
            <span>Title</span>
        </div>
        
       
        <div className='MovieSynopsis'> 
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ultricies ipsum. Donec odio tellus, cursus vitae nunc ac, elementum auctor felis. Morbi congue sem elementum justo rutrum aliquam. 
            Curabitur mauris tellus, rhoncus et diam eget, iaculis sagittis enim. Nam ac metus eu massa interdum pharetra at sit amet ligula. Vivamus varius neque sed maximus malesuada. Praesent ut mattis mi, nec suscipit dolor.</span>
        </div>
        
  </div>
      </div>
      
    )
}


