import React, { useContext, useState } from "react";
import style from "./ForgetVirfy.module.css";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function ForgetVirfy() {


  let { isLogin, setisLogin } = useContext(UserContext);
  const Navigate = useNavigate();
  const [Apierr, setApierr] = useState("");
  const [isloding, setisloding] = useState(false);
function virfy(code) {
  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, {resetCode: code})
  .then((res) => res  )
  .catch((res) => {
    console.log(res)
   
  })
}
  // function handelForgetvirfy(values) {


  //   setisloding(true);
  //   axios
  //     .post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, values)
  //     .then((res) => {
  //       setisloding(false);
  //       console.log(res);
  //       if (res.data.statusMsg == "success") {
  //       //   // localStorage.setItem("userToken", res.data.token);
  //       //   // setisLogin(res.data.token);
  //         Navigate("/newpassword");
  //       }
  //     })
  //     .catch((res) => {
  //       setisloding(false);
  //       console.log(res);
        
  //     });
  // }

  // let validationSchema = Yup.object().shape({
  //   resetCode: Yup.string().matches(/^[0-9]{6}$/, "the code isn't valid").required("the code isn't valid"),

   
  // });

  // let formik = useFormik({
  //   initialValues: {
  //     resetCode: "",

     
  //   },
  //   validationSchema,
  //   onSubmit: handelForgetvirfy,
  // });

  return (
    <>
    
      <h1 className=" text-[30px] font-medium mt-5   text-black ">
      reset your account password
      </h1>
      
      <form  className="w-full mx-auto py-5">
       
        <div class="mb-5 w-full">
        
          <input
            // value={formik.values.resetCode }
            placeholder="Code"
            name="resetCode"
            // onChange={formik.handleChange  }
            // onBlur={formik.handleBlur}
            type="text"
            id="resetCode"
            className=" border border-gray-300 outline-8 focus:outline-none focus:outline-blue-300  text-lg rounded-lg block w-full p-2 "
          />
        </div>

        {/* {formik.errors.resetCode && formik.touched.resetCode ? (

<div class="p-4 mb-4 text-md text-red-600 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-900" role="alert">
<span > {formik.errors.resetCode}</span>
</div>
         
        ) : null} */}


      

        <div className="flex  justify-between	 ">
         
       
           
           

          <button	onClick={() => virfy(code)}
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

