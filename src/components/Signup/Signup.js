import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import "./signup.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  reEnterPassword: "",
};

const validationSchema=Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(6, "Name length is not valid"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
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
    const onSubmit =(values)=>{
        console.log(values);
    }
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnMount: true,
    });
    console.log(formik.isValid);
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
          <Input label="Email" name="email" type="email" formik={formik} placeholder="" />
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
            Sign Up
          </button>
        </form>
      </div>
    );
}
 
export default SignupForm;