import React, { useState, useEffect } from "react";
import { Formik, Field, Form, useFormik } from "formik";
import { validationSchema } from "./validation";
import * as Yup from "yup";
import axios from "axios";
import styles from "./FormStaff.module.css";
import { useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
let category_list = [];
let professions_list = [];
let auth_token;
let country_list = [];
let state_list = [];
let city_list = [];

const FormStaff = () => {
  const [phone, setPhone] = useState("");
  const [responseServer, setResponseServer] = useState(null);
  const [countryselected, setCountryselected] = useState("");
  const [stateselected, setStateselected] = useState("");
  const [cat_selected, setCat_selected] = useState();
  const [prof_selected, setProf_selected] = useState([]);
  const navigate = useNavigate();
  const [imageCloud, setImageCloud] = useState("");

  const handleImage = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    try {
      formData.append("file", file);
      formData.append("upload_preset", "zdsy8b2u");
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/ddqsqst5a/image/upload",
          formData
        )
        .then((res) => {
          console.log(res.data.url);
          setImageCloud(res.data.url);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const get_categories = async () => {
    await axios
      .get("https://hiremyskillsbackend.onrender.com/category")
      .then((res) => (category_list = res.data))
      .then(() => console.log(category_list));
  };

  const getprofessions = async (cat_id) => {
    await axios
      .get(`https://hiremyskillsbackend.onrender.com/profession/${cat_id}`)
      .then((res) => (professions_list = res.data))
      .then(() => console.log(professions_list));
  };

  const get_country = async () => {
    const conf = {
      headers: {
        Accept: "application/json",
        "api-token":
          "bKJUZhJX2JnQeO4gQquc152SiYa0EYp-_XpIdPMD8_N-dold4Trvzul0014HMzA4a7E",
        "user-email": "leonardogar.ec@gmail.com",
      },
    };

    await axios
      .get("https://www.universal-tutorial.com/api/getaccesstoken", conf)
      .then((res) => (auth_token = res.data.auth_token))
      .then(() => console.log(auth_token));

    await axios
      .get("https://www.universal-tutorial.com/api/countries", {
        headers: {
          Authorization: `Bearer ${auth_token}`,
          Accept: "application/json",
        },
      })
      .then((res) => (country_list = res.data))
      .then(() => console.log(country_list));
  };

  const get_state = async (country) => {
    console.log(country, "seleccion de pais");
    await axios
      .get(`https://www.universal-tutorial.com/api/states/${country}`, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
          Accept: "application/json",
        },
      })
      .then((res) => (state_list = res.data))
      .then(() => console.log(state_list, "state_list"));
  };

  const get_city = async (state) => {
    console.log(state, "seleccion de estado");
    await axios
      .get(`https://www.universal-tutorial.com/api/cities/${state}`, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
          Accept: "application/json",
        },
      })
      .then((res) => (city_list = res.data))
      .then(() => console.log(city_list, "city_list"));
  };

  useEffect(() => {
    getprofessions();
    get_country();
    get_categories();
  }, []);

  useEffect(() => {
    get_state(countryselected);
  }, [countryselected]);

  useEffect(() => {
    getprofessions(cat_selected);
  }, [cat_selected]);

  useEffect(() => {
    get_city(stateselected);
  }, [stateselected]);

  return (
    <div className={styles.containerform}>
      <h1 className={styles.h1form}>Professional Profile</h1>

      <Formik
        initialValues={{
          name: "",
          description: "",
          photo: "",
          email: "",
          country: "",
          state: "",
          town: "",
          contact: "",
          portfolio: "",
          skills: [],
          cat: "",
          profselect: "",
        }}
        onSubmit={(values) => {
          values.contact = phone;
          values.skills.push(prof_selected);
          values.photo = imageCloud;
          console.log(values, "estos son los values");
          axios
            .post(
              "https://hiremyskillsbackend.onrender.com/professionals",
              values
            )
            .then((response) => {
              //console.log(response, "hola");
              setResponseServer(response.data);
              // setSubmitting(false);
              navigate("/home");
              alert("Your profile was created successfuly");
            })
            .catch((error) => {
              setResponseServer(error.message);
              // setSubmitting(false);
            });
        }}
      >
        {/* {({formik})=>( */}
        {({
          errors,
          touched,
          handleSubmit,
          handleChange,
          values,
          isSubmitting,
        }) => (
          <Form className={styles.Formprofessional}>
            <h6 className={styles.h6form}>Your name</h6>
            <Field
              type="text"
              placeholder="Full name"
              name="name"
              id="name"
              onChange={(e) => handleChange(e)}
              // error={errors.name}
              value={values.name}
              className={styles.field}
            />
            {errors.name &&
              touched.name(<p style={{ color: "red" }}>{errors.name}</p>)}
            <h6 className={styles.h6form}>Your E-mail</h6>
            <Field
              type="text"
              placeholder="E-mail"
              name="email"
              id="email"
              onChange={handleChange}
              error={errors.email}
              value={values.email}
              className={styles.field}
            />
            {errors.email &&
              touched.email(<p style={{ color: "red" }}>{errors.email}</p>)}
            <h6 className={styles.h6form}>Where are you?</h6>
            <Field
              as="select"
              name="country"
              id="country"
              onChange={(e) => {
                setCountryselected(e.target.value);
                handleChange(e);
              }}
              // error={errors.town}
              value={values.country}
              className={styles.fieldTown}
            >
              <option>Select your Country...</option>
              {country_list.map((country) => {
                return (
                  <option
                    key={country.country_short_name}
                    value={country.country_name}
                  >
                    {country.country_name}
                  </option>
                );
              })}
            </Field>

            <Field
              as="select"
              name="state"
              onChange={(e) => {
                setStateselected(e.target.value);
                handleChange(e);
              }}
              value={values.state}
              className={styles.fieldTown}
            >
              <option>Select your State, Province...</option>
              {state_list.map((state) => {
                return (
                  <option value={state.state_name}>{state.state_name}</option>
                );
              })}
            </Field>

            <Field
              as="select"
              name="town"
              onChange={(e) => handleChange(e)}
              // error={errors.town}
              value={values.town}
              className={styles.fieldTown}
            >
              <option>Select your City...</option>
              {city_list.map((city) => {
                return <option value={city.city_name}>{city.city_name}</option>;
              })}
            </Field>
            <h6 className={styles.h6form}>Enter your contact number</h6>
            <div className={styles.divphone}>
              <PhoneInput
                initialCountry="ar"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>

            {errors.contact &&
              touched.contact(<p style={{ color: "red" }}>{errors.contact}</p>)}

            {/* <label htmlFor='portfolio'>Please, upload your portfolio PDF,Word,Image</label>
            <Field 
                type='file'
                name='portfolio'
                id='portfolio'
                accept='application/pdf,application/vnd.ms-excel, image/png, image/jpeg'
                multiple
            /> */}
            <h6 className={styles.h6form}>Insert your portfolio URL</h6>
            <Field
              type="text"
              placeholder="URL portfolio"
              name="portfolio"
              id="portfolio"
              onChange={handleChange}
              // error={errors.portfolio}
              value={values.portfolio}
              className={styles.field}
            />
            <h6 className={styles.h6form}>Select your profession</h6>
            <Field
              as="select"
              name="cat"
              id="cat"
              onChange={(e) => {
                console.log(e.target.value);
                setCat_selected(e.target.value);
                handleChange(e);
              }}
              // error={errors.skills}
              value={values.cat}
              className={styles.fieldProf}
            >
              <option>Select a Professional Category...</option>
              {category_list.map((cat) => {
                return (
                  <option key={cat.id} value={cat.id}>
                    {cat.typecategory}
                  </option>
                );
              })}
            </Field>
            <Field
              as="select"
              name="professionselect"
              id="professionselect"
              placeholder="Select your Profession..."
              onChange={(e) => {
                handleChange(e);
                setProf_selected(e.target.value);
              }}
              value={values.professionselect}
              className={styles.fieldProf}
            >
              <option>Select your Profession...</option>
              {professions_list.map((prof) => {
                return (
                  <option key={prof.id} value={prof.profession}>
                    {prof.profession}
                  </option>
                );
              })}
            </Field>

            {/* errors.skills && touched.skills(
                    <p style={{color:'red'}}>{errors.skills}</p>)
            } */}
            <h6 className={styles.h6form}>Tell people about your work</h6>
            <Field
              as="textarea"
              name="description"
              onChange={handleChange}
              placeholder="Write a brief description about your work..."
              className={styles.textareaform}
              // error={errors.description}
              value={values.description}
            />

            <h6 className={styles.h6form}>Upload your profile image</h6>
            <Field
              type="file"
              name="photo"
              id="photo"
              onChange={handleImage}
              className={styles.fieldImg}
            />
            {errors.image &&
              touched.image(<p style={{ color: "red" }}>{errors.image}</p>)}

            <button className={styles.Buttonsend} type="submit">
              {/* disabled={isSubmitting} */}
              Send
            </button>

            {responseServer && <div>{responseServer}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormStaff;
