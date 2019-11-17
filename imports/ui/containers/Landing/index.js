import React from 'react'
import { Link, Div, Img } from './styles'

export const Landing = () => {
    return(
        <Div>
            <Img />
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </Div>
    )
}