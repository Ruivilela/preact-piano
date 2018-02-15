import { 
    scales_list, 
    allNotes , 
    allNotes_reverse
} from './../../../bd/scales'

export default ({setState}) => ({
    button_clicked: (state, payload) => {
        let data; 
        switch(payload){
            case 'scales': 
                data = scales_list;
                break; 
            case 'chords': 
                data = []
                break; 
        }

        let clicked = 
            payload === state.select.button_clicked.name ?
                false : true; 

        let name = clicked ? payload : ''; 
        data = clicked ? data : []
        return { 
            ...state,
            select: {
                ...state.select, 
                button_clicked: {
                    clicked: clicked,
                    name: name,
                    data: data
                }
            }
        }
    },
    option_selected: (state, payload) => {
        let name = state.select.option_selected.name === payload ?
            '' : payload; 

        let selected = name === '' ?
            false : true; 

        return { 
            ...state,
            select: {
                ...state.select,
                option_selected: {
                    name: name,
                    selected: selected
                }
            }
        }
    },
    select_key: (state, payload) => {
        let selected = 
            state.select.selected_key.name === payload ?
                false : true; 
        
        let name = selected ? payload : '';

        return {
            ...state,
            select: {
                ...state.select,
                selected_key: {
                    name: name,
                    selected: selected
                }   
            }
        }
    },
    highlight_notes: (state) => {

        let piano_output = 
            state.select.button_clicked.clicked 
            && state.select.selected_key.selected 
            && state.select.option_selected.selected ?
                generate_notes(state) : []; 

        return {
            ...state,
            select:{
                ...state.select,
                piano_output: piano_output
            }
        }
    }
});

function generate_notes(state){
    let root = allNotes[state.select.selected_key.name]

    return state.select.button_clicked.data[
        state.select.option_selected.name
    ].intervals
        .map( (value) => ( allNotes[value]))
        .map( (value) => (
            value + root > 11 ? 
                allNotes_reverse[value + root - 12] : 
                allNotes_reverse[value + root] 
        ))
}