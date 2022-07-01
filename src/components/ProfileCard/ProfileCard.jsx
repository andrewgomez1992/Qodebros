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

            <div className="ProfileName">
                <span>Drew Gomez</span>
                <span>Junior Full Stack Developer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>1</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ProfileCard