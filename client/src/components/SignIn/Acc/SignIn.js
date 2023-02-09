import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";
import Login from "../Sub-Components/Login/Login";
import Logout from "../Sub-Components/Logout/Logout";
import "./SignIn.css";
import NavBar from "../../Navbar/Navbar";

import Loader from "../Sub-Components/Loader/Loader";

const SignIn = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <div
            className="container"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          >
            {isAuthenticated ? (
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className="card row d-flex justify-content-center align-items-center divprofile">
                    <Profile />
                    <Logout />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh" }}
              >
                <Login />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
