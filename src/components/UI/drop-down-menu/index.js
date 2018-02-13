import { Component } from 'preact';


class dropDownMenu extends Component {
    render(){
        const options = this.props.options.map((option) => (
            <div> { option } </div> 
        ))
        
        return(
            <div class="drop-down-menu"> 
                { options }
            </div>
        ) 

    }
}

export default dropDownMenu