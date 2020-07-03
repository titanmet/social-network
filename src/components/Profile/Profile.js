import React from "react";
import profile_classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
    <div>
        <ProfileInfo />
        <MyPosts />
    </div>
    )
}

export default Profile;