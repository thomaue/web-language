import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Routes, Route, NavLink} from 'react-router-dom';
import { Contacts } from './screens/Contact';

function App() {
  return (
    <div>
      <nav>
        <NavLink to='/'>Accueil</NavLink><br></br>
        <NavLink to='/ressources'>Ressources</NavLink><br />
        <NavLink to='/Contact'>Contact</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/ressources' element={ <Ressources/>}/>
        <Route path='/contact' element={ <Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;
