"use client";
import React from "react";
import LoginForm from "./Form";

const Login = () => {
  return (
    <section className="xsm:h-[100vh] flex">
      <div
        className="basis-1/2 bg-cover bg-no-repeat bg-[#000080] relative max-md:hidden"
        style={{ backgroundImage: "url('/images/homepage/signup-bg2.svg')" }}
      >
        <p className="login-text max-xlg:top-[50px] ">
          <span className="font-semibold text-base">
            Our AI-driven platform streamlines the process
          </span>{" "}
        </p>
      </div>
      <section className="md:basis-1/2 max-md:w-full flex items-center justify-center">
        <LoginForm />
      </section>
    </section>
  );
};

export default Login;
