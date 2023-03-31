import React from 'react'
import MyButton from '../Button/MyButton'
import MyInput from '../Input/MyInput'

const PostForm = ({create}) => {
  const [post, setPost] = React.useState({title:'', body:''})
  function addNewPost(event) {
    event.preventDefault()
    const newPost = {
        ...post, 
        id:Date.now(),

    }
    create(newPost)
    setPost({title:'', body:''})
  }
  return (
         <form>
      <MyInput 
      type='text'
      placeholder="Название поста!"
      value={post.title}
      onChange={event => setPost({...post, title: event.target.value})}/>
      <MyInput 
      type='text'
      placeholder="Описание поста!"
      value={post.body}
      onChange={event => setPost({...post, body: event.target.value})}/>
      <MyButton
      onClick={addNewPost}
      >Создать пост</MyButton>
      </form>
  )
}

export default PostForm;