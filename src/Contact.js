import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Contact = () => {
  const handleSubmit = async (values, actions) => {
    console.log('Form Values:', values);
    try {
      await axios.post('', values);

      console.log('Email sent successfully!');
      actions.setSubmitting(false);
    } catch (error) {
      console.error('Error sending email:', error);
      actions.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-cover bg-[#ffffff] bg-fixed">
      <div className="max-w-md mx-auto p-4 bg-white border-black border rounded">
        <div className="mb-4">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-600">Fill out the form below and we'll get back</p>
        </div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className="block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className="block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Field
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  component="textarea"
                  className="block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-[100px]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 font-medium text-white bg-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Contact;