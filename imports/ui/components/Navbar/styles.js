import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Nav = styled.nav`
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #2f3f60;
    bottom: 0;
    display: flex;
    height: 130px;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    z-index: 10000;
`

export const Link = styled(LinkRouter)`
    align-items: center;
    color: #888;
    display: inline-flex;
    text-decoration: none;
    width: 100%;
    height: 100%;
    justify-content: center;
    &:hover {
        color: black;
        cursor: pointer;
    }
`
