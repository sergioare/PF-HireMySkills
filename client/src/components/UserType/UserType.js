import { Link } from "react-router-dom";
import styles from "./UserType.module.css";

const UserType = () => {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/positive-delighted-bearded-man-appealing-you-points-fingers-makes-good-choice-has-funny-joyful-expression-chooses-someone-shows-its-up-you-gesture-picks-potential-client_273609-42154.jpg?t=st=1675206354~exp=1675206954~hmac=dc8744f7a95af77a3d5750a4ad46c232619e3e247df5bf772b91f3544a0efb55",
      alt: "Client Photo",
      description: "¿Are you a Client?",
      link: "/home",
    },

    {
      src: "https://img.freepik.com/free-photo/mechanic-making-phone-gesture_1368-4024.jpg?w=996&t=st=1675207606~exp=1675208206~hmac=9678d1b5ac9834982b724b13dc7e8c22cab5360d70a721c6949717b1fe208266",
      alt: "Professional Photo",
      description: "¿Are you a Service Provider?",
      link: "/professionalDashboard",
    },

    /* {
      src: "https://img.freepik.com/premium-vector/laptop-icon-analysis-business-chart-financial-diagram-vector-illustration_3482-5876.jpg?w=1800",
      alt: "Admin Photo",
      description: "¿Are you an Admin?",
      link: "/dashboardAdmin",
    }, */
  ];

  return (
    <div className={styles.container}>
      <div className="row d-flex justify-content-evenly">
        {images.map((image, index) => (
          <div key={index} className="col-md-6">
            <img
              src={image.src}
              alt={image.alt}
              className="object-fit-contain"
            />
            <h5 className="text-center text-white">{image.description}</h5>
            <Link to={image.link}>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ textDecoration: "none" }}
              >
                <button className="btn btn-light">Select</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserType;
