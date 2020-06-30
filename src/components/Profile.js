import React from "react";
import profile_classes from './Profile.module.css';

const Profile = () => {
    return (
    <div className={profile_classes.content}>
        <div>
            <img src='https://gameranx.com/wp-content/uploads/2019/08/Animal-Crossing-New-Horizons-1080P-Wallpaper-2-1024x576.jpg' />
        </div>
        <div>
            ava + description
        </div>
        <div>
            my post
            <div>
                new post
            </div>
            <div>
                <div className={profile_classes.item}>
                    post 1
                </div>
                <div className={profile_classes.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
    )
}

export default Profile;