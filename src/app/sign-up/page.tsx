"use client";
import axios from "axios";
import { Formik } from "formik";
import React from "react";

const initValues = {
  donor: "donor_false",
  first_name: "a",
  last_name: "b",
  email: "test@mail.com",
  phone: "123",
  city: "asdf",
  password: "1234567890",
  confirm_password: "1234",
};

function SignUp() {
  function submitFn(data: typeof initValues) {
    console.log("submit:", data);
    axios.post("/api/user", data).then(console.log).catch(console.error);
  }
  return (
    <main className="h-screen w-screen grid bg-gray-50">
      <div className="m-auto p-4 flex flex-col items-start justify-center border rounded">
        <h1 className="mb-12 self-center text-xl font-semibold">
          Sign Up With PitchIn` `
        </h1>
        <Formik initialValues={initValues} onSubmit={submitFn}>
          {({ errors, values, handleSubmit, handleBlur, handleChange }) => (
            <form className="w-max flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-4 flex gap-2 text-sm font-extralight">
                <input
                  type="radio"
                  name="donor"
                  id="donor_false"
                  value={values.donor}
                />{" "}
                <p>I&apos;am ready to donate blood</p>
                <input
                  type="radio"
                  name="donor"
                  id="donor_true"
                  value={values.donor}
                />
                <p>I don&apos;t want to be a donor</p>
              </div>
              <div className="mb-4 flex gap-2 text-sm font-extralight">
                <input
                  className="p-2 bg-gray-100 rounded"
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  id="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <input
                  className="p-2 bg-gray-100 rounded"
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <input
                className="mb-4 p-2 bg-gray-100 rounded"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                className="mb-4 p-2 bg-gray-100 rounded"
                type="phone"
                name="phone"
                id="phone"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                className="mb-4 p-2 bg-gray-100 rounded"
                type="city"
                name="city"
                id="city"
                placeholder="City"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                className="mb-4 p-2 bg-gray-100 rounded"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                className="mb-4 p-2 bg-gray-100 rounded"
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <button
                className="h-8 rounded bg-red-500 text-white"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          )}
        </Formik>
        <p className="mt-4 self-center text-xs font-extralight">
          Already have an account?{" "}
          <a
            className="text-red-500"
            href="/login"
            target="_self"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </p>
      </div>
    </main>
  );
}

export default SignUp;
