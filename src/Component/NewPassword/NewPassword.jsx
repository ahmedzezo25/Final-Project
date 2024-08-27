import React, { useContext, useState } from "react";
import style from "./NewPassword.module.css";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function NewPassword() {


  let { isLogin, setisLogin } = useContext(UserContext);
  const Navigate = useNavigate();

  const [isloding, setisloding] = useState(false);
  function handelNewPassword(values) {
    setisloding(true);
    axios
      .put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, values)
      .then((res) => {
        setisloding(false);
        console.log(res)
      
        console.log("Ahmed")
        if (res.data.message == "success") {
          localStorage.setItem("userToken", res.data.token);
          setisLogin(res.data.token);
          Navigate("/");
        }
      })
      .catch((res) => {
        setisloding(false);
        console.log(res);
        console.log("Ahmeddddddd")
        // setApierr(res.response.data.message);
      });
  }

  let validationSchema = Yup.object().shape({
    email: Yup.string().email("invalid email").required("email is required"),

    newPassword: Yup.string()
      .matches(
        /^[A-Za-z0-9]{6,10}$/,
        "newPassword should be number 6 and 10 char "
      )
      .required("newPassword is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    validationSchema,
    onSubmit: handelNewPassword,
  });

  return (
    <>
     
      <h1 className=" text-[30px] font-medium mt-10  text-black ">
       newpassword
      </h1>
      
      <form onSubmit={formik.handleSubmit} className="w-full mx-auto py-5">
       
        <div class="mb-5 w-full">
        
          <input
            value={formik.values.email }
            placeholder="email"
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
        
          <input
            value={formik.values.newPassword}
            name="newPassword"
            placeholder="newPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            id="newPassword"
            className=" border border-gray-300 outline-8 focus:outline-none focus:outline-blue-300  text-lg rounded-lg  block w-full p-2 "
          />
        </div>

        {formik.errors.newPassword && formik.touched.newPassword? (
         <div class="p-4 mb-4 text-md text-red-600 rounded-lg bg-red-50  dark:text-red-900" role="alert">
         <span > {formik.errors.newPassword}</span>
         </div>
        
        ) : null}
      

        <div className="flex  justify-between	 ">
         
       
          
           

          <button	
            type="submit"
            className="   my-1 border border-slate-500   font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center">   
            {isloding ? (
              <i class="fa-solid fa-spinner fa-spin"></i>
            ) : (
              "newpassword"
            )}
          </button>
         
        
        </div>
      </form>
    </>
  );
}
