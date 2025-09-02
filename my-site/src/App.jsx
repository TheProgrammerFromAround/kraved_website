import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Cart from './pages/Cart';


export default function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
