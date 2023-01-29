import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";
import Login from "../Sub-Components/Login/Login";
import Logout from "../Sub-Components/Logout/Logout";
import styles from "./SignIn.module.css";
import NavBar from "../../Navbar/Navbar";

const SignIn = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <NavBar />
      <div className={styles.BigContainer_SignIn}>
        {isAuthenticated ? (
          <div /* className={styles.Container_ProfileLogout_SignIn} */>
            <Profile />
            <Logout />
          </div>
        ) : (
          <div /* className={styles.Container_Login_SignIn} */>
            <Login />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
