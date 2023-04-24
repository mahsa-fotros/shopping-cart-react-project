import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import "./signup.css";
import { Link } from "react-router-dom";
import { signupUser } from "../../services/signupService";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  phoneNumber:"",
  password: "",
  reEnterPassword: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(6, "Name length is not valid"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number")
    .nullable(),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters(including uppercase,lowercase,number,symbol)"
    ),
  reEnterPassword: Yup.string()
    .required("Pasword Confirmation is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignupForm = () => {

  const [error,setError] = useState(null);
  const onSubmit =async (values)=>{
    // console.log(values);
      const {name, email,phoneNumber, password} =values;
      const userData={
        name,
        email, 
        phoneNumber,
        password
      };
      try {
        const {data}= await signupUser(userData);
        console.log(data);
      } catch (error) {
        if(error.response && error.response.data.message)
          setError(error.response.data.message);
      }
    }
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnMount: true,
    });
    
    return (
      <div className="signupForm">
        <h2 className="signupTitle">Create account</h2>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Your name"
            name="name"
            formik={formik}
            placeholder="First and last name"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            formik={formik}
            placeholder=""
          />
          <Input
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            formik={formik}
            placeholder=""
          />
          <Input
            label="Password"
            name="password"
            type="password"
            formik={formik}
            placeholder=""
          />
          <Input
            label="Re-enter password"
            name="reEnterPassword"
            type="password"
            formik={formik}
            placeholder=""
          />
          <button
            type="submit"
            className="btn secondary"
            style={{ width: "40rem", padding: "1.2rem 0", fontWeight: "700" }}
            disabled={!formik.isValid}
          >
            Sign up
          </button>
          {error && (
            <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
          )}
          <Link to="/login">
            <p style={{ fontSize: "1.6rem" }}>Already sign up?</p>
          </Link>
        </form>
      </div>
    );
}
 
export default SignupForm;