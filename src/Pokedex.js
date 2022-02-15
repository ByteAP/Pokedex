import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Info } from './Info';
import { Lista } from './Lista'

 export class Pokedex extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
      var result = this.props.selectedPokemon
      console.log('sono su pokedex', result)
      return <Info
          name= {result.name}
          abilities={result.abilities}
          weight={result.weight}
          height={result.height}
          exp={result.base_experience}
          id={result.id} types={result.types}
          image={result.sprites.other.dream_world.front_default}
        />
    };
};







