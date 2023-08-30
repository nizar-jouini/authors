import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const AuthorsForm = (props) => {
    const { onSubmitProp, intialName, title } = props
    const [name, setName] = useState(intialName)
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({ name })
        handleClick()
    }
  
    const handleClick = () => {
        navigate('/')
    }

    return (
    <div className='container w-75 mt-5'>
        <Link to='/'>Home</Link>
        <h3 className='mt-5'>{ title }</h3>
        <form onSubmit={onSubmitHandler} className='border p-3 mt-3'>
            <div className="mb-3">
                <label className="form-label fw-bold">Name:</label>
                <input type="text" className="form-control" value={name} onChange={ (e) => setName(e.target.value) }/>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="submit" className="btn btn-primary me-3" onClick={ handleClick } >Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AuthorsForm