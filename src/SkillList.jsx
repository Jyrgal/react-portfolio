import React, { useState, useRef } from 'react'
import { render } from 'react-dom'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import {Container, Item } from './SkillList_styles'
import data from './SkillList_data'
import logo from './logos/auspost.jpg'
const SkillList = () => {
  const [open, set] = useState(false)

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: { size: open ? '100%' : '20%', background: open ? 'white' : 'hotpink' }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

  return (
    <>
      <Container style={{ ...rest, width: size, height: "50vh" }} onClick={() => set(open => !open)}>
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, backgroundImage: {logo}}}/>
        ))}
      </Container>
    </>
  )
}

export default SkillList