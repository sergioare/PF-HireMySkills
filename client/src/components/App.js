import { Fragment } from 'react'
import {Route, Routes} from 'react-router-dom'
import Landing from './Landing/Landing'
import Home from './Home/Home'
import Team from './Team/Team';

function App() {
  return (
    
    <Fragment>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/creators' element={<Team/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
