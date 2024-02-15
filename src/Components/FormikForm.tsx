import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  mobile: "",
};
function UserDetails() {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    handleBlur,
    touched,
    handleReset,
  } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required()
        .matches(/^[A-Za-z]+$/, "Enter valid name"),
      email: yup.string().required(),
      mobile: yup.string().required(),
    }),
  });

  return (
    <div className="w-100 d-flex justify-content-center mt-5">
      <form onSubmit={handleSubmit} className="d-flex w-25 flex-column gap-2">
        <title className="d-flex">User Details</title>

        <input
          name="name"
          type="text"
          placeholder="Enter User Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        {errors.name && touched.name && (
          <p className="text-danger">{errors.name}</p>
        )}

        <input
          name="email"
          type="text"
          placeholder="Enter User Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && (
          <p className="text-danger">{errors.email}</p>
        )}

        <input
          name="mobile"
          type="number"
          placeholder="Enter User Mobile Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.mobile}
        />
        {errors.mobile && touched.mobile && (
          <p className="text-danger">{errors.mobile}</p>
        )}

        <div className="d-flex gap-3 justify-content-center">
          <button type="submit" className="btn btn-md btn-primary">
            Submit
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="btn btn-md btn-secondary"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserDetails;
