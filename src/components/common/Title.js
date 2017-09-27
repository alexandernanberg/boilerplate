import styled from 'styled-components'
import { colors } from '../../constants'

const Title = styled.h1`
  color: ${colors.gray900};
`

const H1 = Title.extend`
  font-size: 4.2rem;
  text-align: center;
`

export default {
  H1,
}
