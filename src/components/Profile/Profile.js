import React from "react";
import profile_classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
    <div className={profile_classes.content}>
        <div>
            <img src='https://gameranx.com/wp-content/uploads/2019/08/Animal-Crossing-New-Horizons-1080P-Wallpaper-2-1024x576.jpg' />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
    )
}

export default Profile;