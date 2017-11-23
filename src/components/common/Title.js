import styled from 'styled-components'
import { colors } from '../../style'

export const Title = styled.h1`
  color: ${colors.gray900};
`

export const H1 = Title.extend`
  font-size: 4.2rem;
  text-align: center;
`
