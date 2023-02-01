import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./About.module.css";
import Footer from "../Footer/Footer";
import CarouselAbout from "./CarouselAbout/CarouselAbout";
import NavBar from "../Navbar/Navbar";

const About = () => {
  const navegate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {<NavBar />}
      <div className={styles.profBtn}>
        <Link onClick={() => navegate(-1)}>
          <button>
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
        </Link>
      </div>
      <div className={styles.BigContainer_About}>
        <div className={styles.About_About}>Hey! This is our story</div>
        <div className={styles.Div_Img_About}>
          <CarouselAbout />
          {/* <img src={hms} alt="hms" className={styles.img_About} /> */}
        </div>
        <div className={styles.Text_About}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales eros non urna gravida lobortis. Mauris justo nisi, maximus
            vitae nibh vitae, vestibulum scelerisque orci. Nulla semper mauris
            vitae lacus pulvinar, non posuere sem finibus. In molestie tortor at
            auctor facilisis. Sed ut lobortis ligula. Suspendisse aliquam tellus
            non mauris mollis rhoncus. Proin porta sit amet felis id elementum.
            Duis et ultricies mi. Phasellus id augue ac velit laoreet auctor
            quis ac ligula. Donec vehicula, enim eu ultrices dapibus, metus odio
            posuere magna, ut blandit purus ex id dolor.
          </p>
          <p>
            Aliquam elementum augue id nulla facilisis, ac porta elit lobortis.
            Duis dapibus est vel tempus feugiat. Aliquam erat volutpat.
            Suspendisse vel nisi urna. Integer in velit tincidunt, semper felis
            a, viverra est. Integer nec nibh quis odio tempor laoreet. Vivamus
            nec arcu quam. Sed libero orci, posuere eget hendrerit id, maximus
            ac metus. Proin et faucibus nulla, et ornare diam. Nulla
            pellentesque ante quis eros blandit sagittis. Sed lacus massa,
            porttitor a rutrum eget, vulputate nec massa.
          </p>
          <p>
            Curabitur at libero gravida, consequat diam ac, auctor massa.
            Phasellus vel sagittis nisi. Nam malesuada, lorem vitae tristique
            efficitur, velit risus congue mi, consequat consectetur nisl felis
            non ex. Nunc non faucibus sem, quis sollicitudin felis. Nam porta
            lorem luctus augue porttitor, ac viverra tellus ultricies.
            Suspendisse eu commodo enim. Curabitur sollicitudin, erat ut feugiat
            euismod, leo quam commodo nunc, malesuada mollis lectus dui a augue.
            Suspendisse potenti. Donec id nisl mauris. Donec ultricies augue
            pellentesque ante varius molestie.
          </p>
          <p>
            Sed eu tincidunt neque, sed tempus massa. Nam et urna ante. Etiam
            rhoncus efficitur ex, at mattis ipsum. Vivamus libero ligula,
            fermentum quis sodales sed, vulputate vel est. Nullam sit amet
            sapien lorem. In quis odio a est ultrices accumsan. Nulla fringilla
            nibh sed ex tempus malesuada. Curabitur et sem orci.
          </p>
          <p>
            Etiam at nulla sed dolor aliquam ultrices. Morbi gravida magna quis
            augue malesuada lobortis. Praesent ut dolor sed libero tincidunt
            elementum quis ut nisl. Fusce et elit vel risus sodales porttitor eu
            eget mi. In eleifend nec lectus ac rutrum. Donec porttitor est ac
            leo semper molestie. Phasellus efficitur fermentum erat, sed
            porttitor orci gravida sit amet. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Donec ac
            libero ac ex scelerisque posuere. Nullam tristique nunc eget orci
            sodales, eget varius risus blandit. Donec interdum sit amet lectus
            quis consectetur. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        {/* <div className={styles.Footer_About}> */}
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default About;
