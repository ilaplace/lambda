import React from 'react'
import {getUser} from '../service/auth'

const Profile = () => {
    const user = getUser()
    return (
        <>
            <h1>Your Profile</h1>
            <ul>
                <li>Name: {user.user_metadata && user.user_metadata.full_name}</li>
                <li>E-mail: {user.email}</li>
            </ul>
        </>
    )
}

export default Profile