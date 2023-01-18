import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import NavBar from "./Navbar/Navbar";
import About from "./About/About";
import GeneralCategory from "./Categories/General/GeneralCategory";
import FAQs from "./FAQs/FAQs";
import FormStaff from "./Form/FormStaff";
import JoinForm from "./Join/JoinForm";
import SignIn from "./SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="categories" element={<GeneralCategory />} />
          <Route path="FAQs" element={<FAQs />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
