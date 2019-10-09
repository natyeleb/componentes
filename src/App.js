import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './Componentes/NavBar';
import Home from './Componentes/Home';
import Cadastro from './Componentes/Cadastro';

const  App = () => {
  return (
    
      <Router>
        <NavBar/>
        <Route exact path="/" component={Home} />
        <Route path="/cadastro" component={Cadastro}/>
      </Router>
  
  )

}

export default App;
