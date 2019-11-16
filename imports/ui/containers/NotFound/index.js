import React from 'react'
import { Link, ContainerNotFound, Text, Button } from './styles'

export const NotFound = () => {
    return(
        <ContainerNotFound>
            <Text>🤔 Upps!! 404, page not found</Text>
            <Link to='/'><Button>Home</Button></Link>
        </ContainerNotFound>
        )
}