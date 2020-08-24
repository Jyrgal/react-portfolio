import ReactDOM from 'react-dom'
import React from 'react'
import {Grid} from '@material-ui/core'
import { useSpring, animated } from 'react-spring'
import range from 'lodash-es/range'
import './Skills.css'

const items = range(1)
const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

const Skills = (props) => {
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  })
  const logo = props.logo

  return items.map(i => <animated.div key={i} className={logo} style={{ transform: radians.interpolate(interp(i)) }} />)
}

export default Skills

