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

        return { 
            select: {
                ...state.select, 
                button_clicked: {
                    clicked: true,
                    name: payload,
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
    }
});