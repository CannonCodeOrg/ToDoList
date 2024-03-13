import React from "react";

const Login = () => {
  return (
    <div className="text-center mg-200 text-white">
      <form className="text-black mt-12">
        <input type="text" id="login" name="login" placeholder="Login"></input>
        <br />
        <input className="mt-4"type="password" id="password" name="password" placeholder="Password"></input>
        <br />
        <button type="submit" className='mt-4 hover:bg-slate-800 hover:text-slate-200 px-5 py-2 rounded-md duration-300 bg-slate-500 text-slate-100 cursor-pointer'>Login</button>
      </form>
    </div>
  );
};

export default Login;
