import React from "react";
import MyPosts_classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                my post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={MyPosts_classes.posts}>
                    <Post message='Hi, how are you ?' counter='15'/>
                    <Post message="It's my first post !" counter='27'/>
                    <Post message="It's my second post !" counter='55'/>
                </div>
            </div>
    )
}

export default MyPosts;