import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import shuffle from 'lodash/shuffle'
import data from './PhotoCardData'
import styles from './PhotoCard.module.css'

function PhotoCard() {
  const [rows, set] = useState(data)
  useEffect(() => void setInterval(() => set(shuffle), 2000), [])

  let height = 0
  const transitions = useTransition(
    rows.map(data => ({ ...data, y: (height += data.height) - data.height })),
    d => d.name,
    {
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height })
    }
  )

  return (
    <div class={styles.list} style={{ height }}>
      {transitions.map(({ item, props: { y, ...rest }, key }, index) => (
        <animated.div
          key={key}
          class={styles.card}
          style={{ zIndex: data.length - index, transform: y.interpolate(y => `translate3d(0,${y}px,0)`), ...rest }}>
          <div class={styles.cell}>
            <div class={styles.details} style={{ backgroundImage: item.css }} />
          </div>
        </animated.div>
      ))}
    </div>
  )
}

export default PhotoCard
