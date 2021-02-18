import React, { useState, useEffect } from 'react'

const App = () => {
    const [message, setMessage] = useState('loading')
    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(({ message }) => setMessage(message))
            .catch(console.log)
    }, [])
    return (
        <h1>{message}</h1>
    )
}

export default App