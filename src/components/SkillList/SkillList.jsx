import React, { useState, useRef } from 'react'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import {Container, Item } from './SkillList_styles'
import technical_data from './SkillList_data'
import soft_data from './Soft_data'

const SkillList = (props) => {
  const [open, set] = useState(false)

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: { size: open ? '100%' : '20%', background: open ? 'white' : 'black' }
  })

  const transRef = useRef()

  const transitions = useTransition(open ? (props.type ==='soft' ? soft_data : technical_data) : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / soft_data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

  return (
      <Container style={{ ...rest, width: size, height: "50vh", color: "white"}} onClick={() => set(open => !open)}>
        {props.type}
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props}}>
            <img src = {item.css} style={{...props, height:"9vh", width: "9vh", backgroundCover: "cover", backgroundPosition: "center center", position: 'absolute', marginBottom: '5vh'}}/>
          </Item> 
      ))}
      </Container>
  )
}

export default SkillList