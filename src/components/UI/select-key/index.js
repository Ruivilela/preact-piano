import { Component } from 'preact';

import { allNotes } from './../../../../bd/scales'

class SelectKey extends Component {
    render(){
        const options = Object.keys(allNotes).map((key) => (
            <button value={ key }> { key } </button> 
        ))
        
        return(
            <div class="select-key"> 
                { options }
            </div>
        ) 

    }
}

export default SelectKey