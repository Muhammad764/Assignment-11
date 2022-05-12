import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddItem from './Pages/AddItem/AddItem';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Items from './Pages/Home/Items/Items';
import ItemsDetail from './Pages/ItemsDetail/ItemsDetail';
import Login from './Pages/Login/Login';
import ManageItem from './Pages/ManageItem/ManageItem';
import Order from './Pages/Order/Order';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/item/:itemId'element={<ItemsDetail></ItemsDetail>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout/:itemId' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='/addItem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='/manageItem' element={<RequireAuth>
          <ManageItem></ManageItem>
        </RequireAuth>}></Route>
        <Route path='/orders' element={<RequireAuth>
          <Order></Order>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes >
      <Footer></Footer>
    </div>
  );
}

export default App;
