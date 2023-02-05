import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import About from "./About/About";
import GeneralCategory from "./Categories/General/GeneralCategory";
import SpecificCategory from "./Categories/Specific/SpecificCategory";
import Professionals from "./Categories/Proffesionals/Professionals";
import Professional from "./Categories/Professional/Professional";
import FAQs from "./FAQs/FAQs";
import SignIn from "./SignIn/Acc/SignIn";
import Team from "./Team/Team";
import AllProfessionals from "./AllProfessionals/AllProfessionals";
import Homeadmin from "../Admin/pages/Homeadmin";

import Form from "./Form/FormStaff";

import Contact from "./Contact-Us/Contact";
import PaymentCheckout from "./PaymentCheckout/PaymentCheckout";
import Userss from "../Admin/components/Users/Userss";
import Trabajadores from "../Admin/components/Professionals/Trabajadores";



function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/creators" element={<Team />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<GeneralCategory />} />
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
          <Route path="/admin" element={<Homeadmin/>}/>
          <Route path="/admin/profesionals" element={<Trabajadores/>}/>
          <Route path="/admin/users" element={<Userss/>}/>

          <Route path="/contact-us" element={<Contact />} />
          <Route path="/checkout" element={<PaymentCheckout/>}/>
          <Route path="/form" element={<Form />} />
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
