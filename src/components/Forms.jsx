import React ,{useState,useEffect}from 'react'
import {useFormik} from "formik"
import "../App.css"


const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });



  const MyForm = () => {
    const handleSubmit = (values, { setSubmitting }) => {
      console.log('Form submitted with values:', values);
      setSubmitting(false);
    };}


function Forms() {
    
    const formik =useFormik({
        initialValues:{
            firstname : '',
            lastname :'',
            email :'',
            phoneno:''

        }
    })

    
    
  return (
    <formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    
    >
    <div>
        <form>
        <div>
            <label htmlFor="firstname">First-name:</label>
        <input type="text" id='firstname' name="firstname"  onChange={formik.handleChange} value={formik.values.firstname}/>
        <ErrorMessage name="firstName" component="div" className="error" /></div>
        <div>
            <label htmlFor="lastname">Last-name:</label>
        <input type="text" id="lastname" name="lastname" onChange={formik.handleChange} value={formik.values.lastname}/> 
        <ErrorMessage name="lastName" component="div" className="error" /></div>
        <div>
            <label htmlFor="email">E-mail:</label>
        <input type="email" id='email' name="email" onChange={formik.handleChange} value={formik.values.email}/>
        <ErrorMessage name="email" component="div" className="error" /></div>
        <div>
            <label htmlFor="phoneno">Phone:</label>
        <input type="tel" id='phoneno' name='phoneno'onChange={formik.handleChange} value={formik.values.phoneno}/>
        <ErrorMessage name="phoneno" component="div" className="error" /></div>

        <button type="submit">Register</button>
        </form>
    </div>
    </formik>
  )
}

export default Forms