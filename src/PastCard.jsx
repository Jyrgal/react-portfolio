import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './PastCard.css'

function PastCard() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div onClick={() => set(state => !state)} style={{height: "1000px"}}>
      <div style={{height: "50px"}}/>
      <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform, 
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"}}/>
      <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), 
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"}} />
    </div>
  )
}

export default PastCard