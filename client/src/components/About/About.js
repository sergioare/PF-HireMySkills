import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./About.module.css";
import CarouselAbout from "./CarouselAbout/CarouselAbout";
import NavBar from "../Navbar/Navbar";

const About = () => {
  const navegate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {<NavBar />}
      <div className={styles.profBtn}>
        <button onClick={() => navegate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
      </div>
      <div className={styles.BigContainer_About}>
        <div className={styles.About_About}>Hey! This is our story</div>
        <div className={styles.Div_Img_About}>
          <CarouselAbout />
        </div>
        <div className={styles.Text_About}>
          <p>
            <b>HireMySkills</b>🥰 is a project designed by a group of young
            people and students of SoyHenry group 11, 2️⃣0️⃣2️⃣3️⃣, from different
            countries Argentina, Mexico, Colombia and Venezuela with the same
            purpose, to provide a well thought out, readable and dynamic
            environment so that you: the professional can search jobs in your
            area of ​​expertise; the client can look for the solution to his
            problem and find the professional who can best do it.
          </p>
          <p>
            Do you want to know more about us?{" "}
            <Link to="/creators">click here ➡️</Link>
          </p>
          <h5>Mission</h5>
          <p>
            Our main reason for carrying out this project was to be able to help
            other people with needs to connect with people who have knowledge,
            skills or professions that can help other people with difficulties
            or problems to solve their needs. and aspirations
          </p>
          <p>
            Create a wide <em>#️⃣hiremyskills</em> community of users and
            professionals, safe, responsible and accessible
          </p>
          <p>
            We seek to be recognized, remembered for quality, variety, value for
            our service and good work to all in general, providing opportunities
          </p>
          <h5>Vision</h5>
          <p>
            We have a clear vision of providing solutions, growing globally,
            expanding our community, offering the best experience to our
            professions and clients, being the best intermediary for both in
            this world of services.
          </p>
          <h5>Values</h5>
          <p>
            Honesty, responsibility, giving and receiving, empathy and drive,
            service and quality
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
