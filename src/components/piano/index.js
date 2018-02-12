import { Component } from 'preact';

import style from './style';

import { allNotes, whiteNotes, blackNotes } from './../../../bd/scales'; 
import WhiteKeys from './white-keys/index';
import BlackKeys from './black-keys/index'; 
 

class Piano extends Component {

  render(){
    const whiteKeys = whiteNotes.map( (key) => (
      <WhiteKeys pianoKey={key} />
    ))

    const blackKeys1 = blackNotes.map( (key, index) => {
      if( index < 2 ) {
        return(
          <BlackKeys pianoKey={key} />
        )
      }
    }); 

    const blackKeys2 = blackNotes.map( (key, index) => {
      if( index > 1 ) {
        return(
          <BlackKeys pianoKey={key} />
        )
      }
    }); 

    return(
      <div style={style}>
        <div style={style.black1}>
          { blackKeys1 }
        </div>
        <div style={style.black2}>
          { blackKeys2 }
        </div>
        <div style={style.white}>
          { whiteKeys }
        </div>
      </div>
    )
  }
}

export default Piano