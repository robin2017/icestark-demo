import React from 'react'
import { useHistory } from 'react-router-dom'
const Home = () => {
    const history = useHistory()
    return (
        <div>
            <div>hello,sub app</div>
            <button onClick={() => {
                history.push('/about')
            }}>about</button>
        </div>
    )
}

export default Home
