import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavPage from "./component/NavPage";
import Home from "./pages/Home";
import About from "./pages/About";
import SubFirms from "./pages/SubFirms";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavPage />
        {/* <HomePage /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="subfirms" element={<SubFirms />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
