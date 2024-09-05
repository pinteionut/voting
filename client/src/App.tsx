import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { Register } from "./components/Register/Register";
import { Vote } from "./components/Vote/Vote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="vote" element={<Vote />} />
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
