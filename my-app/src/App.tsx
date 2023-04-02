import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Routes, Route, NavLink} from 'react-router-dom';
import { Contacts } from './screens/Contact';
import { RickRoll } from './screens/Rickroll';

function App() {
  return (
    <div>
      <nav>
        <NavLink to='/'>Accueil</NavLink><br></br>
        <NavLink to='/ressources'>Ressources</NavLink><br />
        <NavLink to='/Rickroll'>Rickroll</NavLink><br />
        <NavLink to='/Contact'>Contact</NavLink><br />
      </nav>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/ressources' element={ <Ressources/>}/>
        <Route path='/contact' element={ <Contacts/>}/>
        <Route path='/Rickroll' element={ <RickRoll/>}/>
      </Routes>
    </div>
  );
}

export default App;
