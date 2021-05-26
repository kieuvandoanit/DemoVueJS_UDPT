import Home from './component/home'
import Admin from './component/admin'
import Blog from './component/blog'
import Cart from './component/cart'

export const routes = [
    {path: '/', name: 'homepage', component: Home, meta:{title:'Home'}},
    {path: '/Admin', name: 'admin', component: Admin, meta:{title:'Admin'}},
    {path: '/Blog', name:'blog', component: Blog, meta:{title:'Blog'}},
    {path: '/Cart', name:'cart', component: Cart, meta:{title:'Cart'}}
]