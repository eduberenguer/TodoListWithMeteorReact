import React from 'react'
import { Link } from '@reach/router'

const NotFound = () => {
    return(
        <div>
            Upps!! 404, page not found
            <Link to='/'>Go to Home</Link>
        </div>
        )
}

export default NotFound