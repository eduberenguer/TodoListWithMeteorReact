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

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

export const ButtonLogout = styled.button`
  width: 10%;
  height: 10%;
  padding: 10px;
  background-color: #ff434d;
  color: #FFF;
  font-size: 1.5em;
  &:hover {
    background-color: #ff0003;
    cursor: pointer;
  }
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

export const WithoutTodos = styled.p`
  margin: 0 auto;
  font-size: 4em;
`

export const ContainerTodos = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 30vh;
  overflow: scroll;
`

export const ContainerTodo = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  padding: 10px;
`
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: flex-end;
`

export const Button = styled.button`
  border: 1px solid #ccc;
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  display: block;
  width: 30vw;
  text-align: center;
  font-size: 1em;
  padding: 10px;
  &:hover {
    background-color: #FFF;
    color: #8d00ff;
    cursor: pointer;
  }
`
export const ActionsButtons = styled.button`
  border: 1px solid #ccc;
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  width: 10vw;
  text-align: center;
  font-size: 1em;
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

export const Todo = styled.li`
  text-align: center;
  font-size: 2em;
  margin-right: 100px;
`
