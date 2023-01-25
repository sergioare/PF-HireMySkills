import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import styles from './Contact.module.css'

const Contact = () => {

    const questions=['Select your choice',
        'Help with my account',
        'Help raising a support ticket',
        'Work with HireMySkills',
        'Privacy questions',
        'Product advice',
        'Security & Compliance',
        'Other'
    ]
          const formik = useFormik({
            initialValues: {
              name: "",
              email: "",
              question:"",
              message: ""
            },
            validationSchema: Yup.object({
                name: Yup
                    .string()
                    .label('Full name')
                    .required('Name is required')
                    .test('is-full-name', 'Please enter both your first and last name', function (value) {
                        const nameArr = value.split(" ");
                        return nameArr.length >= 2;}),

                email: Yup
                    .string()
                    .required('Please enter a valid email address')
                    .email('E-mail is required'),
                
                question: Yup
                    .string()
                    .oneOf(questions, 'The question you chose does not exist'),

                message: Yup
                    .string()
                    .min(2)
                    .required()
                
            }),
            onSubmit: async (values) => {
              const registerData = {
                name: formik.values.name,
                email: formik.values.email.toLowerCase(),
                question: formik.values.question,
                message: formik.values.message
              };
              console.log(registerData);
            }
          });
          return (
            <div className={styles.contact}>
                <form onSubmit={formik.handleSubmit}>
                    <h1>General Inquiries</h1>
                        <h2>¿Have a question for us?</h2>

                    <div className={styles.input}>
                        <label htmlFor='name'>Full Name</label>
                        
                        <input
                            type='text'
                            name='name'
                            id='name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name} 
                            />
                            {formik.touched.name && formik.errors.name &&(
                                <span className={styles.error}>{formik.errors.name}</span>
                            )}

                    </div>

                    <div className={styles.input}>
                        <label htmlFor='email'>Your email address</label>
                        
                        <input
                            type='email'
                            name='email'
                            id='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email} 
                            />
                            {formik.touched.email && formik.errors.email &&(
                                <span className={styles.error}>{formik.errors.email}</span>
                            )}
                                
                    </div>

                    <div className={styles.input}>
                        <label htmlFor='question'>¿How can we help you?</label>
                        
                        <select
                            name='question'
                            id='question'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.question} 
                            >
                            {questions.map((question, index) => (
                            <option value={question} key={index}>{question}</option>
                            ))}    
                            </select>
                            {formik.touched.question && formik.errors.question &&(
                                <span className={styles.error}>{formik.errors.question}</span>
                            )}
                                
                    </div>

                    <div>
                    <textarea 
                        name='message'
                        id='message'
                        placeholder='Write a message about your question...'
                        />
                        {formik.touched.message && formik.errors.message &&(
                                <span className={styles.error}>{formik.errors.message}</span>
                                )}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            
            </div>
          );
    ;
};

export default Contact;