import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Experience.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Experience = (props) => {
  const [properties, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const experience = props.experience
  return (
    <div style={{    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"}}>
        <animated.div
          class={experience}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: properties.xys.interpolate(trans) }}
        />
    </div>
  )
}

export default Experience
