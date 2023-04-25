import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/loginService";
import { useState } from "react";
import { useAuthActions } from "../../Context/AuthProvider";

const initialValues={
    email:"",
    password:""
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
});

const LoginForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setAuth= useAuthActions();

    const onSubmit=async (values)=>{
        // console.log(values);
        try {
          const {data}= await loginUser(values);
          setAuth(data);
          localStorage.setItem("authState", JSON.stringify(data));
          setError(null);
          navigate("/");
        } catch (error) {
          console.log(error);
          if (error.response && error.response.data.message)
            setError(error.response.data.message);
        }
    }
    
    const formik=useFormik({initialValues,onSubmit, validationSchema, validateOnMount:true})
    return (
      <div className="loginForm">
        <h2 className="loginTitle">Sign in</h2>
        <form onSubmit={formik.handleSubmit}>
          <Input
            formik={formik}
            name="email"
            label="Email"
            type="email"
            placeholder=""
          />
          <Input
            formik={formik}
            name="password"
            label="Password"
            type="password"
            placeholder=""
          />
          <button
            type="submit"
            className="btn third"
            style={{ width: "40rem", padding: "1.2rem 0", fontWeight: "700" }}
            disabled={!formik.isValid}
          >
            Sign in
          </button>
          {error && (
            <p style={{ color: "red", marginBottom: "1rem", "fontSize":"1.4rem" }}>{error}</p>
          )}
          <Link to="/signup">
            <p style={{ fontSize: "1.6rem" }}>Not sign up yet?</p>
          </Link>
        </form>
      </div>
    );
}
 
export default LoginForm;