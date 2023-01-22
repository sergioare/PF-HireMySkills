import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import About from "./About/About";
import GeneralCategory from "./Categories/General/GeneralCategory";
import SpecificCategory from "./Categories/Specific/SpecificCategory";
import FAQs from "./FAQs/FAQs";
import JoinForm from "./Join/JoinForm";
import SignIn from "./SignIn/Acc/SignIn";
import Team from "./Team/Team";
import NavBar from "./Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/creators" element={<Team />} />
          <Route path="/" element={<NavBar />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/categories" element={<GeneralCategory />} />
            <Route path="/categories/:id" element={<SpecificCategory />} />
            <Route path="FAQs" element={<FAQs />} />
            <Route path="/account" element={<SignIn />} />
            {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
