import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: solid black 1px;
  padding: 50px;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 30px;
  padding: 8px 4px;
  display: block;
  width: 50vw;
  font-size: 2em;
`

export const Button = styled.button`
  border: 1px solid #ccc;
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  display: block;
  width: 30vw;
  text-align: center;
  font-size: 2em;
  padding: 10px;
  &:hover {
    background-color: #FFF;
    color: #8d00ff;
    cursor: pointer;
  }
`

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 4em;
`
