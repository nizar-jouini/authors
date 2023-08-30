import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const DisplayAll = (props) => {
  const { authors, setAuthors } = props
  const navigate = useNavigate()

  useEffect( () => {
    axios.get("http://localhost:8000/api/authors")
      .then(res => {
        console.log(res.data)
        setAuthors(res.data)
      })
  })

  const deleteOneAuthor = (authorId) => {
    axios.delete("http://localhost:8000/api/authors/" + authorId)
      .then(res => {
        setAuthors(authors.filter(author => author._id !== authorId))
      })
      .catch(err => console.log(err))
  }

  const onClickEdit = (authorId) => {
    navigate("/edit/" + authorId)
  }

  return (
    <div className='container w-50'>
        <Link to={'/new'}>Add an Author</Link>
        <h3 className='mt-5'>We have quotes by:</h3>
        <table className="table table-light table-striped table-hover text text-center mt-3 border">
          <thead>
            <tr>
              <th className='border'>Author</th>
              <th className='border'>Actions available</th>
            </tr>
          </thead>
          <tbody>
            {
              authors.map((author, i) => (
                <tr key={i}>
                  <td className='text-start'>{ author.name }</td>
                  <td className='border'>
                  <button type="submit" className="btn btn-primary me-3" onClick={ () => onClickEdit(author._id) } >Edit</button>
                  <button type="submit" className="btn btn-danger" onClick={ () => deleteOneAuthor(author._id) }>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}

export default DisplayAll