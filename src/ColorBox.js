import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newOpacity = this.props.opacity - 0.1;
    return newOpacity > 0 ? (
      <div className="color-box" style={{opacity:this.props.opacity}}>
        <ColorBox opacity={newOpacity}/>
      </div>
    ) : null;
  }

}

