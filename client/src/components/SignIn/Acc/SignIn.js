import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";
import Login from "../Sub-Components/Login/Login";
import Logout from "../Sub-Components/Logout/Logout";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className={styles.BigContainer_SignIn}>
      {isAuthenticated ? (
        <div className={styles.Container_ProfileLogout_SignIn}>
          <Profile />
          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default SignIn;
