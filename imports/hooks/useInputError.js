import React, { useState, useEffect } from 'react'

export const useInputError = (initialValue, value) => {
    const [error, setError] = useState(initialValue)
    useEffect(() => {
        setError(value)
    },[])
    return [error, setError]
}

