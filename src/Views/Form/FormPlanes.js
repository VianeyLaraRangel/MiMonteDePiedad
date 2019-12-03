import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

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


const MySelect = ({ label, ...props }) => {

  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <errormessage>{meta.error}</errormessage>
      ) : null}
    </>
  );
};

// Formulario
const SignupForm = () => {
  return (
    <>
      <h1>Tus Planes</h1>
      <Formik
        initialValues={{
          planes: '',
          jobType: '', // añade un select select
          ocupacion: '',
          rfc: '',
          acceptedTerms: false, // checkbox
          
        }}
        validationSchema={Yup.object({
          planes: Yup.string()
            .max(200, 'Debe tener 15 caracteres o menos')
            .required('Required'),
            ctonecesitas: Yup.string()
            .oneOf(
              ['op1', 'op2', 'op3', 'op4','op5','op6','other'],
              'Invalid Job Type'
            )
            .required('Required'),
          ocupacion: Yup.string()
            .max(35, 'Debe tener 35 caracteres o menos')
            .required('Required'),
          email: Yup.string()
            .max(17,'RFC incorrecto')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="¿Cuáles son tus planes?"
            name="planes"
            type="text-area"
            placeholder="Describe tus planes"
          />
          <MySelect label="¿Cuanto necesitas?" name="ctonecesitas">
            <option value="">Seleccione una opción</option>
            <option value="op1">$5,000.00 a $7,500.00</option>
            <option value="op2">$7,500.00 a $10,000.00</option>
            <option value="op3">$10,000.00 a $12,500.00</option>
            <option value="op4">$12,500.00 a $15,000.00</option>
            <option value="op5">$15,000.00 a $17,500.00</option>
            <option value="op6">$17,500.00 a $20,000.00</option>
            <option value="other">Other</option>
          </MySelect>
          <MyTextInput
            label="Ocupación"
            name="ocupacion"
            type="text-area"
            placeholder="Describe a que te dedicas"
          />
          <MyTextInput
            label="RFC"
            name="rfc"
            type="text"
            placeholder="Ingresa tu RFC con omoclave"
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