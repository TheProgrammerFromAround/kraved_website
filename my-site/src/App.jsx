import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/shop';
import About from './pages/about';


export default function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
