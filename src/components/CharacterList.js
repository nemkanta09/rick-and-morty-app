import React from "react";
import axios from "axios";
import Character from "./Character";
import Navbar from './Navbar';

class CharacterList extends React.Component {
    state = {
        characters: []
    }

    componentDidMount () {
        this.getCharacters()
    }

    
    getCharacters = () => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => this.setState({ characters : response.data.results }))
    }
    

        render () {
            return (
            <div>
                <div 
                className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center mt-5 mb-5"
                >
                    {this.state.characters.map(character => (
                        <Character  {...character}  key={character.id} />
                    ))}
                </div>
            </div>
        )
    }
}


export default CharacterList;


    // getIndividualCharacter = (id) => {
        //     console.log('This is the id of the charactaer', id)
        //     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        //     .then(response => this.setState({ characters: [response.data] }))
        // }



    // componentDidUpdate (prevProps) {
    //     console.log('previous props', prevProps.match.params.id)
    //     console.log('current props', this.props.match.params.id)
    //     if(prevProps.match.params.id !== this.props.match.params.id) {
    //         const id = this.props.match.params.id
    //         this.getIndividualCharacter(id)
    //     }
    // }