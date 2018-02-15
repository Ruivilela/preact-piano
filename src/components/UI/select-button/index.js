import { Component } from 'preact';
import { Connect } from "redux-zero/preact";

import actions from './../../../state/select/actions'

const mapToProps = ({ select }) => ({ select });

import { allNotes } from './../../../../bd/scales'

class SelectButton extends Component {
    render(){        
        return(
            <Connect mapToProps={mapToProps} actions={actions}>
                {({select, button_clicked})=> {

                    let className = 
                        select.button_clicked.name === this.props.title ? 
                            'select-option-button button-selected' : 
                            'select-option-button';
                            
                    return(
                        <button 
                            class={ className }
                            onClick={() => button_clicked(this.props.title)}
                        >
                            { this.props.title }
                        </button>
                    )
                }}
            </Connect>
        ) 
    }
}

export default SelectButton 