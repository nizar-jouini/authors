import './App.css';
import DisplayAll from './components/DisplayAll'
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';

function App() {
  return (
    <div>
      <h1 className='text-center'>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<DisplayAll />} />
        <Route path='/new' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
