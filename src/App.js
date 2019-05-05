import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PokesList from './component/Pokes/DisplayPokes';
import PokeDetails from './component/Pokes/PokeDetails';
import CreatePoke from './component/Pokes/CreatePoke';
import Navbar from './component/Navbar/Navbar'

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Navbar />  
        <Switch>
          <Route match path="/home" component={PokesList} />
          <Route match path="/create" component={CreatePoke} />
          <Route match path="/edit/:id" component={CreatePoke} />
          <Route match path="/poke/:name" component={PokeDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
