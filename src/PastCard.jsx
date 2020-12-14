import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './PastCard.css'

function PastCard(props) {
  const [flipped, set_f] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  const experience = props.experience
  const company = props.company
  const position = props.position
  const duration = props.duration
  return (
    <div onClick={() => set_f(state => !state)} style={{display: "flex",
    justifyContent: "center", alignItems: "center", marginTop: "20vh"}}>
      <a.div class={experience + " c"} style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div  style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), whiteSpace: "pre-line", textAlign: "center"}}>
        <text style={{cursor:"pointer"}}>
          {company} {"\n"}
          {position} {"\n"}
          {duration}
        </text>
      </a.div>
    </div>
  )
}

export default PastCard