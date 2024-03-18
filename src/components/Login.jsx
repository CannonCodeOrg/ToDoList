import React, { useRef } from "react";

const Login = ({ onLogin }) => {
  const loginInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { login: loginInputRef.current.value, password: passwordInputRef.current.value }
    
    onLogin(data);
    loginInputRef.current.value = ""
    passwordInputRef.current.value = ""
  }

  return (
    <div className="text-center text-white p-4">
      <form onSubmit={handleSubmit}>
        <input className="login-input" type="text" id="login" name="login" placeholder="Login" ref={loginInputRef} />
        <br />
        <input className="mt-4 login-input" type="password" id="password" name="password" placeholder="Password" ref={passwordInputRef} />
        <br />
        <button type="submit" className='mt-4 bg-slate-800 text-slate-400 px-5 py-2 rounded-md duration-300 hover:bg-slate-700 hover:text-slate-300 cursor-pointer'>Login</button>
      </form>
    </div>
  );
};

export default Login;
