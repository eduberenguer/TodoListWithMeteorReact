import React from 'react'
import { Link, Nav } from './styles'
import { MdViewAgenda, MdHome} from 'react-icons/md'

const SIZE = '70px'

export const Navbar = () => {
    return (
        <Nav>
            <Link to='/'><MdViewAgenda size={SIZE} /></Link>
            <Link to='/home'><MdHome size={SIZE} /></Link>
        </Nav>
    )
}
