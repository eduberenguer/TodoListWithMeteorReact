import React from 'react'
import { Link, Nav } from './styles'
import { MdViewAgenda, MdHome} from 'react-icons/md'

const SIZE = '70px'

export const Navbar = (props) => {
    return (
        <Nav>
            {props.home && <Link to='/'><MdViewAgenda size={SIZE} /></Link>}
            {!props.home && <Link to='/home'><MdHome size={SIZE} /></Link>}
        </Nav>
    )
}
