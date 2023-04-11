import React from 'react';
import './App.css';
import Home from './pages/home/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';


function App() {



  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/contatos' element= {<Contato/>}/>
            <Route path='/fotos' element= {<Fotos/>}/>
            <Route path='/comentarios' element= {<Comentarios/>}/>
          </Routes>
        </BrowserRouter>
      </div>

  )
}

export default App;
