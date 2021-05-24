import Home from './component/home'
import Product from './component/product_page'
import Blog from './component/blog'
import Cart from './component/cart'

export const routes = [
    {path: '/', name: 'homepage', component: Home},
    {path: '/Product', name: 'product', component: Product},
    {path: '/Blog', name:'blog', component: Blog},
    {path: '/Cart', name:'cart', component: Cart}
]