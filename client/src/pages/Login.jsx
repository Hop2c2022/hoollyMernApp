import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pineconeBg from '../assets/Khash-Erdene/pineconebg.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const log = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('hoolly-mern-api.vercel.app/login', {
        email: email,
        password: pw,
      });
      if (res?.status === 200) {
        setTimeout(function () {
          navigate('/');
          window.location.reload();
        }, 1600);
        toast.success('Succesfully login!');
        localStorage.setItem('id', res?.data?.user?._id);
      }
    } catch (err) {
      if (pw.length < 8) {
        toast.warning('Enter your Password please.');
      }
      if (email.length == 0) {
        toast.warning('Enter your Email please.');
      }
      if (email.length != 0 && pw.length > 7) {
        toast.warning('Email or password is incorrect Check it again!');
      }
    }
  };

  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-[#000] hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src={pineconeBg} alt="" className="w-full h-full object-contain" />
        </div>

        <div
          className="bg-[#FAFCFF] w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minlength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                  onChange={(e) => setPw(e.target.value)}
                />
              </div>

              <div className="text-right mt-2">
                <Link to="/forgotpass" className=" text-gray-400 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                onClick={log}
              >
                Log In
              </button>
            </form>

            <div className=" flex gap-x-2 mt-8">
              Need an account?
              <Link to="/register">
                <p className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
