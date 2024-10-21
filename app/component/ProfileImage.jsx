import Image from "next/image";
import profilePic from './../img/profilepic.jpg';
import React from 'react'

const ProfileImage = () => {
  return (
    <div>
            <Image
            src={profilePic}
            width={0}
            height={0}
            alt="picture of website creator"
            style={{ width: '100%', height: 'auto', borderRadius:'100%'}}/>
        </div>
  )
}

export default ProfileImage
