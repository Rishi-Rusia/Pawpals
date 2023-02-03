import "./App.css";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Stories from "./pages/Stories";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route exact path="/adopt" element={<Adopt></Adopt>}></Route>
          <Route exact path="/contact" element={<Contact></Contact>}></Route>
          <Route exact path="/donate" element={<Donate></Donate>}></Route>
          <Route exact path="/stories" element={<Stories></Stories>}></Route>
          <Route exact path="/about" element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
