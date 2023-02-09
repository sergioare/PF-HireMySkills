import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import About from "./About/About";
import SpecificCategory from "./Categories/Specific/SpecificCategory";
import Professionals from "./Categories/Proffesionals/Professionals";
import Professional from "./Categories/Professional/Professional";
import FAQs from "./FAQs/FAQs";
import SignIn from "./SignIn/Acc/SignIn";
import AllProfessionals from "./AllProfessionals/AllProfessionals";
import Form from "./Form/FormStaffOption";
import FormServices from "./Services/Form/FormServices";
import Contact from "./Contact-Us/Contact";
import ShoppingCart from "./Shopping/ShoppingCart";
import UserType from "./UserType/UserType";
import TeamCards from "./Team/TeamCards/TeamCards";
import Category from "./Categories/General/Category";
import DashboardProfessional from "./ProfileProfessional/DashboardProfessional";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/creators" element={<TeamCards />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Category />} />
          <Route
            path="/categories/profession/:id"
            element={<SpecificCategory />}
          />
          <Route
            path="/categories/profession/professionals/:id"
            element={<Professionals />}
          />
          <Route path="/professionals/:id" element={<Professional />} />
          <Route path="/professionals" element={<AllProfessionals />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/account" element={<SignIn />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form-services" element={<FormServices />} />
          <Route path="/shopping" element={<ShoppingCart />} />
          <Route path="/usertype" element={<UserType />} />
          <Route
            path="/professionalDashboard"
            element={<DashboardProfessional />}
          />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
