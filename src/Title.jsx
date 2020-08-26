import React, { Component } from 'react'
import Typical from 'react-typical'
import './Title.css'

class Title extends React.Component {
  render () {
    return (
      <div className="Title">
        <header className="Title-header">
          <div style={{height: "10vh"}}/>
          <h1>James Pan</h1>
          <p>
            <Typical
                steps={[
                  'Developer 💻', 1000,  
                  'Scholar 📚', 1000,
                  'Bodybuilder 🏋️', 1000,
                  'BBaller 🏀', 1000
                ]}
                loop={Infinity}
                wrapper = 'p'
            />
          </p>
        </header>
      </div>
    )
  }
}

// {*justifyContent: "center",
// alignItems: "center",
// fontSize: "40px",
// color: "white",
// margin: 0,
// padding: 0,
// boxSizing: "border-box"*}

export default Title