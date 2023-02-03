import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
// import { validationSchema } from './validation';
// import * as Yup from 'yup'
import axios from "axios";
import styles from "./FormStaff.module.css";
import { useNavigate } from "react-router-dom";
let professions_list = [];

const FormStaff = () => {
  const [responseServer, setResponseServer] = useState(null);
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

  const getprofessions = async () => {
    await axios
      .get("https://hiremyskillsbackend.onrender.com/profession")
      .then((res) => (professions_list = res.data))
      .then(() => console.log(professions_list));
  };

  useEffect(() => {
    getprofessions();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Professional Profile Form</h1>

      <Formik
        initialValues={{
          name: "",
          description: "",
          photo: "",
          email: "",
          town: "",
          contact: "",
          portfolio: "",
          skills: [],
        }}
        onSubmit={(values) => {
          values.skills.push(values.professionselect);
          values.photo = imageCloud;
          console.log(values, "estos son los values");
          axios
            //   ({
            //     method: "POST",
            //     url: "https://hiremyskillsbackend.onrender.com/professionals",
            //     data: values,
            //   })
            .post(
              "https://hiremyskillsbackend.onrender.com/professionals",
              values
            )
            .then((response) => {
              console.log(response, "hola");
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
          <Form>
            <Field
              type="text"
              placeholder="Full name"
              name="name"
              id="name"
              onChange={handleChange}
              // error={errors.name}
              value={values.name}
              className={styles.field}
            />
            {errors.name &&
              touched.name(<p style={{ color: "red" }}>{errors.name}</p>)}

            <Field
              type="text"
              placeholder="E-mail"
              name="email"
              id="email"
              onChange={handleChange}
              // error={errors.email}
              value={values.email}
              className={styles.field}
            />
            {errors.email &&
              touched.email(<p style={{ color: "red" }}>{errors.email}</p>)}

            <Field
              as="select"
              name="town"
              onChange={handleChange}
              // error={errors.town}
              value={values.town}
              className={styles.fieldTown}
            >
              <option value="">Select your location</option>
              <option value="Bogotá">Bogotá D.C.</option>
              <option value="Buenos-Aires">Buenos Aires</option>
              <option value="Quito">Quito</option>
              <option value="Caracas">Caracas</option>
              <option value="Other">Other...</option>
            </Field>

            <Field
              type="text"
              placeholder="¿Are you in another City?"
              name="town"
              id="town"
              onChange={handleChange}
              // error={errors.town}
              value={values.town}
              className={styles.fieldTown}
            />

            <Field
              type="tel"
              placeholder="Contact number"
              name="contact"
              id="contact"
              onChange={handleChange}
              // error={errors.contact}
              value={values.contact}
              className={styles.field}
            />
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
            <label>Select your Profession...</label>
            <Field
              as="select"
              name="professionselect"
              id="professionselect"
              placeholder="Select your Profession..."
              onChange={handleChange}
              // error={errors.skills}
              value={values.professionselect}
              className={styles.field}
            >
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

            <Field
              as="textarea"
              name="description"
              onChange={handleChange}
              placeholder="Write a brief description about your work..."
              // error={errors.description}
              value={values.description}
            />

            <label htmlFor="photo">Please, upload your Profile Image</label>
            <Field
              type="file"
              name="photo"
              id="photo"
              onChange={handleImage}
              className={styles.field}
            />
            {errors.image &&
              touched.image(<p style={{ color: "red" }}>{errors.image}</p>)}

            <button type="submit">
              {/* disabled={isSubmitting} */}
              Submit
            </button>

            {responseServer && <div>{responseServer}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormStaff;
