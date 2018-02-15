import { Component } from 'preact';
import { Connect } from "redux-zero/preact";

import { allNotes } from './../../../../bd/scales';

import actions from './../../../state/select/actions'

const mapToProps = ({ select }) => ({ select });

class SelectKey extends Component {
    render(){

        
        return(
            <Connect mapToProps={mapToProps} actions={actions}>
                { ({ select, select_key }) => {

                    const options = Object.keys(allNotes).map((key) => {

                        let className = 
                            select.selected_key.name === key ?
                                'button-selected' : ''; 

                        return(
                            <button 
                                class={className}
                                onClick={ () => ( select_key(key) )}
                            > 
                                { key } 
                            </button> 
                        )
                    })
                    
                    return(
                        <div class="select-key"> 
                            { options }
                        </div>
                    )
                } }
            </Connect>
        ) 
    }
}

export default SelectKey