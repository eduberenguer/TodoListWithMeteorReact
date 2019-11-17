import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Div = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Img = styled.div`
  background-image: url("/images/Landing-photo.jpg");
  width: 100vw;
  height: 30vh;
  background-size: cover;
  background-position: center;
`

export const Link = styled(LinkRouter)`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 20px;
  padding: 30px 4px;
  display: block;
  width: 50vw;
  font-size: 2em;
  text-decoration: none;
  color: #FFF;
  background-color: #8d00ff;
  text-align: center;
  &:hover {
    background-color: #FFF;
    color: #8d00ff;
    cursor: pointer;
  }
`
