import React, { useEffect, useState } from 'react'
import AuthorsForm from './AuthorsForm'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateAuthor = (props) => {
    const [ author, setAuthor ] = useState({})
    const [ loaded, setLoaded ] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // get one author by id
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                console.log(res.data)
                setAuthor(res.data.name)
                // to be sure that we had get data from db
                setLoaded(true)
            })
            .catch(err => console.log(err))
    })

    const updateOneAuthor = (authorParams) => {
        // send request with id and data to thhis url
        axios.put("http://localhost:8000/api/authors/edit/" + id, authorParams)
            // after successfully sending request we navigate to '/'
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

  return (
    <div className='container w-50'>
        {
            loaded && <AuthorsForm onSubmitProp={ updateOneAuthor } intialName={ author } title="Edit this author " />
        }
    </div>
  )
}

export default UpdateAuthor