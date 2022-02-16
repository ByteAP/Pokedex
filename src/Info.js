import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




export class Info extends React.Component {
    render(){
      
      const top =(
        <div className='top'>
            <p className='pokedex'>Pokedex</p>
            <p className='id'>#{this.props.id}</p>
        </div>
      )
      
      const inf =(
        <div>
            <p className='nome' >{this.props.name}</p>
            <div className='wh'>
              <p className='weight'>Weight:  {this.props.weight}</p>
              <p className='height'>Height:  {this.props.height }</p>
            </div>

            <div className='type'>
              {this.props.types.map((item, index) => (
                  <p key={index}>
                    {item.type.name}
                  </p>
              ))}
            </div>

            <div className='ability'>
              {this.props.abilities.map((item, index) => (
                  <p key={index}>
                    {item.ability.name}
                  </p>
              ))}
            </div>
            
  
            <img className='image' src={this.props.image}></img>
            
        </div>
      )
  
      return(
        <div>
          {top}
          {inf}
        </div>
  
      ) 
    }
  }