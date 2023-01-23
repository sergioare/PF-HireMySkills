import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import About from "./About/About";
import GeneralCategory from "./Categories/General/GeneralCategory";
import SpecificCategory from "./Categories/Specific/SpecificCategory";
import Professionals from "./Categories/Proffesionals/Professionals";
import FAQs from "./FAQs/FAQs";
<<<<<<< HEAD
// import FormStaff from "./Form/FormStaff";
// import JoinForm from "./Join/JoinForm";
=======
import JoinForm from "./Join/JoinForm";
>>>>>>> 335b7064793ef5a0a10a03dce11577f5f3ad77a0
import SignIn from "./SignIn/Acc/SignIn";
import Team from "./Team/Team";
import NavBar from "./Navbar/Navbar";

import Form from './Form/FormStaff'


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
            <Route path="/professional/:id" element={<Professionals/>}/>
            <Route path="FAQs" element={<FAQs />} />
            <Route path="/account" element={<SignIn />} />
            {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          </Route>

          <Route path="/form" element={<Form />} />
          
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}

        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
