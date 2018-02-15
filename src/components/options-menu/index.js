import { Component } from 'preact';
import { Connect } from "redux-zero/preact";

import actions from './../../state/select/actions'; 

const mapToProps = ({ select }) => ({ select });

class OptionsMenu extends Component {
    render(){        
        return(
            <Connect mapToProps={mapToProps} actions={ actions }>
                {
                    ({select, option_selected, highlight_notes }) => {
                        let options = 
                            !select.button_clicked.clicked ?
                                '' : Object.values(select.button_clicked.data)
                                        .map((value) => {

                                            let className = 
                                                select.option_selected.name === value.key ?
                                                    'option-item selected-option': 'option-item'; 

                                            return(
                                                <div 
                                                    class={className}
                                                    onClick={() => ( 
                                                        option_selected(value.key),
                                                        highlight_notes()
                                                    )}
                                                >
                                                    { value.name }
                                                </div>
                                            )
                                        });   

                        return(
                            <div class="select-options">
                                { options }
                            </div>
                        )
                    }
                }
            </Connect>
        ) 
    }
}

export default OptionsMenu