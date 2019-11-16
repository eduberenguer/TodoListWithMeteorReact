import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'


export const Div = styled.div`
  margin-top: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Link = styled(LinkRouter)`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 60px;
  padding: 40px 4px;
  display: block;
  width: 100%;
  font-size: 3em;
  text-decoration: none;
  color: #FFF;
  background-color: #8d00ff;
  text-align: center;
`
