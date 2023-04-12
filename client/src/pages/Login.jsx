import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import emailicon from '../assets/A.Tengis/emailicon.png';
import lock from '../assets/A.Tengis/Lock.png';
import googleicon from '../assets/A.Tengis/googleicon.png';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const log = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8000/auth/login', {
      email: email,
      password: pw,
    });
    if (res?.status === 200) {
      alert('Successfully logged in!');
      navigate('/');
    }
  };

  return (
    <div className="relative flex flex-col justify-center overflow-hidden h-[87.9vh] bg-[#111]">
      <div className=" p-8 w-3/5 m-auto bg-white shadow-xl max-w-md shadow-orange-100">
        <h1 className="text-2xl font-semibold pt-3">Sign In</h1>
        <form className="mt-6">
          <div className="mb-2">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img src={emailicon} alt="emailicon" />
              </div>

              <input
                type="email"
                className="bg-white border border-gray-300 text-black text-sm focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5 "
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-2 mt-5">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img src={lock} alt="lockicon" />
              </div>

              <input
                type="password"
                className="bg-white border border-gray-300 text-black text-sm focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5 "
                placeholder="Password"
                onChange={(e) => setPw(e.target.value)}
              />
            </div>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="scales" name="scales" className="accent-orange-500 mr-2" />
            <label htmlFor="scales">Remember me?</label>
          </div>
          <div className="mt-6 flex justify-center pt-3">
            <button
              onClick={log}
              className="w-screen px-5 py-3 tracking-wide text-white font-semibold transition-colors duration-200 transform bg-orange-400 rounded-md hover:bg-orange-600 focus:outline-none"
            >
              Log In
            </button>
          </div>
          <p className="mt-3 flex text-sm mb-8 font-light text-end justify-end text-gray-700">
            <Link to="/forgotpass" className=" text-gray-400 hover:underline">
              Forgot password?
            </Link>
          </p>
        </form>

        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold ">OR</p>
        </div>

        <div className="flex mt-5 gap-y-3 flex-col">
          <button
            type="button"
            className="flex items-center w-full p-3 border border-gray-300  focus:ring-2 focus:ring-offset-1 focus:ring-gray-200"
          >
            <img src={googleicon} alt="googleicon" />
            <p className="mr-auto ml-auto"> Sign In with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
