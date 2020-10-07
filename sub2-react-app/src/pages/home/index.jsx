import React from 'react'
import { useHistory } from 'react-router-dom'
const Home = () => {
    const history = useHistory()
    return (
        <div>
            <div>hello,sub2 app</div>
            <button onClick={() => {
                history.push('/about')
            }}>about</button>
        </div>
    )
}

export default Home
