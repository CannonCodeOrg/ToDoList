import React from "react";

const Login = () => {
  return (
    <div className="text-center text-white p-4">
      <form>
        <input className="login-input" type="text" id="login" name="login" placeholder="Login"></input>
        <br />
        <input className="mt-4 login-input"type="password" id="password" name="password" placeholder="Password"></input>
        <br />
        <button type="submit" className='mt-4 bg-slate-800 text-slate-400 px-5 py-2 rounded-md duration-300 hover:bg-slate-700 hover:text-slate-300 cursor-pointer'>Login</button>
      </form>
    </div>
  );
};

export default Login;
