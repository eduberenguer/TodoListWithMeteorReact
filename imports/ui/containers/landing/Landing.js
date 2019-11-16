import React from 'react'
import { Link } from '@reach/router'

export const Landing = () => {
    return(
        <div>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    )
}