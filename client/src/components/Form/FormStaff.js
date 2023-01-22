import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import PreviewImage from './PreviewImage';
const FormStaff = () => {
   
     const formik = useFormik({
        initialValues:{
            name: '',
            image: '',
            email: '',
            town: '',
            contact: '',
            portfolio: '',
            skills: '',
            description: '',
            
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            image: Yup.mixed().required('Profile image is required')
            .test('FILE_SIZE', 'It´s too big!', (value)=> value && value.size < 1024 * 1024)
            .test('FILE_TYPE', 'Invalid image', (value)=> value && ['image/png', 'image/jpeg'].includes(value.type)),
            email: Yup.string().email('Invalid e-mail').required('E-mail is required'),
            town: Yup.string().required(),
            contact: Yup.number('Only numbers 0-9').max(11).required('Contact number is required'),
            portfolio: Yup.mixed(),
            description: Yup.string(),

        }),
        
        onSubmit:async()=>{
           
            const {image} = formik.values
            const formData = new FormData()
            try {
                formData.append('file', image)
                formData.append('upload_preset', 'zdsy8b2u')
                const res = await axios.post('https://api.cloudinary.com/v1_1/ddqsqst5a/image/upload', formData)
                console.log(res)
            } catch (error) {
                console.log(error)
            }

        }
     })

     return(
        <div>
            <h1>Professional Profile Form</h1>

            <form onSubmit={formik.handleSubmit} id='professional-profile'>

                <input 
                    type='text'
                    placeholder='Name && Surname'
                    name='name'
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                    value={formik.values.name}
                    />

                <input 
                    type='text'
                    placeholder='E-mail'
                    name='email'
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                    value={formik.values.email}
                    />

                <label for='town'>Choose a town</label>
                    <select name='town' id='town' form='professional-profile'>
                        <option value='bogota'>Bogotá D.C.</option>
                        <option value='buenos-aires'>Buenos Aires</option>
                        <option value='quito'>Quito</option>
                        <option value='caracas'>Caracas</option>
                        <option value='other'>Other...</option>
                        </select>
                    <input
                        type='text'
                        placeholder='¿What are you City?'
                        name='town'
                        onChange={formik.handleChange}
                        value={formik.values.town}

                        />

                <input
                    type='tel'
                    placeholder='Contact number'
                    name='contact'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    onChange={formik.handleChange}
                    error={formik.errors.contact}
                    value={formik.values.contact}
                    />

                <input
                    type='file'
                    name='portfolio'
                    accept='application/pdf,application/vnd.ms-excel'
                    value={formik.values.portfolio}
                    multiple
                    /> 

                <input
                        type='text'
                        placeholder='URL portfolio'
                        name='portfolio'
                        onChange={formik.handleChange}
                        value={formik.values.portfolio}

                        />

                <input
                type='file'
                name='image'
                onChange={element=> formik.setFieldValue('image',element.target.files[0])}
                />
                {formik.errors.image &&(
                    <p style={{color:'red'}}>{formik.errors.image}</p>
                )}

                <button
                    type='Submit'
                > 
                    Upload
                </button>

                <button type='button' onClick={formik.handleReset}>Reset Form</button>
            </form>
            {formik.values.image && <PreviewImage file={formik.values.image} />}
        </div>
     )
    
}

export default FormStaff;