import React, { useContext, useState } from "react";
import style from "./Forget.module.css";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Forget() {


  let { isLogin, setisLogin } = useContext(UserContext);
  const Navigate = useNavigate();
  const [Apierr, setApierr] = useState("");
  const [isloding, setisloding] = useState(false);
  function handelForget(values) {
    setisloding(true);
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, values)
      .then((res) => {
        setisloding(false);
        console.log(res);
        if (res.data.statusMsg == "success") {
          // localStorage.setItem("userToken", res.data.token);
          // setisLogin(res.data.token);
          Navigate("/forgetvirfy");
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

   
  });

  let formik = useFormik({
    initialValues: {
      email: "",

     
    },
    validationSchema,
    onSubmit: handelForget,
  });

  return (
    <>
    
      <h1 className=" text-[30px] font-medium mt-5   text-black ">
      please enter your verification code
      </h1>
      
      <form onSubmit={formik.handleSubmit} className="w-full mx-auto py-5">
       
        <div class="mb-5 w-full">
        
          <input
            value={formik.values.email }
            placeholder="Email"
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


      

        <div className="flex  justify-between	 ">
         
       
           
           

          <button	
            type="submit"
            className="    my-1 border border-emerald-400 hover:bg-emerald-400 text-emerald-300 hover:text-white   font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center">   
            {isloding ? (
              <i class="fa-solid fa-spinner fa-spin"></i>
            ) : (
              "verify"
            )}
          </button>
         
        
        </div>
      </form>
    </>
  );
}
