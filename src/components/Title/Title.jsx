import React from 'react'
import Typical from 'react-typical'
import './Title.css'

class Title extends React.Component {
  render () {
    return (
      <div className="Title">
        <header className="Title-header">
          <div style={{height: "10vh"}}/>
          <h1>Hi, I'm James</h1>
          <p>
            <Typical
                steps={[
                  'A Full-stack Developer 💻', 1000,  
                  'A Scholar 📚', 1000,
                  'A Bodybuilder 🏋️', 1000,
                  'A BBaller 🏀', 1000
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