import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ecommerce from './e-commerce';
import Cart from './cart';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index path="/" element={<Ecommerce />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;