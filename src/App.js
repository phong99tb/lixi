import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home"
import Phong from './page/phong'
import Huong from './page/huong'
import LuongThao from './page/luongThao'
import Vi from './page/vi'
import Layout from './page/layout';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="phong" element={<Phong />} />
                    <Route path="huong" element={<Huong />} />
                    <Route path="luong-thao" element={<LuongThao />} />
                    <Route path="vi" element={<Vi />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
