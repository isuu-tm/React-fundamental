import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import {useNavigate} from "react-router-dom";

const Post = (props) => {
    const router = useNavigate()
    console.log(router)
    return(
        <div className="post">
        <div className="post__content">
          <strong>{props.post.id} {props.post.title}</strong>
          <div>{props.post.body}</div>
          <div>
        </div>
        </div>
        <div className="post_btns">
            <MyButton onClick={() => {props.remove(props.post)}}>Удалить</MyButton>
            <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>
          </div>
    </div>
    )
}

export default Post;