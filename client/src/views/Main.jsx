import React, { useState } from 'react'
import AuthorsForm from '../components/AuthorsForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Main = (props) => {
    const {authors, setAuthors} = props
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

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
                navigate('/')
            })
            .catch(err => {
              console.log(err)
              setErrors(err.response.data.errors)
            })
    }

  return (
    <div className='container w-50'>
      <AuthorsForm onSubmitProp={createAuthor} intialName="" title="Add a new author: " errors={errors} setErrors={setErrors} />
    </div>
  )
}

export default Main