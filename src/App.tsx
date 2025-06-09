import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Category from './pages/Category';
import Cart from './pages/Cart';
import Layout from './Layout';
import CategoryLoadingState from './components/state/loading/CategoryLoadingState';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/products/:id" Component={ProductDetails}/>
        <Route path="/category/:category" Component={Category}/>
        <Route path="/cart" Component={Cart}/>
      </Routes>
    </>
  )
}

export default App