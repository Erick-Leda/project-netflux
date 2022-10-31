import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import MovieForm from '../components/MovieForm/MovieForm'

export default function AddMovie() {
  return (
    <container>
      <Sidebar></Sidebar>
      <MovieForm></MovieForm>
    </container>
  )
}