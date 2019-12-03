import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import './FormSobreTi.css'
//import {Logo} from "./monte_logo.png";

const MyTextInput = ({ label, ...props }) => {
  
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};


// Formulario
const SignupForm = () => {
  return (
    <>
      {/* <div className="sobreti-box">
           <img src={Logo} className="sobreti-logo" alt="logo" />
       </div> */}
      <h1>Sobre tí</h1>
      <Formik
        initialValues={{
          curp: '',
          ocupacion: '',
          rfc: '',
          ine: '',
        }}
        validationSchema={Yup.object({
          fechnacimiento: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Obligatorio'),
          ocupacion: Yup.string()
            .max(35, 'Debe tener 35 caracteres o menos')
            .required('Obligatorio'),
          rfc: Yup.string()
            .max(13,'RFC incorrecto, Verifica en el link')
            .required('Obligatorio'),
          ine: Yup.string()
          .max(15, 'Debe tener 13 o 12 caracteres')
            .required('Obligatorio'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="formulario">
          <MyTextInput
            label="Fecha de Nacimiento"
            name="fechnacimiento"
            type="text"
            placeholder="dd/mm/aa"
          />
          <MyTextInput
            label="Ocupación"
            name="ocupacion"
            type="textarea"
            placeholder="Describe a que te dedicas"
          />
          <MyTextInput
            label="RFC"
            name="rfc"
            type="text"
            placeholder="Ingresa tu RFC con omoclave"
          />
          <MyTextInput
            label="INE"
            name="ine"
            type="text"
            placeholder="Ejem.<<0747116375842"
          />
          <button type="submit">Siguiente</button>
        </Form>
      </Formik>
    </>
  );
};
// function App() {
//     return <SignupForm />;
//   }

export default SignupForm;