import CommonForm from "@/components/common/CommonForm";
import { loginFormControls } from "@/config";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  password: "",
  email: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const onSubmit = () => {};

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your Account
        </h1>
        <p className="mt-2">
          Don't have a Account?{" "}
          <Link
            className="font-medium text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        formData={formData}
        setFormData={setFormData}
        btnText="Log In"
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
