import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './EducationStyle.css'
import logo from './logos/nsbhs.png'

const pages = [
    ({ style }) => <animated.div style={{ ...style}}>
                    <div style={{display:'flex'}}>
                      <img src = './nsbhs.png' style={{height: '30vh', width:'22vh',backgroundCover: "cover", backgroundPosition: "center center", position: "relative"}}/>
                      <p style={{position:"relative"}}>North Sydney Boys High School<br/>Graduate of 2017 <br/>ATAR of 99.55</p>
                    </div>
                  </animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>
    <div style={{display:'flex'}}>
                      <img src = './unsw.png' style={{height: '20vh', width:'50vh',backgroundCover: "cover", backgroundPosition: "center center", position: "relative"}}/>
                      <p style={{position:"relative"}}>UNSW<br/>Graduate of 2021 <br/> Bachelor of Computer Science<br/>WAM of 78</p>
                    </div>
  </animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>
    <div style={{display:'flex'}}>
                      <img src = './unsw.png' style={{height: '20vh', width:'50vh',backgroundCover: "cover", backgroundPosition: "center center", position: "relative"}}/>
                      <p style={{position:"relative"}}>UNSW<br/>Graduate of 2022 <br/> Bachelor of Electrical Engineering (Honours)<br/>WAM of 78</p>
                    </div>
  </animated.div>,
]

export default function Education() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}
