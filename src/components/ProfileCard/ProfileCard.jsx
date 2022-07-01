import React from 'react'
import Cover from '../../img/greenandblack.jpeg'
import Profile from '../../img/drew.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <div className='ProfileCard'>
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
        </div>
    )
}

export default ProfileCard