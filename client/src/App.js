import './App.css';
import DisplayAll from './components/DisplayAll'
import UpdateAuthor from './components/UpdateAuthor';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import { useState } from 'react'

function App() {
  const [authors, setAuthors] = useState([])
  
  return (
    <div>
      <h1 className='text-center mb-5 mt-3'>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<DisplayAll authors={authors} setAuthors={setAuthors}/>} />
        <Route path='/new' element={<Main authors={authors} setAuthors={setAuthors} />} />
        <Route path='/edit/:id' element={<UpdateAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
