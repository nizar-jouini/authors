import React from 'react'
import AuthorsForm from './AuthorsForm'
import { Link } from 'react-router-dom'

const DisplayAll = () => {
  return (
    <div className='container w-50'>
        <Link to={'/new'}>Add an Author</Link>
    </div>
  )
}

export default DisplayAll