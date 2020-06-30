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
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
    )
}

export default MyPosts;