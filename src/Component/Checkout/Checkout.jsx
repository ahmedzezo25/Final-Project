import React, { useContext, useState } from "react";

import { useFormik } from "formik";
import axios from "axios";


import { Link } from "react-router-dom";

import { CartContext } from "../../Context/CartContext";

export default function Checkout() {
  let {cartid } = useContext(CartContext)
  let { checkout } = useContext(CartContext);
  let formik = useFormik({
    initialValues: {
      details: "",

      phone: "",
      city: "",
    },

    onSubmit: () =>
      handelCheckout(cartid, `http://localhost:5173`),
  });


   async function handelCheckout(cardid, url) {
 let {data} =   await checkout(cardid, url, formik.values);
 console.log(data)
 window.location.href = data.session.url
  }



  return (
    <>
      <h1 className=" text-[30px] font-medium   text-black ">Checkout now</h1>
      <form onSubmit={formik.handleSubmit} className="w-full mx-auto py-5">
        <div class="mb-5 w-full">
          <label
            htmlFor="details"
            class="block mb-2 text-md font-md text-gray-600 dark:text-white"
          >
            details :
          </label>
          <input
            value={formik.values.details}
            name="details"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            id="details"
            className=" border border-gray-300 outline-8 focus:outline-none focus:outline-blue-300  text-lg rounded-lg block w-full p-2 "
          />
        </div>

        {formik.errors.details && formik.touched.details ? (
          <div
            class="p-4 mb-4 text-md text-red-600 rounded-lg bg-red-50  dark:text-red-900"
            role="alert"
          >
            <span> {formik.errors.details}</span>
          </div>
        ) : null}

        <div class="mb-5 w-full">
          <label
            htmlFor="phone"
            class="block mb-2 text-md font-md text-gray-600 dark:text-white"
          >
            phone :
          </label>
          <input
            value={formik.values.phone}
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="tell"
            id="phone"
            className=" border border-gray-300 outline-8 focus:outline-none focus:outline-blue-300  text-lg rounded-lg  block w-full p-2 "
          />
        </div>

        {formik.errors.phone && formik.touched.phone ? (
          <div
            class="p-4 mb-4 text-md text-red-600 rounded-lg bg-red-50  dark:text-red-900"
            role="alert"
          >
            <span> {formik.errors.phone}</span>
          </div>
        ) : null}

        <div class="mb-5 w-full">
          <label
            htmlFor="city"
            class="block mb-2 text-md font-md text-gray-600 dark:text-white"
          >
            city :
          </label>
          <input
            value={formik.values.city}
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            id="city"
            className=" border border-gray-300 outline-8 focus:outline-none focus:outline-blue-300  text-lg rounded-lg  block w-full p-2 "
          />
        </div>

        {formik.errors.city && formik.touched.city ? (
          <div
            class="p-4 mb-4 text-md text-red-600 rounded-lg bg-red-50  dark:text-red-900"
            role="alert"
          >
            <span> {formik.errors.city}</span>
          </div>
        ) : null}

        <button
          type="submit"
          className="btn border text-md text-teal-300 border-teal-300 w-full py-2 rounded-lg"
        >
          pay now
        </button>
      </form>
    </>
  );
}
