import React from 'react';
import './Sidebar.css';
import 'boxicons';

import {Link } from 'react-router-dom';

export default function Sidebar() {
    return(
        <container>
            <div className='Sidebar'>
                <div className='SidebarContent'>
                <Header></Header>
                <Menu></Menu>
                </div>
            </div>
        </container>
    )
}
 
 function Header() {
        return(        
            <container>
                <div className='Header'>
                <h1>Netflux</h1>
                <span>
                    Where movies meets database.
                </span>        
                </div>
            </container>     
            ) }

function Menu() {
     return(
         <container>
             <div className='Menu'>
                 <Link to='/' className='MenuItem' style={{ textDecoration: 'none' }}>
                    <button>
                        <box-icon name='home-alt' color='rgb(255, 255, 255)'></box-icon>
                         <span> 
                             Home
                         </span>
                     </button>
                 </Link>
                 <Link to="/addmovie" style={{ textDecoration: 'none' }} className='MenuItem'>
                     <button>
                         <box-icon name='plus' color='rgb(255, 255, 255)'></box-icon>
                         <span>
                            Add Movie
                        </span>
                     </button>
                 </Link>
             </div>
         </container>
     )
 }





