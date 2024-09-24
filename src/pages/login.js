const Login = () => {
  return (
    <>
      <label htmlFor="username" className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Username
        </span>
        <input
          id="username"
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        />
      </label>
      <label htmlFor="password" className="block mt-2">
        <span className="block text-sm font-medium text-slate-700">
          Password
        </span>
        <input
          id="password"
          type="text"
          className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
        />
        <p className="mt-2 text-pink-600 text-sm">
          Please provide a valid email address.
        </p>
      </label>
      <button className="mt-2 px-5 py-2 text-sm leading-5 bg-sky-500 hover:bg-sky-700 text-white rounded-md font-semibold">
        Login
      </button>
    </>
  );
};
export default Login;
