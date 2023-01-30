<<<<<<< HEAD
import * as Yup from 'yup'
export const validationSchema= Yup.object().shape({
                name: Yup
                    .string()
                    .required('Name is required')
                    .min(3, 'Name must be at least 3 characters'),
    
                photo: Yup
                    .mixed()
                    .required('Profile image is required')
                    .test('FILE_SIZE', 'It´s too big!', (value)=> value && value.size < 1024 * 1024)
                    .test('FILE_TYPE', 'Invalid image', (value)=> value && ['image/png', 'image/jpeg'].includes(value.type)),
                
                email: Yup
                    .string()
                    .email('Please enter a valid email address')
                    .required('E-mail is required'),
    
                town: Yup
                    .string()
                    .required(),
    
                contact: Yup
                    .number('Only numbers 0-9')
                    .max(11)
                    .required('Contact number is required'),
    
                portfolio: Yup
                    .mixed(),
    
                skills: Yup
                    .string(),
    
                description: Yup
                    .string()
=======
import * as Yup from 'yup'
export const validationSchema= Yup.object().shape({
                name: Yup
                    .string()
                    .required('Name is required')
                    .min(3, 'Name must be at least 3 characters'),
    
                photo: Yup
                    .mixed()
                    .required('Profile image is required')
                    .test('FILE_SIZE', 'It´s too big!', (value)=> value && value.size < 1024 * 1024)
                    .test('FILE_TYPE', 'Invalid image', (value)=> value && ['image/png', 'image/jpeg'].includes(value.type)),
                
                email: Yup
                    .string()
                    .email('Please enter a valid email address')
                    .required('E-mail is required'),
    
                town: Yup
                    .string()
                    .required(),
    
                contact: Yup
                    .number('Only numbers 0-9')
                    .max(11)
                    .required('Contact number is required'),
    
                portfolio: Yup
                    .mixed(),
    
                skills: Yup
                    .string(),
    
                description: Yup
                    .string()
>>>>>>> 1afe384106ffc2583c1d102e0c5f18c7d77f6005
                })