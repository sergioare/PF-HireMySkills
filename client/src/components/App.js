import './App.css';
import { Fragment } from 'react'
import {Route, Routes} from 'react-router-dom'
import Landing from './Landing/Landing'
import Home from './Home/Home'

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
