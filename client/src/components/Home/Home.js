import React from "react";
import GeneralCategory from "../Categories/General/GeneralCategory";
// import SpecificCategory from "../Categories/Specific/SpecificCategory";
import Footer from "../Footer/Footer";
import s from "../Home/Home.module.css";

const Home = () => {
  return (
    <div className={s.home}>
      <div className={s.divGeneral}>
        <GeneralCategory />
      </div>
      {/* <div className={s.divSpecific}>
        <SpecificCategory />
      </div> */}
      <div className={s.divFooter}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
