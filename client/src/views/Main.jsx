import React from 'react'
import AuthorsForm from '../components/AuthorsForm'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Main = (props) => {
    const {authors, setAuthors} = props

    const createAuthor = (authorParams) => {
        // make a post request to create a new author
        axios.post("http://localhost:8000/api/authors", authorParams)
        //make a post request to create a new author
            .then(res => {
                console.log(res.data)   // always console log to get used to tracking the data!
                // we will update the lifted state of our products array 
                //    to include the current value in state plus the single 
                //    new object created and returned from our post request.
                setAuthors([...authors, res.data])
            })
            .catch(err => console.log(err))
    }

  return (
    <div className='container w-50'>
      <Link to='/'>Home</Link>
      <AuthorsForm onSubmitProp={createAuthor} intialName=""/>
    </div>
  )
}

export default Main