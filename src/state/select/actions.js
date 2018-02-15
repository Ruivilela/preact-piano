import { scales_list } from './../../../bd/scales'

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
            select: {
                ...state.select,
                selected_key: {
                    name: name,
                    selected: selected
                }
            }
        }
    }
});