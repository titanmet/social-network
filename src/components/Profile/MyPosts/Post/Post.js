import React from "react";
import Post_classes from './Post.module.css';

const Post = (props) => {
    return (
                <div className={Post_classes.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU' />
                    {props.message}
                    <div>
                        <span>like - {props.counter}</span>
                    </div>
                </div>
    )
}

export default Post;