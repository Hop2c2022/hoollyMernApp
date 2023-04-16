import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import emailicon from '../assets/A.Tengis/emailicon.png';
import lock from '../assets/A.Tengis/Lock.png';
import googleicon from '../assets/A.Tengis/googleicon.png';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [passCheck, setPassCheck] = useState('password');
  const [imgCheck, setImgcheck] = useState('https://static-00.iconduck.com/assets.00/hide-icon-512x484-0ek0p0dz.png');

  const log = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/auth/login', {
        email: email,
        password: pw,
      });
      console.log(res);
      if (res?.status === 200) {
        setTimeout(function () {
          navigate('/');
          window.location.reload();
        }, 1600);
        toast.success('Succesfully login!');
        localStorage.setItem('name', res?.data?.user?.name);
        localStorage.setItem('email', res?.data?.user?.email);
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

  const pass = () => {
    if (passCheck == 'text') {
      setPassCheck('password');
      setImgcheck('https://static-00.iconduck.com/assets.00/hide-icon-512x484-0ek0p0dz.png');
    } else {
      setPassCheck('text');
      setImgcheck(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/OOjs_UI_icon_eye.svg/1200px-OOjs_UI_icon_eye.svg.png'
      );
    }
  };

  return (
    <div className="relative flex flex-col justify-center overflow-hidden h-[86.9vh] bg-[#111]">
      <div>
        <ToastContainer />
      </div>

      <div className=" p-8 w-3/5 m-auto bg-white shadow-xl max-w-md shadow-blue-100">
        <h1 className="text-2xl font-semibold pt-3">Sign In</h1>
        <form className="mt-6">
          <div className="mb-2">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img src={emailicon} alt="emailicon" />
              </div>

              <input
                type="email"
                className="bg-white border border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-2 mt-5">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 ">
                <img src={lock} alt="lockicon" />
              </div>

              <input
                type={passCheck}
                className="bg-white border border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 p-2.5 "
                placeholder="Password"
                onChange={(e) => setPw(e.target.value)}
              />
              <div className="flex absolute inset-y-0 right-0 items-center mr-3  cursor-pointer">
                <img src={imgCheck} alt="eyeicon" className="w-[20px] h-[20px]" onClick={pass} />
              </div>
            </div>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="scales" name="scales" className="accent-blue-500 mr-2" />
            <label htmlFor="scales">Remember me?</label>
          </div>
          <div className="mt-6 flex justify-center pt-3">
            <button
              onClick={log}
              className="w-screen px-5 py-3 tracking-wide text-white font-semibold transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none"
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
