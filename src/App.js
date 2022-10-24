import {Route,Routes} from 'react-router-dom'
import Navbar from './components/common/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blogs from './pages/Blogs'
import SingleProduct from './components/shop-products/SingleProduct';
import SingleBlogs from './components/main-blogs/SingleBlogs';
import Sidebar from './components/common/Sidebar';
import Backdrop from './components/common/Backdrop';



function App() {
  return (
    <>
    <Sidebar />
    <Backdrop />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shop/:productId' element={<SingleProduct />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blogs/:blogId' element={<SingleBlogs />} />
    </Routes>
    </>
  );
}

export default App;
