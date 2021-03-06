import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Info } from './Info';
import { Pokedex } from './Pokedex';


export class ListaPokemon extends React.Component {

    constructor(props){
      super(props);
    }
  
    render() {
      return <div className='lists'>
        <p className='pageNumber'>{this.props.offset / 20} / 55</p>
      
      <div className='list'>
        {this.props.list.map((poke, index) => ( 
          <p 
            className='lista'
            onClick={() => {
              this.props.onSelected(poke);
            }}
            key={index}>
              {poke.name}
          </p>
        ))}
      </div>
      
      <div className='page'>
          
          <p onClick={() =>{
            if(this.props.offset / 20 == 0){
              this.props.goTo()
            }
            else{
              this.props.onPrevPressed()
            }
            
            }}>{'<'}</p>

          <p onClick={() =>{
            if(this.props.offset / 20 == 55){
              this.props.backTo()
            }
            else{
              this.props.onNextPressed()
            }
            
            }}>{'>'}</p>


          

      </div>
    </div>
    
    };
  
  };


  