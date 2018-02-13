import style from './style.js'; 
import { Component } from 'preact';
import { noteValuesFrequency } from './../../../../bd/scales'; 

let audioCtx; 

class WhiteKeys extends Component {
    render(){
        return(
            <div 
                class="white-key" 
                style={style}
                onClick={this.playKey.bind(this)}
            >
            </div>
        )
    }

    playKey(){
        if(audioCtx){ audioCtx.close()}

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

export default WhiteKeys

