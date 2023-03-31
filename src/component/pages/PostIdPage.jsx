import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    console.log(params)
    const [fetchingPostById, isLoading, error] = useFetching( async () => {
        const response = await PostService.getById(params.id)
        console.log(response)
        setPost(response.data);
    })
    const [fetchingComments, comLoading, comError] = useFetching( async () => {
        const response = await PostService.getCommentsById(params.id)
        console.log(response)
        setComments(response.data);
    })

    useEffect(() => {
        fetchingPostById()
        fetchingComments()
    }, [])
    console.log(post)
    return (
        <div>
            <h1>Вы открыли страницу поста c ID: {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}, {post.title}</div>
            }
            <h1>Коментарии</h1>
            {isLoading
                ? <Loader/>
                : <div>
                    {comments.map( comm => {
                        return <div
                            key={comm.id}
                            style={{marginTop:'15px'}}
                        >
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    })}
                </div>
            }
        </div>
    );
};

export default PostIdPage;