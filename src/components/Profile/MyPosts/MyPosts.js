import React from "react";
import MyPosts_classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount}/>);
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