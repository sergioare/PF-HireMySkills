import React, { useState } from 'react';
import { Formik,Field, Form } from 'formik';
import axios from 'axios'
import styles from './FormServices.module.css'
import {useNavigate} from 'react-router-dom'


const FormServices = () => {
    const navigate = useNavigate();
    const[responseServer, setResponseServer] = useState(null);
    const [imageCloud, setImageCloud] = useState('');

    const handleImage = async event=>{
        const file = event.target.files[0];
        const formData = new FormData()
        try{
            formData.append('file', file)
            formData.append('upload_preset', 'zdsy8b2u')
            await axios.post('https://api.cloudinary.com/v1_1/ddqsqst5a/image/upload', formData)
            .then(res=>{
                console.log(res.data.url)
                setImageCloud(res.data.url)
            })
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className={styles.container}>
            <h1>Creating Services</h1>
            <Formik        
            initialValues={{
              name: "",
              quantity: 1,
              description:"",
              img: "",
              price: 0.00
            }}
            //    validationSchema= {Yup.object({
            //     name: Yup
            //         .string()
            //         .label('Full name')
            //         .required('Name is required')
            //         .test('is-full-name', 'Please enter both your first and last name', function (value) {
            //             const nameArr = value.split(" ");
            //             return nameArr.length >= 2;}),

            //     description: Yup
            //         .string()
            //         .min(2)
            //         .required()
                
            // })}
            onSubmit={ async (values) => {
                values.photo = imageCloud;
                console.log(values)
                axios({
                method:'POST',
                url: 'https://hiremyskillsbackend.onrender.com/products',
                data: values
                })
                .then((response) => {
                    console.log(response.data, "hola")
                    setResponseServer(response.data);
                    // setSubmitting(false);
                    // navigate('/home')
                    alert('Your service was created successfuly')
              })
                .catch(error=>{
                    setResponseServer(error.message);
                })

            }
          }
          >
{({ errors, touched, handleBlur, handleChange, values, isSubmitting}) => (
                <Form>
                                            
                        <Field
                            type='text'
                            name='name'
                            id='name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name} 
                            className={styles.field}
                            placeholder='Write a descriptive name about your service'

                            />
                            {touched.name && errors.name &&(
                                <span className={styles.error}>{errors.name}</span>
                            )}

                        <label htmlFor='quantity'>Please, enter the quantity of service you want offer to </label>
                        <Field
                            type='number'
                            name='quantity'
                            id='quantity'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.quantity} 
                            className={styles.field}
                            />
                            {touched.quantity && errors.quantity &&(
                                <span className={styles.error}>{errors.quantity}</span>
                            )}

                        <Field
                            as='textarea' 
                            name='description'
                            id='description'
                            placeholder='Write a description about your service...'
                            className={styles.field}
                        />
                        {touched.description && errors.description &&(
                                <span className={styles.error}>{errors.description}</span>
                                )}
                        

                        <label htmlFor='img'>Please, upload a reference about your Service (Image)</label>
                        <Field
                            type='file'
                            name='img'
                            id='img'
                            onChange={handleImage}
                            className={styles.field}

                        />
                        {errors.img && touched.img(
                                <p style={{color:'red'}}>{errors.img}</p>
                            )}

                        <label htmlFor='img'>Please, enter your service price (USD)</label>
                        <Field
                            name='price'
                            id='price'
                            placeholder="Offer price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price} 
                            className={styles.field}
                            />
                            {touched.price && errors.price &&(
                                <span className={styles.error}>{errors.price}</span>
                            )}

                        <button type='submit'> 
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

export default FormServices;