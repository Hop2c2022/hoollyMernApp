import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailicon from '../assets/A.Tengis/emailicon.png';
import lock from '../assets/A.Tengis/Lock.png';
import usericon from '../assets/A.Tengis/Usericon.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const getRandomPicture = () => {
    const pictures = [
      'https://i.pinimg.com/originals/95/ca/86/95ca864bbe58c5bf773e08e5732c4642.png',
      'https://i.pinimg.com/originals/22/9a/05/229a05f9751700bd4445a6f90477dc03.png',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b1ceee5-9458-4434-80bc-fc5d83a2ea88/de5c2v5-920c634c-f136-46b3-bda4-28ead5febc2a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiMWNlZWU1LTk0NTgtNDQzNC04MGJjLWZjNWQ4M2EyZWE4OFwvZGU1YzJ2NS05MjBjNjM0Yy1mMTM2LTQ2YjMtYmRhNC0yOGVhZDVmZWJjMmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ASw-_99Hf_E4x8Sai4NoatjM-kkaEnwqORHUMUpBbVo',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b1ceee5-9458-4434-80bc-fc5d83a2ea88/de5dgez-e2724fff-b294-477b-bff3-7a33d7626211.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiMWNlZWU1LTk0NTgtNDQzNC04MGJjLWZjNWQ4M2EyZWE4OFwvZGU1ZGdlei1lMjcyNGZmZi1iMjk0LTQ3N2ItYmZmMy03YTMzZDc2MjYyMTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9dR1SuafCMq9TJz2-n3ecE2MhJo3WJggF4nhP4nMP_o',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b1ceee5-9458-4434-80bc-fc5d83a2ea88/de5fpa6-0ae9dcca-1149-43a8-843b-94fefd73e81a.png/v1/fill/w_587,h_744/among_us_character__firey_bfdi__by_unitedworldmedia_de5fpa6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzQ0IiwicGF0aCI6IlwvZlwvNGIxY2VlZTUtOTQ1OC00NDM0LTgwYmMtZmM1ZDgzYTJlYTg4XC9kZTVmcGE2LTBhZTlkY2NhLTExNDktNDNhOC04NDNiLTk0ZmVmZDczZTgxYS5wbmciLCJ3aWR0aCI6Ijw9NTg3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-POdzSiE5Mg7fms_7ZrLH44W0u8v3mDlJmOH-cnVYH4',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b1ceee5-9458-4434-80bc-fc5d83a2ea88/de5c4hu-a59e3359-f861-40ed-a0cf-c9804bb5b4e9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiMWNlZWU1LTk0NTgtNDQzNC04MGJjLWZjNWQ4M2EyZWE4OFwvZGU1YzRodS1hNTllMzM1OS1mODYxLTQwZWQtYTBjZi1jOTgwNGJiNWI0ZTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NAR5j13gZeiDfAsjrBddg53ZEvM3VzS3oqhQgHwUNMk',
      'https://mystickermania.com/cdn/stickers/among-us/among-us-hologram-character-512x512.png',
      'https://mystickermania.com/cdn/stickers/among-us/among-us-rainbow-512x512.png',
      'https://cdn.icon-icons.com/icons2/2619/PNG/256/among_us_facebook_icon_156924.png',
      'https://cdn.icon-icons.com/icons2/2619/PNG/256/among_us_twitter_icon_156932.png',
      'https://cdn.icon-icons.com/icons2/2619/PNG/256/among_us_twitch_icon_156931.png',
      'https://cdn.icon-icons.com/icons2/2619/PNG/512/among_us_discord_icon_156922.png',
    ];
    return pictures[~~(Math.random() * pictures.length)];
  };
  const picture = getRandomPicture();

  const reg = async (e) => {
    try {
      e.preventDefault();
      if (pw.length < 7) {
        toast.error('The password must be at least 8 characters');
      } else {
        const res = await axios.post('http://localhost:8000/auth/register', {
          name: name,
          password: pw,
          email: email,
          profileImg: picture,
        });
        console.log(res);
        if (res?.status === 201) {
          setTimeout(function () {
            navigate('/login');
          }, 1600);
          toast.success('Succesfully registered!');
        }
      }
    } catch (err) {
      if (err.message == 'Request failed with status code 400') {
        toast.error('User is already registered');
      } else if (name.length == 0 || name.length > 12) {
        toast.error(' Your name cannot be empty or longer than 12 letters');
      } else {
        toast.warning('Please enter your email account');
      }
    }
  };

  return (
    <div className="bg-[#111] relative flex flex-col justify-center h-[93vh] overflow-hidden ">
      <div>
        <ToastContainer />
      </div>
      <div className=" p-8 w-3/5 m-auto bg-white shadow-xl max-w-md shadow-blue-100">
        <h1 className="text-2xl font-semibold pt-3">Register</h1>
        <form className="mt-6">
          <div className="mb-2">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img src={usericon} alt="usericon" />
              </div>

              <input
                type="text"
                className="bg-white border border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-2 mt-4">
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

          <div className="mb-2 mt-4">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img src={lock} alt="lockicon" />
              </div>

              <input
                type="password"
                className="bg-white border border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="Password"
                onChange={(e) => setPw(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center pt-3">
            <button
              onClick={reg}
              className="w-screen px-5 py-3 tracking-wide text-white font-semibold transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Register
            </button>
          </div>
          <div>
            <p className="mt-3 flex text-sm mb-8 font-light text-end justify-end text-gray-700">
              <p className="font-semibold pr-1"> Already have a account?</p>

              <Link to="/login" className=" text-gray-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
