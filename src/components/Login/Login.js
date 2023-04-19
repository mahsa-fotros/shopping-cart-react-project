import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input";
import "./Login.css"
import { Link } from "react-router-dom";

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
    const onSubmit=(values)=>{
        console.log(values);
    }
    
    const formik=useFormik({initialValues,onSubmit, validationSchema, validateOnMount:true})
    return (
      <div className="loginForm">
        <h2 className="loginTitle">Sign in</h2>
        <form>
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
            className="btn secondary"
            style={{ width: "40rem", padding: "1.2rem 0", fontWeight: "700" }}
            disabled={!formik.isValid}
          >
            Sign in
          </button>
            <Link to="/signup">
            <p style={{fontSize:"1.6rem"}}>Not sign up yet?</p>
            </Link>
        </form>
      </div>
    );
}
 
export default LoginForm;