import React from "react";
import MyPosts_classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={MyPosts_classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
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