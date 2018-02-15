import { Component } from 'preact';
import { noteValuesFrequency } from './../../../../bd/scales'; 
import { Connect } from "redux-zero/preact";


let audioCtx; 

const mapToProps = ({ select }) => ({ select });

class Key extends Component {
    render(props){
        return(
            <Connect mapToProps={mapToProps}>
                { ({ select }) => {
                    let pressDownKey = select.piano_output.reduce(
                        (acc, cv) => (
                            acc != cv ? 
                                acc : cv === select.selected_key.name ? 
                                    'root-press-down' : 'key-press-down'
                        ), 
                        props.pianoKey
                    )

                    pressDownKey = pressDownKey === props.pianoKey ? '' : pressDownKey; 

                    return(
                        <div 
                            class={`${this.props.className} ${pressDownKey}`}
                            onClick={ this.playKey.bind(this) }
                        >
                        </div>
                    )
                }}
            </Connect>
        )
    }

    playKey(){
        if(audioCtx){ 
            audioCtx.close()
        }

        audioCtx = new AudioContext();
        let osc = audioCtx.createOscillator();
        const key = this.props.pianoKey + this.props.octave

        let g = audioCtx.createGain()

        osc.connect(g)
        osc.frequency.setValueAtTime(
            noteValuesFrequency[key], 
            audioCtx.currentTime
        );

        g.connect(audioCtx.destination)

        osc.start(); 
        g.gain.exponentialRampToValueAtTime(
            0.00001, audioCtx.currentTime + 3
        )
    }
}

export default Key

