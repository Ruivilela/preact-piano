import { Component } from 'preact';

import { allNotes, whiteNotes, blackNotes } from './../../../bd/scales'; 
import Key from './key/index';
 
class Piano extends Component {

  render(){
    const whiteKeys = whiteNotes.map( (key) => (
      <Key 
        className="white-key" 
        pianoKey={key} 
        octave={this.props.octave}
      />
    ))

    const blackKeys1 = blackNotes.map( (key, index) => {
      if( index < 2 ) {
        return(
          <Key 
            className="black-key" 
            pianoKey={key}
            octave={this.props.octave} 
          />
        )
      }
    }); 

    const blackKeys2 = blackNotes.map( (key, index) => {
      if( index > 1 ) {
        return(
          <Key 
            className="black-key" 
            pianoKey={key} 
            octave={this.props.octave}
          />
        )
      }
    }); 

    return(
      <div class="piano-octave">
        <div class="black-keys-left">
          { blackKeys1 }
        </div>
        <div class="black-keys-right">
          { blackKeys2 }
        </div>
        <div class="white-keys">
          { whiteKeys }
        </div>
      </div>
    )
  }
}

export default Piano