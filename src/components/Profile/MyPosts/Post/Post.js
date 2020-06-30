import React from "react";
import Post_classes from './Post.module.css';

const Post = () => {
    return (
                <div className={Post_classes.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU' />
                    post 1
                    <div>
                        <span>like</span>
                    </div>
                </div>

    )
}

export default Post;