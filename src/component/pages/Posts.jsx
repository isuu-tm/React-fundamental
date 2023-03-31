import React, {useEffect, useMemo, useRef, useState} from "react";
import '../styles/App.css'
import {getPagesArray, getPagesCount} from "../../uttils/pages";
import {useFetching} from "../hooks/useFetching";
import PostService from "../../API/PostService";
import MyButton from "../UI/Button/MyButton";
import MyModal from "../UI/Modal/MyModal";
import PostFilter from "../PostFilter";
import PostList from "../PostList";
import Loader from "../UI/Loader/Loader";
import PostForm from "../UI/PostForm/PostForm";
import {usePosts} from "../hooks/usePosts";
import {useObserver} from "../hooks/useObserver";
import {MySelect} from "../UI/Select/MySelect";


const Posts = (props) => {
    // const state = useState(0) - Получается useState возвращает нам массив значений где -
    // 1 значение - это состояние которые мы передали
    // 2 значение - это функция с которой мы можем изменять это состояние
    // let [likes, setLikes] = useState(0);

    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    // const observer = useRef()
    const lastElement = useRef() // - useRef - это хук который нам предоставляет доступ к DOM элементу -
    // ref - переводится как reference - ссылка
    // console.log(lastElement)

    //const [isPostsLoading, setIsPostsLoading] = useState(false) // - ссстояние для работы с условной отрисовкой
    //
    let pagesArray = getPagesArray(totalPages)

    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    // useEffect(() => {
    //     if (isPostLoading) return;
    //     if (observer.current) observer.current.disconnect();
    //     var callback = function(entries, observer) { // - это есть observer API - который позволяет нам создвать динмическую пагинацию
    //         // console.log(`Тут при видимости ниже стоящего lastElement срабатывает callback ${entries}, ${observer}`)
    //         if (entries[0].isIntersecting && page < totalPages) {
    //             // console.log(entries) - entries это массив в котором сидят наши наблюдаемые элементы
    //             // console.log(observer)
    //             setPage(page + 1)
    //         }
    //     };
    //     observer.current = new IntersectionObserver(callback);
    //     observer.current.observe(lastElement.current)
    //
    // }, [isPostLoading]) // - useEffect - это хук который позволяет нам синхронизироваться с жизненным циклом компонента!
    // const [posts2, setPosts2] = useState([
    //     {id: 1, title: 'Graduation', body: 'Description'},
    //     {id: 2, title: 'Autumn', body: 'Description'},
    //     {id: 3, title: 'Assessment', body: 'Description'},
    //     {id: 4, title: 'Grow', body: 'Description'},
    //     {id: 5, title: 'Delay!', body: 'Description'},
    //
    // ])
    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        setPage(page + 1);
    })

    const [modal, setModal] = useState(false) //Состояние для того чтобы изменять активность модального окна

    // const [searchQuery, setSearchQuery] = useState('') //Состояние для поиска в инпуте
    //
    // const [selectedSort, setSelectedSort] = useState('')

    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(i => {
            return i.id !== post.id
        }))
    }

    useEffect( () => {
        fetchPost()
    }, [page, limit])

    const changePost = (page) => {
        setPage(page)
    }

    // useEffect( () => {
    //     console.log('Комонента отрендерена второй раз')
    // }, []) - Как и в классовых компонентах в хуке useEffect будет массив зависимостей то можно отслеживать жизненне циклы у компонента

    //  function fetchDatum() {
    //     const response = axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
    //         console.log(res.data)
    //     })
    // } - Это анологичный запись функции вышестоящего, для выполнения асинхронной функции

    // const fetchingDatum = async () => {
    //     const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    //     console.log(response.data)
    // } - Это анологичный запись функции вышестоящего для выполнения асинхронной функции



    return (
        <div className="App">
            <MyButton
                style={{marginTop:'10px'}}
                onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            {/*<button onClick={fetchData}>Вызвать посты</button>*/}
            <MyModal
                visible={modal}
                setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Количество элементов'
                options={[
                    {value:5, name:'5'},
                    {value:10, name:'10'},
                    {value:20, name:'20'},
                    {value:-1, name:'Все'},
                ]}
            />
            {postError &&
                <h1>Произошла ошибка 404</h1>}
            <PostList
                posts={sortedAndSearchedPosts}
                title={'Посты про Js'}
                remove={removePost}/>}
            <div
                style={{background:'teal'}}
                ref={lastElement} // - здесь я передал качестве ref - ту переменную в котором будет сидеть этот элемент!
            >-</div>
            {isPostLoading &&
                 <div style={{display:'flex', justifyContent:'center',marginTop:'20px'}}><Loader/></div>}
            <div className='page__wrapper'>
                {pagesArray.map( p => {
                    return <span
                        onClick={() => changePost(p)}
                        className={page === p ? 'page page__current' : 'page'}
                        key={page}
                    >
                    {p}
                </span>
                })}
            </div>
        </div>
    );
}

export default Posts;
