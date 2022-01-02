import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ScrollToTop from "./components/scrollToTop";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Category from "./pages/category";
import Detail from "./pages/detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Menu />
        <Routes>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
