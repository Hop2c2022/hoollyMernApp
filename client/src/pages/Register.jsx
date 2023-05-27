import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pineconeBg from '../assets/Khash-Erdene/pineconebg.jpg';

const Register = () => {
  const navigate = useNavigate();
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

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
        const res = await axios.post('https://hoolly-mern-app.vercel.app/auth/register', {
          name: name,
          password: pw,
          email: email,
          profileImg: picture,
        });
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
    <div className="bg-[#111] ">
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
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create account</h1>

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mt-4">
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
                onClick={reg}
              >
                Register
              </button>
            </form>

            <div className=" flex gap-x-2 mt-8">
              Already have an account?
              <Link to="/login">
                <p className="text-blue-500 hover:text-blue-700 font-semibold">Login</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
