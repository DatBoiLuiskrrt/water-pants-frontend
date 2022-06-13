import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  username: yup.string().required().min(5),
  password: yup.string().required().min(5),
});

export default SignUpSchema;
