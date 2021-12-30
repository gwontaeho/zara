import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
