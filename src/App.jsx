
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Provider } from 'react-redux'
import store from './store/Store'
function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
