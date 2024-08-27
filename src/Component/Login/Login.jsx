import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Login() {


  let { isLogin, setisLogin } = useContext(UserContext);
  const Navigate = useNavigate();
  const [Apierr, setApierr] = useState("");
  const [isloding, setisloding] = useState(false);
  function handelLogin(values) {
    setisloding(true);
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .then((res) => {
        setisloding(false);
        console.log(res);
        if (res.data.message == "success") {
          localStorage.setItem("userToken", res.data.token);
          setisLogin(res.data.token);
          Navigate("/");
        }
      })
      .catch((res) => {
        setisloding(false);
        console.log(res);
        setApierr(res.response.data.message);
      });
  }

  let validationSchema = Yup.object().shape({
    email: Yup.string().email("invalid email").required("email is required"),

    password: Yup.string()
      .matches(
        /^[A-Za-z0-9]{6,10}$/,
        "password should be number 6 and 10 char "
      )
      .required("password is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",

      password: "",
    },
    validationSchema,
    onSubmit: handelLogin,
  });

  return (
    <>
      {Apierr ? (
        <div className="text-center text-red-600 text-lg my-3">{Apierr}</div>
      ) : null}{" "}
      <div className="text-center text-red-600 text-lg my-3"></div>
      <h1 className=" text-[30px] font-medium   text-black ">
        login now
      </h1>
      
      <form onSubmit={formik.handleSubmit} className="w-full mx-auto py-5">
       
        <div class="mb-5 w-full">
          <label
            htmlFor="email"
            class="block mb-2 text-md font-md text-gray-600 dark:text-white"
          >
           email :
          </label>
          <input
            value={formik.values.email }
            
            name="email"
            onChange={formik.handleChange  }
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
      

        <div className="flex  justify-between	 ">
         
       
            <span className="text-slate-700 duration-75	 hover:text-emerald-400 font-medium text-[20px] ">
           
            <Link to={`/forget`}>
              forget your password ?
              </Link>
            </span>
           

          <button	
            type="submit"
            className="   my-1 border border-slate-500   font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center">   
            {isloding ? (
              <i class="fa-solid fa-spinner fa-spin"></i>
            ) : (
              "login now"
            )}
          </button>
         
        
        </div>
      </form>
    </>
  );
}
