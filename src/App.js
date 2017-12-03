import React, { Component } from 'react';

import './App.css';

class App extends Component {

  renderHeart(){
    // fill -> con qué llenar el array
    const hearts = new Array(5).fill({})
    return (
        hearts.map((element, index) => {
            const style = {
                // left: index * 50 + "px"
                left: Math.floor((Math.random() * (window.innerWidth - 1100))) + 70 + "px",
                animationDelay: Math.floor((Math.random() * (1000))) + "ms"
            }
            return(
                <div className="like is-liked" style={style}></div> // me falta el KEY !
            );
        })
    );
  }

  render() {
    return (
      <div className="App">
        <div className="container__cloud">
          <svg height="400" width="500">
            <circle cx="240" cy="60" r="35" stroke-width="3" fill="#D3D3D3" />
            <circle cx="290" cy="50" r="50" stroke-width="3" fill="#D3D3D3" />
            <circle cx="330" cy="65" r="30" stroke-width="3" fill="#D3D3D3" />

            <circle cx="200" cy="60" r="35" stroke-width="3" fill="white" />
            <circle cx="240" cy="50" r="50" stroke-width="3" fill="white" />
            <circle cx="280" cy="65" r="30" stroke-width="3" fill="white" />
            <path d="M 245 75 Q 250 65 255 75" stroke="gray" stroke-width="4" fill="transparent"/>
          </svg>
        </div>
        <div className="eye one"></div>
        <div className="eye two"></div>
        {this.renderHeart()}
      </div>
    );
  }
}

export default App;
