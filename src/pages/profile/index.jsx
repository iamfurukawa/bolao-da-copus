import React from "react"

import {
    useParams
} from "react-router-dom"

const ProfilePage = () => {
    let { profileId } = useParams();
    return (
        <div>profile {profileId}</div>
    )
}

export default ProfilePage