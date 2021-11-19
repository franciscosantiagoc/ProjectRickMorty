import { Route } from 'react-router-dom';
import './App.css';

import Card from './components/Card.jsx';
import SearchBar from './components/SearchBar';
import {results} from "./myDB.js";

function App() {
  return (
    <div className="App">
      <SearchBar/>

      <Route exact path="/">
        <div className="cards-container">
          {results.map(p => {
            return(
              <Card 
                key={p.id}
                name={p.name} 
                status={p.status}
                species={p.species}
                gender={p.gender}
                image={p.image}
                episode={p.episode}
              />
            )
          })}       
        </div>
      </Route>  

      <Route path="/:name" render={({match}) => {
        const [character] = results.filter(p => p.name === match.params.name)
        console.log(character)
        return(
          character ? <Card 
          key={character.id}
          name={character.name} 
          status={character.status}
          species={character.species}
          gender={character.gender}
          image={character.image}
          episode={character.episode}
        /> : <h1>NO EXISTE</h1>
        )
      }}/>
    </div>
  );
}

export default App;
