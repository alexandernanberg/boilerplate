import styled from 'styled-components'

const getSize = name => ({ [name]: size }) =>
  size ? `var(--size-${size})` : undefined

const Spacer = styled.div`
  width: ${getSize('w')};
  height: ${getSize('h')};
`

export default Spacer
