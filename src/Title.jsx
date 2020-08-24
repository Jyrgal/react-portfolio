import React, { Component } from 'react'
import Typical from 'react-typical'

class Title extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          height: "80px",
          color: "white"
        }}>
          <h2>James Pan</h2>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          color: "white"
        }}>
          <Typical
              steps={[
                'Developer 💻', 1000,  
                'Scholar 🧑🏻‍🎓', 1000,
                'Bodybuilder 🏋️', 1000,
                'Baller 🏀', 1000
              ]}
              loop={Infinity}
              wrapper = 'p'
          />
        </div>
      </React.Fragment>
    )
  }
}
export default Title