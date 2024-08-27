import React, { useContext, useState } from "react";
import style from "./Register.module.css";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";


export default function Register() {
let {isLogin, setisLogin} = useContext(UserContext)
  const Navigate = useNavigate()
  const [Apierr, setApierr] = useState("")
  const [isloding, setisloding] = useState(false)
  function handelRegister(values) {
    setisloding(true)
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .then((res) => {
        setisloding(false)
        console.log(res);
      if(res.data.message == "success") {
        localStorage.setItem("userToken", res.data.token)
        setisloding(res.data.token)
        Navigate("/")
      }
      })
      .catch((res) => {
        setisloding(false)
        console.log(res);
        setApierr(res.response.data.message)
      });
  }

  let validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "min lenght is 3")
      .max(10, "max length is 10")
      .required("name is required"),
    email: Yup.string().email("invalid email").required("email is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "invalid phone number")
      .required("phone is required  "),
    password: Yup.string()
      .matches(
        /^[A-Za-z0-9]{6,10}$/,
        "password should be number 6 and 10 char "
      )
      .required("password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "rePassword and password not the same")
      .required("rePassword is required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: handelRegister,
  });

  return (
    <>
   {Apierr ? <div className="text-center text-red-600 text-lg my-3">
    {Apierr}
   </div>:null} <div className="text-center text-red-600 text-lg my-3"></div>
   <h1 className=" text-[30px] font-medium   text-black ">
       Register now
      </h1>
      <form onSubmit={formik.handleSubmit} className="w-full mx-auto py-5">


      <div class="mb-5 w-full">
          <label
            htmlFor="name"
            class="block mb-2 text-md font-md text-gray-600 dark:text-white"
          >
           name :
          </label>
          <input
            value={formik.values.name}
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            id="name"
            className=" border border-gray-300 outline-8 focus:outline-none focus:outline-blue-300  text-lg rounded-lg block w-full p-2 "
          />
        </div>

        {formik.errors.name && formik.touched.name ? (

<div class="p-4 mb-4 text-md text-red-600 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-900" role="alert">
<span > {formik.errors.name}</span>
</div>
         
        ) : null}

        
        <div class="mb-5 w-full">
          <label
            htmlFor="email"
            class="block mb-2 text-md font-md text-gray-600 dark:text-white"
          >
           email :
          </label>
          <input
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            id="email"
            className=" border border-gray-300 outline-8 focus:outline-none focus:outline-blue-300  text-lg rounded-lg block w-full p-2 "
          />
        </div>

        {formik.errors.email && formik.touched.email ? (

<div class="p-4 mb-4 text-md text-red-600 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-900" role="alert">
<span > {formik.errors.email}</span>
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
         <div class="p-4 mb-4 text-md text-red-600 rounded-lg bg-red-50  dark:text-red-900" role="alert">
         <span > {formik.errors.phone}</span>
         </div>
        
        ) : null}












<div class="mb-5 w-full">
          <label
            htmlFor="password"
            class="block mb-2 text-md font-md text-gray-600 dark:text-white"
          >
           password :
          </label>
          <input
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            id="password"
            className=" border border-gray-300 outline-8 focus:outline-none focus:outline-blue-300  text-lg rounded-lg  block w-full p-2 "
          />
        </div>

        {formik.errors.password && formik.touched.password ? (
         <div class="p-4 mb-4 text-md text-red-600 rounded-lg bg-red-50  dark:text-red-900" role="alert">
         <span > {formik.errors.password}</span>
         </div>
        
        ) : null}




<div class="mb-5 w-full">
          <label
            htmlFor="rePassword"
            class="block mb-2 text-md font-md text-gray-600 dark:text-white"
          >
          rePassword :
          </label>
          <input
            value={formik.values.rePassword}
            name="rePassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            id="rePassword"
            className=" border border-gray-300 outline-8 focus:outline-none focus:outline-blue-300  text-lg rounded-lg  block w-full p-2 "
          />
        </div>

        {formik.errors.rePassword && formik.touched.rePassword ? (
         <div class="p-4 mb-4 text-md text-red-600 rounded-lg bg-red-50  dark:text-red-900" role="alert">
         <span > {formik.errors.rePassword}</span>
         </div>
        
        ) : null}

       
      
          <button	
            type="submit"
            className="   my-3 border border-slate-500  font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 ">   
            {isloding ? (
              <i class="fa-solid fa-spinner fa-spin"></i>
            ) : (
              "Register now"
            )}
          </button>
        
      
      </form>
    </>
  );
}
