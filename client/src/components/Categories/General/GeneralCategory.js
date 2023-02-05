import React from "react";

const GeneralCategory = ({ name, id }) => {
  return (
    <div
      className="card text-center bg-dark"
      style={{ width: "18rem", marginTop: "10%", marginBottom: "10%" }}
    >
      <div className="overflow">
        <img
          src="https://img.blogs.es/anexom/wp-content/uploads/2017/04/etiqueta-categoria.jpg"
          alt="category imagen"
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
