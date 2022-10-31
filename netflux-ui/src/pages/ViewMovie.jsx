import React from 'react'
import MovieView from '../components/Card/MovieView/MovieView'
import Sidebar from '../components/Sidebar/Sidebar'

export default function ViewMovie() {
  return (
    <>
      <Sidebar></Sidebar>
      <MovieView></MovieView>
    </>
  )
}