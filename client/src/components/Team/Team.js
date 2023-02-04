import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Team.module.css";

const Team = () => {
  const navegate = useNavigate();

  return (
    <div className={styles.divTeam}>
      <Navbar />
      <div className={styles.profBtn}>
        {/* <Link onClick={() => navegate(-1)}>
          <button>
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
        </Link> */}
        <h1 className="text-center">Team</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
            alt="Yuri"
          />
          <div className={styles.name}>
            <h1>Yuri </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse pellentesque urna est, at facilisis massa commodo ac.
              Vivamus quis congue nibh, eu blandit lectus. Nullam id mauris et
              diam sagittis.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Leo"
          />
          <div className={styles.name}>
            <h1>Leo</h1>
            <p>
              Quisque ac arcu lorem. Maecenas quis pharetra dui, non commodo
              arcu. Pellentesque leo nulla, cursus varius purus sed, imperdiet
              gravida nisi. Donec mattis commodo ante semper iaculis. Maecenas
              enim arcu.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80"
            alt="JuanDiego"
          />
          <div className={styles.name}>
            <h1>JuanDiego</h1>
            <p>
              Ut consectetur magna quis nisi imperdiet placerat. Nullam rhoncus
              nulla ut convallis sagittis. In accumsan eu diam at tristique.
              Nulla fringilla nec magna eget vulputate. Nulla facilisi. Proin
              ullamcorper sem.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Alexis"
          />
          <div className={styles.name}>
            <h1>Alexis</h1>
            <p>
              Sed ultricies augue et nisi lobortis viverra. Cras porttitor ipsum
              a velit tristique, sed sollicitudin erat sollicitudin. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae;.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
            alt="Andres"
          />
          <div className={styles.name}>
            <h1>Andres</h1>
            <p>
              Vivamus et elit ut quam molestie rutrum. Donec erat risus,
              dignissim sit amet tempor eu, porttitor gravida eros. Ut id augue
              elementum dui condimentum sollicitudin quis non metus. Mauris in.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"
            alt="Maxi"
          />
          <div className={styles.name}>
            <h1>Maxi</h1>
            <p>
              Donec sapien velit, fermentum in nulla eu, rutrum rhoncus dui.
              Etiam maximus, libero non ultricies accumsan, nisi lorem volutpat
              justo, vel ornare massa neque fermentum tortor. Suspendisse
              viverra, erat at.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Sergio"
          />
          <div className={styles.name}>
            <h1>Sergio</h1>
            <p>
              Nulla eleifend consequat arcu, vel tincidunt nulla dapibus eu.
              Donec vestibulum augue tortor, in viverra ex feugiat in. Cras
              aliquet risus laoreet posuere commodo. Mauris justo eros, mollis
              sollicitudin fringilla.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
