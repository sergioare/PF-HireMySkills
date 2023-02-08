import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const DashboardProfessional = () => {
  return (
    <div>
      <Navbar/>
      <div className="containerSiderbar">
        <Sidebar />
      </div>
     
     {/* <div>
      {switch(render){
        case form
        <FormStaff/>
      }
     </div> */}
    </div>
  );
};

export default DashboardProfessional;
