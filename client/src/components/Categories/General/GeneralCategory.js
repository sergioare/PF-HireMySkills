import React from "react";

const GeneralCategory = ({ name, id }) => {
  const images = {
    Health:
      "https://www.exudeinc.com/wp-content/uploads/2017/05/HealthFitness.png",
    Management:
      "https://biztrainers.co.nz/images/Management_Training_Course.jpg",
    Engineering:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5VQnRNELq1177o5tuvcoBM/e032e3e6169232f30af2a63741c9fc20/Teamwork-in-construction-industry---two-engineers-working-together-on-construction-site-with-blueprints-and-plans-645373486.jpeg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    Home: "https://media.anitashousekeeping.com/public/1605203901_2fUtBsfVppv1oVTX.png",
    Technicians:
      "https://aprende.com/wp-content/uploads/2020/10/reparaciones-electronicas.jpg",
    IT: "https://images.moneycontrol.com/static-mcnews/2021/10/software2-770x433.jpg?impolicy=website&width=770&height=431",
  };
  return (
    <div
      className="card text-center bg-dark"
      style={{ width: "18rem", marginTop: "10%", marginBottom: "10%" }}
    >
      <div className="overflow">
        <img
          src={
            images[name] ||
            "https://img.blogs.es/anexom/wp-content/uploads/2017/04/etiqueta-categoria.jpg"
          }
          alt={name || "category imagen"}
          className="card-img-top object-fit-contain"
          style={{
            height: "200px",
            margin: "0",
            padding: "0",
            borderRadius: "0",
          }}
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{name}</h4>
        <a
          href={`/categories/profession/${id}`}
          className="btn btn-outline-secondary rounded-0"
        >
          See SubCategories
        </a>
      </div>
    </div>
  );
};
/*  */
{
  /* <div className={styles.general}>
      <NavBar />
      <div className={styles.profBtn}>
        <button onClick={() => navegate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>

        <h1 className={styles.cardHeader}>Categories</h1>
      </div>
      <Category styles={styles} />
      <Footer />
    </div> */
}
export default GeneralCategory;
