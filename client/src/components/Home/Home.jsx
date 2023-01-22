import "./Home.css";
import NavBar from "../Navbar/Navbar";
// import GeneralCategory from '../Categories/General/GeneralCategory.js'
import GeneralCategory from "../Categories/General/GeneralCategory";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="BigContainer_Home">
        <div className="TextPro_Home">
          FIND THE PERFECT PROFESSIONAL SERVICES FOR YOU
        </div>
        <div className="SearchBar_Home">
          <input
            type="text"
            placeholder={`TRY "CARPENTER, DESIGNER, ELECTRICIAN"`}
            className="SearchInput_Home"
          />{" "}
          <button type="submit" className="SearchButton_Home">
            Search
          </button>
        </div>
        <div className="Popular_Home">POPULAR SECTION</div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1181830509/es/foto/urbano-feliz-mujer-de-negocios-usando-la-tableta-y-trabajando.jpg?s=612x612&w=0&k=20&c=p7EW36clLJUH6ICRXqYjic2VKMEcOfGP01SdI8nawkE="
            alt="Profesional"
            className="Photo_Home"
          />
        </div>
        <div className="ProfesionalName_Home">Professional Name</div>
        <div className="Stars_Home">⭐⭐⭐⭐⭐</div>
        {/* /////////////////////////////////////////// */}
      </div>
      <div className="divGeneral">
        <GeneralCategory />
      </div>

      {/* <GeneralCategory/> */}
      <div className="divFooter">
        <Footer />
      </div>

    </div>
  );
};

export default Home;