import About from "../component/pages/About";
import Posts from "../component/pages/Posts";
import PostIdPage from "../component/pages/PostIdPage";
import Login from "../component/pages/Login";

export const privateRouters = [
    {path:'/about', component: About, exact:true},
    {path:'/posts', component: Posts, exact:true},
    {path:'/posts/:id', component: PostIdPage, exact:true},
]


export const publicRouters = [
        {path:'/login', component: Login, exact:true},
]