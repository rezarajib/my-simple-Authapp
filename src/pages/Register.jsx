import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { registerInputs } from '../data/FormData';

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered Data:", values);
    alert("Registration Successful!");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden my-12 border border-slate-100">
      {/* Tabs Nav */}
      <div className="flex bg-slate-100 p-1 text-sm font-semibold text-slate-600">
        <button className="flex-1 py-2.5 bg-white text-slate-900 rounded-lg shadow-sm text-center">
          Create Your Account
        </button>
        <Link to="/login" className="flex-1 py-2.5 text-slate-500 hover:text-slate-900 text-center">
          Sign In
        </Link>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="p-6">
        {registerInputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            pattern={input.name === "confirmPassword" ? values.password : input.pattern}
          />
        ))}

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg text-sm hover:bg-blue-700 transition mt-2 shadow-md cursor-pointer"
        >
          Create Your Account
        </button>

        <p className="text-center text-xs text-slate-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
