import { Component } from 'preact';

import { allNotes } from './../../../../bd/scales'

class SelectButton extends Component {
    render(){        
        return(
            <button class="select-button"> 
                { this.props.title }
            </button>
        ) 

    }
}

export default SelectButton 