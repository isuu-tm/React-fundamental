import React from "react";
import Post from "./Post";
import {CSSTransition, Transition, TransitionGroup} from "react-transition-group";


const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return <h1
            style={{textAlign: "center"}}>Посты не найдены!</h1>
    }
    return (<div>
        <h1
            style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
            {posts.map((value, index) =>
                <CSSTransition
                    key={posts.id}
                    timeout={500}
                    classNames='post'
                >
                    <Post post={value} number={index + 1} remove={remove}/>
                </CSSTransition>
            )}
            </TransitionGroup>
    </div>)
}

export default PostList;