import React from "react";
import profileInfo_classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <div>
                    <img
                        src='https://gameranx.com/wp-content/uploads/2019/08/Animal-Crossing-New-Horizons-1080P-Wallpaper-2-1024x576.jpg'/>
                </div>
                <div className={profileInfo_classes.descriptionBlock}>
                    ava + description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;