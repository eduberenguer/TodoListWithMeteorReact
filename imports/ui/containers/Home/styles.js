import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

export const ButtonLogout = styled.button`
  width: 10%;
  height: 10%;
  padding: 10px;
  background-color: #FF0000;
  color: #FFF;
  font-size: 1.5em;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  font-size: 3em;
`

export const WithoutTodos = styled.p`
  margin: 0 auto;
  font-size: 4em;
`

export const ContainerTodos = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`

export const ContainerTodo = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  text-align: center;
  font-size: 2em;
  padding: 5px;
`

export const Title = styled.h2`
  margin-top: 50px;
  width: 100%;
  text-align: center;
  font-size: 5em;
`

export const Todo = styled.li`
  text-align: center;
  font-size: 2em;
  margin-right: 100px;
`
