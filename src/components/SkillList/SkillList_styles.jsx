import { animated } from 'react-spring'
import styled from 'styled-components'

const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
  width: 20vh;
  height: 20vh;
`

const Item = styled(animated.div)`
  width: 8vh;
  height: 8vh;
  background: white;
  border-radius: 2px;
  will-change: transform, opacity;
`

export { Container, Item }
