import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import carpenter from "../../assets/carpintero.jpg";
import code from "../../assets/code.jpg";
import admin from "../../assets/admin.jpg";
import Footer from "../Footer/Footer";


const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerOne}>
        <div className={styles.landingNav}>
          <Link to="/home" className={styles.logo}>
            HireMySkills
          </Link>

          <Link to="/categories" className={styles.linkNav}>
            Categories
          </Link>

          <Link to="/creators" className={styles.linkNav}>
            Team
          </Link>

          <Link to="/contact-us" className={styles.linkNav}>
            Contact Us
          </Link>
        </div>

        <div className={styles.left}>
          <h1>
            On<span>ONE</span>click, we <span>makes</span> your life
            <span>easier</span>.
          </h1>

          <p>
            Our staff are always ready to help you fulfil your dreams or
            requirements.
          </p>

          <div className={styles.buttons}>
            <button className={styles.border}>
              <Link to="/home" className={styles.button}>
                Get Services
              </Link>
            </button>

            <button className={styles.border}>
              <Link to='/account' className={styles.button}>
                Offer Services
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <img src={carpenter} alt="Carpenter" />
          <img src={code} alt="Programming" />
          <img src={admin} alt="Administrator" />
        </div>
      </div>

      <div className={styles.containerTwo}>
        <div className={styles.title}>
          <p>¿WHY CHOOSE US?</p>
        </div>

        <div className={styles.specifics}>
          <div className={styles.container_description}>
            <div className={styles.subtitle}>Safety And Security</div>

            <div className={styles.icons}> 
            <i className="fa-solid fa-money-check-dollar"></i>
            </div>

            <p>
              "All transactions are conducted on the HireMySkills platform.
              Whether a buyer uses a credit card or Mercado Pago, we handle
              everything, and ensure the security of your personal details".
            </p>
          </div>

          <div className={styles.container_description}>
            <div className={styles.subtitle}>Professional Staff</div>

            <div className={styles.icons}>
            <i className="fa-solid fa-users"></i>
            </div>

            <p>
              "We keep raising our standards of quality, innovation and customer
              service so we continue to earn the trust of our clients and to
              give you the best possible service to meet their needs".
            </p>
          </div>

          <div className={styles.container_description}>
            <div className={styles.subtitle}>Make at Home / TIPS</div>
            
            <div className={styles.icons}>
            <i className="fa-solid fa-house"></i>
            </div>

            <p>
              "We want to add value to our website so our clients can find some
              solutions to problems that they may be able to solve or give you
              ideas for implement in your home".
            </p>
          </div>

          <div className={styles.container_description}>
            <div className={styles.subtitle}>Customized Projects</div>

            <div className={styles.icons}> 
            <i className="fa-solid fa-hand-holding-hand"></i>
            </div>

            <p>
              "Each person is different and has different needs. For this reason,
              is essential that each service provided by our professionals could
              be customized to cover those requirements".
            </p>
          </div>

          <div className={styles.container_description}>
            <div className={styles.subtitle}>Closer To You</div>

            <div className={styles.icons}> 
            <i className="fa-sharp fa-solid fa-comments"></i>
           
            </div>

            <p>
              "Our customers mean everything to us. We want to grow together and
              take on new challenges. So, we hope to be closer to you and make
              your life easier".
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;

// we have to create a new component for professional´s profile "professional-form"
