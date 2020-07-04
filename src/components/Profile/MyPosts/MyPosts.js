import React from "react";
import MyPosts_classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi, how are you ?', likesCount: 25},
        {id: 2, message: 'It\'s my first post !', likesCount: 55},
        {id: 3, message: 'It\'s my second post !', likesCount: 125}
    ]
    let postsElements = postsData.map(posts => <Post message={posts.message} likesCount={posts.likesCount}/>);
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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;