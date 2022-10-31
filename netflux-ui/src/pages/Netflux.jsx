import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';

export default function Netflux() {
  return (
        <container style={{display: 'flex'}}>
            <Sidebar></Sidebar> 
            <Main></Main>
          </container>
  )
}