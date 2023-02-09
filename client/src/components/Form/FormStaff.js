// import React, { useState } from 'react';
import { Formik, useFormik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PreviewImage from "./PreviewImage";
import styles from "./FormStaff.module.css";

const FormStaff = () => {
  // const [error, setError]= useState(null)
  // const onSubmit = async (values) =>{
  //         setError(null)
  //         const response = await axios
  //         .post('http://localhost:4000/professionals', values)
  //         .catch (error=>{
  //             if(error && error.response) setError(error.response.data.message)
  //         })

  // }
  const handleOnSubmit = async (values) => {
    await axios
      .post("http://localhost:4000/professionals", values)
      .then((response) => {
        console.log("Data added successfully.");
      });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      email: "",
      town: "",
      contact: "",
      portfolio: "",
      skills: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),

      image: Yup.mixed()
        .required("Profile image is required")
        .test(
          "FILE_SIZE",
          "It´s too big!",
          (value) => value && value.size < 1024 * 1024
        )
        .test(
          "FILE_TYPE",
          "Invalid image",
          (value) => value && ["image/png", "image/jpeg"].includes(value.type)
        ),

      email: Yup.string()
        .email("Please enter a valid email address")
        .required("E-mail is required"),

      town: Yup.string().required(),

      contact: Yup.number("Only numbers 0-9")
        .max(11)
        .required("Contact number is required"),

      portfolio: Yup.mixed(),

      skills: Yup.string(),

      description: Yup.string(),
    }),
    onSubmit: (values) => {
      alert(values.contact);
    },
    // onSubmit: (values) => {
    //    handleOnSubmit(values)
    // },
    // onSubmit : (values) => {
    //    handleOnSubmit
    // },
    // onSubmit:async(values)=>{

    //     const {image} = formik.values
    //     const formData = new FormData()
    //     try {
    //         formData.append('file', image)
    //         formData.append('upload_preset', 'zdsy8b2u')
    //         const res = await axios.post('https://api.cloudinary.com/v1_1/ddqsqst5a/image/upload', formData)
    //         console.log(res)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
  });

  return (
    <div className={styles.container}>
      <h1>Professional Profile Form</h1>
      
      <form onSubmit={formik.handleSubmit} id="professional-profile">
        <input
          type="text"
          placeholder="Name && Surname"
          name="name"
          id="name"
          onChange={formik.handleChange}
          error={formik.errors.name}
          value={formik.values.name}
        />

        <input
          type="text"
          placeholder="E-mail"
          name="email"
          id="email"
          onChange={formik.handleChange}
          error={formik.errors.email}
          value={formik.values.email}
        />

        <label htmlFor="town">Choose a town</label>
        <select name="town" id="town" form="professional-profile">
          <option value="bogota">Bogotá D.C.</option>
          <option value="buenos-aires">Buenos Aires</option>
          <option value="quito">Quito</option>
          <option value="caracas">Caracas</option>
          <option value="other">Other...</option>
        </select>
        <input
          type="text"
          placeholder="¿Are you in another City?"
          name="town"
          id="town"
          onChange={formik.handleChange}
          value={formik.values.town}
        />

        <input
          type="tel"
          placeholder="Contact number"
          name="contact"
          id="contact"
          onChange={formik.handleChange}
          error={formik.errors.contact}
          value={formik.values.contact}
        />

        <label htmlFor="portfolio">Please, upload your portfolio</label>
        <input
          type="file"
          name="portfolio"
          id="portfolio"
          accept="application/pdf,application/vnd.ms-excel"
          value={formik.values.portfolio}
          onChange={formik.handleChange}
          multiple
        />

        <input
          type="text"
          placeholder="URL portfolio"
          name="portfolio"
          id="portfolio"
          onChange={formik.handleChange}
          value={formik.values.portfolio}
        />

        <input
          type="text"
          placeholder="Put your Skills here!"
          name="skills"
          id="skills"
          onChange={formik.handleChange}
          value={formik.values.skills}
        />

        <label htmlFor="image">Please, upload your Profile Image</label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={(element) =>
            formik.setFieldValue("image", element.target.files[0])
          }
        />
        {formik.errors.image && (
          <p style={{ color: "red" }}>{formik.errors.image}</p>
        )}

        <textarea
          name="description"
          id="description"
          form="professional-profile"
          placeholder="Write a brief description about your work..."
        />

        <button type="submit">Submit</button>

        <button type="button" onClick={formik.handleReset}>
          Reset Form
        </button>
      </form>
      {formik.values.image && <PreviewImage file={formik.values.image} />}
    </div>
  );
};

export default FormStaff;
