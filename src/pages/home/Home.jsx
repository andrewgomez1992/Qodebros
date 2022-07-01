import React from 'react'
import './Home.css'
import Profile from '../../components/profile/Profile'

const Home = () => {
    return (
        <div className='Home'>
            <Profile />
            <div className='postSide'>Posts</div>
            <div className='rightSide'>Rightside</div>
        </div>
    )
}

export default Home;
