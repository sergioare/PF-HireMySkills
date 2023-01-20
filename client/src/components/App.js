import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import SpecificCategory from "./Categories/Specific/SpecificCategory";
import About from "./About/About";
import GeneralCategory from "./Categories/General/GeneralCategory";
import FAQs from "./FAQs/FAQs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<SpecificCategory />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<GeneralCategory />} />
        <Route path="FAQs" element={<FAQs />} />

        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
