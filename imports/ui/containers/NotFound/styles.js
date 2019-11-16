import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const ContainerNotFound = styled.div`
    margin-top: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Text = styled.p`
    font-size: 3.5em;
`

export const Link = styled(LinkRouter)`
    align-items: center;
    justify-content: center;
    font-size: 2em;
    text-decoration: none;
`

export const Button = styled.button`
  margin-top: 50px;
  background: #8d00ff;
  border-radius: 5px;
  color: #fff;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 2em;
  padding: 10px;
`