import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="w-100 d-flex justify-content-center">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
