import React from 'react';
import ReactDOM from 'react-dom';
import { Pokedex } from './Pokedex';
import { ListaPokemon } from './Lista';

class Main extends React.Component{
    
    constructor (props) {
        super(props)


        this.state = {
            list: null,
            selectedItem: null,
            currentOffset: null
            
        }
        this.changePageNext = this.changePageNext.bind(this);

    }

    

    getLista () {
        fetch("https://pokeapi.co/api/v2/pokemon?offset="+this.state.currentOffset+"&limit=20")
        .then(res => res.json())
        .then(
          (result) => {
            console.log('lista', result)
            this.setState({
              list: result
            })
          });
    }

    getPokemon(url) {
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
              this.setState({
                  selectedItem: result,
              })
          });
    }

    changePageNext (){

        this.setState({ currentOffset: this.state.currentOffset + 20}, this.getLista)
    }

    changePagePrev (){

        this.setState({ currentOffset: this.state.currentOffset - 20}, this.getLista)
    }

    backTo0(){
        this.setState({ currentOffset: this.state.currentOffset = 0}, this.getLista)
    }

    goTo55(){
        this.setState({ currentOffset: this.state.currentOffset = 1100}, this.getLista)
    }


    componentDidMount () {
        this.getLista()
    }
    
    render() {


        return (
            <>
                {this.state.currentOffset}
                
                {this.state.list && <ListaPokemon
                    list={this.state.list.results}
                    onSelected={(poke) => {
                        console.log(poke)
                        this.getPokemon(poke.url)
                    }}
                    onPrevPressed={() => {
                        this.changePagePrev()
                    }}
                    onNextPressed={() => {
                        this.changePageNext()
                    }}
                    offset={this.state.currentOffset}
                    backTo={() => {
                        this.backTo0()
                    }}
                    goTo={() => {
                        this.goTo55()
                    }}
                    
                    /> }
                {this.state.selectedItem &&
                    <Pokedex selectedPokemon={this.state.selectedItem}
                />}
            </>
        );

    }


}

ReactDOM.render(<Main />, document.getElementById('root'))