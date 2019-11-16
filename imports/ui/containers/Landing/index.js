import React from 'react'
import { Link, Div } from './styles'

export const Landing = () => {
    return(
        <Div>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </Div>
    )
}