import React, { useState } from 'react';
import right from '../assets/A.Tengis/rightarrow.png';
import food from '../assets/A.Tengis/food.png';
import arrowright from '../assets/A.Tengis/ArrowRight.png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

//

const CheckOut = () => {
  const chingelteidata = [
    '1r horoo',
    '2r horoo',
    '3r horoo',
    '4r horoo',
    '5r horoo',
    '6r horoo',
    '7r horoo',
    '8r horoo',
    '9r horoo',
    '10r horoo',
    '11r horoo',
    '12r horoo',
    '13r horoo',
  ];
  const Baganuurdata = [
    '1-р хороо',
    '2-р хороо',
    '3-р хороо',
    '4-р хороо',
    '5-р хороо',
    'Бага гүн',
    'Байдлаг',
    'Жаргалант',
    'Залуус хэсэг',
    'Замчин',
    'Их гүн',
    'Наран хороолол',
    'Нарийн',
    'Нарийн нуур',
    'Нугын тал',
    'Нуур хороолол',
    'Рашаант',
    'Сургалтын задгай',
    'Талын толгой',
    'Тариан булаг',
    'Тогос уул',
    'Төмөр замын хэсэг',
    'Улаан ухаа',
    'Улаан эрэг',
    'Хилчин',
    'Хуцаа',
    'Хэрлэн',
    'Үйлдвэрийн хэсэг',
  ];
  const Baynzurkhdata = [
    '1-р хороо',
    '2-р хороо',
    '3-р хороо',
    '4-р хороо',
    '5-р хороо',
    '6-р хороо',
    '7-р хороо',
    '8-р хороо',
    '9-р хороо',
    '10-р хороо',
    '11-р хороо',
    '12-р хороо',
    '12-р хороолол-1',
    '12-р хороолол-2',
    '13-р хороо',
    '13-р хороолол-2-1',
    '13-р хороолол-2-2',
    '13-р хороолол-2-3',
    '13-р хороолол-2-4',
    '13-р хороолол-2-5',
    '14-р хороо',
    '14-р хороолол-1',
    '14-р хороолол-2',
    '14-р хороолол-3',
    '14-р хороолол-4',
    '14-р хороолол-5',
    '14-р хороолол-6',
    '14-р хороолол-7',
    '15-р хороо',
    '15-р хороолол-1',
    '15-р хороолол-2',
    '15-р хороолол-3',
    '15-р хороолол-4',
    '15-р хороолол-5',
    '15-р хороолол-6',
    '16-р хороо',
    '16-р хороолол-1',
    '16-р хороолол-2',
    '17-р хороо',
    '18-р хороо',
    '19-р хороо',
    '20-р хороо',
    '21-р хороо',
    '22-р хороо',
    '23-р хороо',
    '24-р хороо',
    '25-р хороо',
    '26-р хороо',
    '27-р хороо',
    '28-р хороо',
    'Амгалан-1',
    'Амгалан-2',
    'Бага хуралдай',
    'Баян төхөм',
    'Баян төхөмийн ам',
    'Баянзүрх хайрхан уул',
    'Булгийн ам',
    'Бумбат',
    'Гүнжийн хоолой',
    'Дарь эх-1',
    'Дарь эх-2',
    'Дэндийн ам',
    'Залаатын ам',
    'Их ам',
    'Могойн дэнж',
    'Ногооны зоорь',
    'Суурьшилгүй бүс',
    'Товчоо',
    'Туулын зөрлөг',
    'Туулын хэсэг',
    'Төвийн хэсэг',
    'Төр хурах',
    'Улаан эрэг',
    'Улаанхуаран-1',
    'Улаанхуаран-2',
    'Улаанхуаран-3',
    'Улиастай',
    'Хар усан тохой',
    'Хонхор',
    'Хоршооллын хотхон-1',
    'Хоршооллын хотхон-2',
    'Хужир булан',
    'Хүрхрээ',
    'Цайз-1',
    'Цайз-2',
    'Цайз-3',
    'Чулуут',
    'Шар хад',
    'Шар хоолойн ам',
    'Шинэ суурьшил',
    'Шинэ суурьшил',
    'Эмийн ургамал',
  ];
  const Bagahangaidata = [
    '1-р хороо',
    '2-р хороо',
    'Алтгана',
    'Аэродромын хэсэг',
    'Бор үзүүр',
    'Замчин',
    'Нуур',
    'Цайдам',
    'Үйлдвэрийн хэсэг',
    'Үнэгтэй',
    'Өндөртолгой',
    'Өртөөний хэсэг',
  ];

  const Bayngoldata = [
    '2-р хороо',
    '2-р хороолол-1',
    '1-р хороо',
    '2-р хороолол-2',
    '2-р хороолол-3',
    '3-р хороо',
    '3-р хороолол-1',
    '3-р хороолол-2',
    '3-р хороолол-3',
    '3-р хороолол-4',
    '3-р хороолол-5',
    '3-р хороолол-6',
    '4-р хороо',
    '4-р хороолол-1',
    '4-р хороолол-2',
    '4-р хороолол-3',
    '4-р хороолол-4',
    '4-р хороолол-5',
    '4-р хороолол-6',
    '4-р хороолол-7',
    '4-р хороолол–8',
    '5-р хороо',
    '6-р хороо',
    '7-р хороо',
    '8-р хороо',
    '9-р хороо',
    '10-р хороо',
    '10-р хороолол-1',
    '10-р хороолол-2',
    '11-р хороо',
    '12-р хороо',
    '13-р хороо',
    '14-р хороо',
    '15-р хороо',
    '16-р хороо',
    '17-р хороо',
    '18-р хороо',
    '19-р хороо',
    '20-р хороо',
    '21-р хороо',
    '22-р хороо',
    '23-р хороо',
    'Гандан',
    'Наран-1',
    'Үйлдвэрийн баруун бүс 1-1',
    'Үйлдвэрийн баруун бүс 1-2',
    'Үйлдвэрийн баруун бүс 1-3',
    'Үйлдвэрийн баруун бүс 1-4',
    'Үйлдвэрийн төвийн бүс-1',
    'Үйлдвэрийн төвийн бүс-2',
    'Үйлдвэрийн төвийн бүс-3',
  ];

  const Sukhbaatardata = [
    '1-р хороо',
    '2-р хороо',
    '3-р хороо',
    '4-р хороо',
    '5-н буудал',
    '5-р хороо',
    '5-р хороолол-1',
    '5-р хороолол-2',
    '5-р хороолол-3',
    '5-р хороолол-4',
    '6-р хороо',
    '7-р хороо',
    '7-р хороолол-1',
    '7-р хороолол-2',
    '7-р хороолол-3',
    '8-р хороо',
    '9-р хороо',
    '10-р хороо',
    '11-р хороо',
    '11-р хороолол – 4',
    '11-р хороолол –1',
    '11-р хороолол –2',
    '11-р хороолол –3',
    '12-р хороо',
    '13-р хороо',
    '13-р хороолол-1-1',
    '13-р хороолол-1-2',
    '13-р хороолол-1-3',
    '14-р хороо',
    '15-р хороо',
    '15-р хороо 2',
    '16-р хороо',
    '17-р хороо',
    '18-р хороо',
    '19-р хороо',
    '20-р хороо',
    '100 айл -1',
    '100 айл -2',
    'Ар хустай 1-р хэсэг',
    'Ар хустай 2-р хэсэг',
    'Бага тойруу-1',
    'Бага тойруу-2',
    'Баянбулаг 1-р хэсэг',
    'Баянбулаг 2-р хэсэг',
    'Баянбулаг 3-р хэсэг',
    'Бэлх 1-р хэсэг',
    'Бэлх 2-р хэсэг',
    'Бэлх Даваатын ам',
    'Бэлх Мааньтын даваа',
    'Бэлх Цуурайт',
    'Бэлх хадат 1-р хэсэг',
    'Бэлх хадат 2-р хэсэг',
    'Гоодойн ам 1-р хэсэг',
    'Гоодойн ам 2-р хэсэг',
    'Гоодойн ам 3-р хэсэг',
    'Дамбадаржаа',
    'Дамбадаржаа-2',
    'Зуунмод-СБ',
    'Майхан толгой-СБ 1-р хэсэг',
    'Майхан толгой-СБ 2-р хэсэг',
    'Санзай 1-р хэсэг',
    'Санзай 2-р хэсэг',
    'Санзай 3-р хэсэг',
    'Санзай 4-р хэсэг',
    'Соёл амралтын хүрээлэн-1',
    'Соёл амралтын хүрээлэн-2',
    'Сэлбэ 1-р хэсэг',
    'Сэлбэ 2-р хэсэг',
    'Сэлх 1-р хэсэг',
    'Сэлх 2-р хэсэг',
    'Сэлх 3-р хэсэг',
    'Сэлх 4-р хэсэг',
    'Хандгайт 1-р хэсэг',
    'Хандгайт 2-р хэсэг',
    'Хандгайт 3-р хэсэг',
    'Хандгайтын богино 1-р хэсэг',
    'Хандгайтын богино 2-р хэсэг',
    'Хуурай мухар 1-р хэсэг',
    'Хуурай мухар 2-р хэсэг',
    'Хуурай мухар 3-р хэсэг',
    'Цолмонгийн ам 1-р хэсэг',
    'Цолмонгийн ам 2-р хэсэг',
    'Цээний хэсэг',
    'Шарга морьт 1-р хэсэг',
    'Шарга морьт 2-р хэсэг',
    'Шарга морьт 3-р хэсэг',
    'Шарга морьт 4-р хэсэг',
    'Шарга морьт 5-р хэсэг',
    'Шарга морьт 6-р хэсэг',
  ];
  const Nalaihdata = [
    '1-р хороо',
    '2-р хороо',
    '3-р хороо',
    '4-р хороо',
    '5-р хороо',
    '6-р хороо',
    '7-р хороо',
    'Tэрэлж',
    'Алтай',
    'Бадрал',
    'Баян-Уул',
    'Баянзүрх',
    'Бүс нуур',
    'Горхи эрээний ам',
    'Дугуй бургастай',
    'Дэнж',
    'Жаргалант',
    'Залуучууд',
    'Замчин',
    'Их ам',
    'Наран',
    'Нарлаг',
    'Нисэх',
    'Нисэх хотхон',
    'Онгоцотын ам',
    'Туул',
    'Тэрэлжийн бага ёл',
    'Уурхайчин',
    'Хүүшийн адаг',
    'Цагаан овооны хєндий',
    'Цайзын хэсэг',
    'Цэргийн анги',
    'Элст тохой',
    'Энгэр шанд',
    'Өвөр шанд',
    'Өлгий',
  ];
  const SonginoKhairkhanData = [
    '1-р хороо',
    '1-р хороолол-1',
    '1-р хороолол-2',
    '1-р хороолол-3',
    '2-р хороо',
    '3-р хороо',
    '4-р хороо',
    '5-р хороо',
    '6-р хороо',
    '7-р хороо',
    '8-р хороо',
    '9-р хороо',
    '10-р хороо',
    '11-р хороо',
    '12-р хороо',
    '13-р хороо',
    '14-р хороо',
    '15-р хороо',
    '16-р хороо',
    '17-р хороо',
    '18-р хороо',
    '19-р хороо',
    '20-р хороо',
    '21-р хороо',
    '21-р хороолол-1',
    '21-р хороолол-2',
    '21-р хороолол-3',
    '22-р хороо',
    '23-р хороо',
    '24-р хороо',
    '25-р хороо',
    '26-р хороо',
    '27-р хороо',
    '28-р хороо',
    '29-р хороо',
    '30-р хороо',
    '31-р хороо',
    '32-р хороо',
    '335-ын гарам',
    '347-гийн гарам',
    '361-ийн гарам',
    '369-ийн гарам',
    'Ар гүнт',
    'Аюушийн ам',
    'Баруун туруун',
    'Баянгол-1',
    'Баянголын ам-3',
    'Баянголын ам-5',
    'Баянголын ам-4',
    'Баянголын ам-6',
    'Баянголын ам-7',
    'Баянхошуу-1',
    'Баянхошуу-2',
    'Баянхошуу-2',
    'Богдын ар',
    'Бурхант',
    'Дааган толгой',
    'Дунд дүүрэн ам',
    'Жаргалант тосгон',
    'Замтын булаг',
    'Зүүн туруун',
    'Их Наран',
    'Их булаг',
    'Москва хороолол-1',
    'Москва хороолол-2',
    'Москва хороолол-3',
    'Найрамдал-1',
    'Найрамдал-2',
    'Найрамдал-3',
    'Найрамдал-4',
    'Найрамдал-5',
    'Найрамдал-6',
    'Наран',
    'Наран-2',
    'Наран-2',
    'Нарийн',
    'Нэр олгогдоогүй',
    'Нэр олгогдоогүй',
    'Нэр олгогдоогүй',
    'Нэр олгогдоогүй',
    'Орбит-1',
    'Орбит-2',
    'Орбит-3',
    'Рашаант тосгон',
    'Саалийн ам',
    'Сонсголон-1',
    'Сонсголон-2',
    'Сонсголон-3',
    'Сонсголон-4',
    'Сонсголон-5',
    'Сонсголон-6',
    'Сүүж',
    'Тахилт',
    'Тахир соёот',
    'Толгойт-1',
    'Толгойт-2',
    'Толгойт-3',
    'Толгойт-4',
    'Толгойт-5',
    'Толгойт-6',
    'Толгойтын баруун салаа',
    'Толгойтын баруун салаа-2',
    'Толгойтын зүүн салаа',
    'Толгойтын зүүн салаа-2',
    'Ханан',
    'Ханын материал-1',
    'Ханын материал-2',
    'Ханын материал-3',
    'Хотын шинэ төв',
    'Хужирын даваа',
    'Хурганы аж ахуй',
    'Хустайн ам',
    'Хүй долоон худаг',
    'Хөх асар',
    'Цагаан бургас',
    'Шар цэцэгт',
    'Шижир',
    'Шижиртийн даваа',
    'Эмээлт',
    'Өнөр хороолол',
  ];
  const KhanUulData = [
    '1-р хороо',
    '2-р хороо',
    '3-р хороо',
    '4-р хороо',
    '5-р хороо',
    '6-р хороо',
    '7-р хороо',
    '8-р хороо',
    '9-р хороо',
    '10-р хороо',
    '11-р хороо',
    '12-р хороо',
    '13-р хороо',
    '14-р хороо',
    '15-р хороо',
    '16-р хороо',
    '19-р хороолол-1',
    '19-р хороолол-2',
    '19-р хороолол-3',
    '19-р хороолол-4',
    'Биокомбинат Сонгино',
    'Биокомбинат Сонгино-2',
    'Богины ам',
    'Буянт-Ухаа',
    'Гавжийн шанд',
    'Жаргалантын ам',
    'Зайсан-1',
    'Зайсан-10',
    'Зайсан-2',
    'Зайсан-3',
    'Зайсан-4',
    'Зайсан-5',
    'Зайсан-6',
    'Зайсан-7',
    'Зайсан-8',
    'Зайсан-9',
    'Морин-2',
    'Нэр олгогдоогүй',
    'Нэр олгогдоогүй',
    'Нэр олгогодоогүй',
    'Нүхт',
    'Стадион-Оргил-1',
    'Стадион-Оргил-2',
    'Стадион-Оргил-3',
    'Хүүшийн ам',
    'Шувуун фабрик /Туул',
    'Яармаг',
    'Яармагийн урд дэнж',
    'Яармагийн урд дэнж 1',
    'Үйлдвэр 1-1',
    'Үйлдвэр 1-2',
    'Үйлдвэр 1-3',
    'Үйлдвэр 2-1',
    'Үйлдвэр 2-2',
    'Үйлдвэр 2-3',
    'Үйлдвэр 2-4',
    'Үйлдвэрийн баруун бүс-2-1',
    'Үйлдвэрийн баруун бүс-2-2',
    'Өлзийт',
  ];

  const [number, setNumber] = useState('');
  const [dist, setDist] = useState();
  const [street, setStreet] = useState('');
  const [fullInfo, setFullInfo] = useState('');
  const [qr, setQR] = useState(false);
  let [count, setCount] = useState(1);
  const [distCheck, setDistCheck] = useState([]);

  const save = async (e) => {
    if (number.length === 0) {
      toast.warning('Enter your phone number please.');
    } else if (number.length != 8) {
      toast.error('Your phone number must be 8 digits!');
    } else if (dist == '') {
      toast.warning('Choose your District please.');
    } else {
      const res = await axios.post(`http://localhost:8000/auth/orderInfo`, {
        fullInformation: fullInfo,
        district: dist,
        phoneNumber: number,
      });
      toast.success('Successfully saved!');
      e.preventDefault();
      localStorage.setItem('number', number);
      localStorage.setItem('dist', dist);
      localStorage.setItem('fullInfo', fullInfo);
    }
  };

  const rickroll = () => {
    setQR(true);
  };

  const exceptThisSymbols = ['e', 'E', '+', '-', '.'];

  useEffect(() => {
    if (dist === 'Chingeltei') {
      setDistCheck(chingelteidata);
    } else if (dist == 'Baganuur') {
      setDistCheck(Baganuurdata);
    } else if (dist == 'Bagahangai') {
      setDistCheck(Bagahangaidata);
    } else if (dist == 'Bayngol') {
      setDistCheck(Bayngoldata);
    } else if (dist == 'Baynzurkh') {
      setDistCheck(Baynzurkhdata);
    } else if (dist == 'Sukhbaatar') {
      setDistCheck(Sukhbaatardata);
    } else if (dist == 'Nalaih') {
      setDistCheck(Nalaihdata);
    } else if (dist == 'Songinhairhan') {
      setDistCheck(SonginoKhairkhanData);
    } else if (dist == 'Khanuul') {
      setDistCheck(KhanUulData);
    }
  }, [dist]);

  console.log(street);
  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center gap-x-5 gap-y-5 lg:flex-row p-8 lg:items-center lg:h-[86.7vh]  bg-[#111] text-[#fff] mt-[0.1vh] relative">
        <div>
          <ToastContainer />
        </div>
        {qr ? (
          <div class="flex flex-col justify-center absolute bg-white backdrop-filter backdrop-blur-md bg-opacity-25 w-[20vw] h-[40vh] text-center p-5 mt-2 z-40">
            <span class="text-white text-2xl font-semibold">Scan this QR for payment</span>
            <div className="flex justify-center">
              <img
                src="https://i.pinimg.com/originals/60/c1/4a/60c14a43fb4745795b3b358868517e79.png"
                alt=""
                width={'300px'}
              />
            </div>
          </div>
        ) : (
          ''
        )}

        <form>
          <h1 className="pb-5 text-[17px]">Shipping Address</h1>
          <div className="flex flex-col gap-x-9 gap-y-2 w-full lg:w-[20vw]">
            <div>
              <label htmlFor="number" className="block mb-2 text-sm font-medium " maxLength="8">
                Phone number
              </label>
              <input
                type="number"
                id="first_name"
                className="bg-black border border-gray-400 text-gray-200 text-sm w-full p-2.5 0"
                placeholder="* * * * * * *"
                required
                onKeyDown={(e) => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="company" className="block mb-2 text-sm font-medium ">
                Districts
              </label>
              <select
                onChange={(e) => setDist(e.target.value)}
                id="cities"
                className="bg-black border border-gray-400 text-gray-200 text-sm p-2.5 0 w-[100%]"
              >
                <option defaultChecked>Choose a Districts</option>
                <option value="Baganuur">Багануур дүүрэг</option>
                <option value="Bagahangai">Багахангай дүүрэг</option>
                <option value="Bayngol">Баянгол дүүрэг</option>
                <option value="Baynzurkh">Баянзүрх дүүрэг</option>
                <option value="Nalaih">Налайх дүүрэг</option>
                <option value="Songinhairhan">Сонгинохайрхан дүүрэг</option>
                <option value="Sukhbaatar">Сүхбаатар дүүрэг</option>
                <option value="Khanuul">Хан-уул дүүрэг</option>
                <option value="Chingeltei">Чингэлтэй дүүрэг</option>
              </select>
            </div>
            <div>
              <label htmlFor="company" className="block mb-2 text-sm font-medium ">
                Street
              </label>
              {dist ? (
                <select
                  onChange={(e) => setStreet(e.target.value)}
                  id="street"
                  className="bg-black border border-gray-400 text-gray-200 text-sm p-2.5 0 w-[100%]"
                >
                  {distCheck?.map((el) => {
                    return <option key={el}>{el}</option>;
                  })}
                </select>
              ) : (
                <select
                  disabled
                  id="street"
                  className="bg-black border border-gray-400 text-gray-200 text-sm p-2.5 0 w-[100%]"
                >
                  <option defaultChecked>Choose a Street</option>;
                </select>
              )}
            </div>
            <div>
              <label htmlFor="company" className="block mb-2 text-sm font-medium ">
                Full information
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-black border border-gray-400 text-gray-200 text-sm w-full p-2.5 0"
                required
                onChange={(e) => setFullInfo(e.target.value)}
              />
            </div>

            <div className="col-span-full">
              <h1>Billing Address</h1>
              <div className="checkbox">
                <input type="checkbox" id="scales" name="scales" className="accent-blue-500  hover:bg-blue-600 mr-2 " />
                <label htmlFor="scales" className="text-gray-300 text-sm">
                  Same as shipping address
                </label>
              </div>
            </div>

            <div className="flex mt-5 gap-y-3 flex-col">
              <button
                type="button"
                className="flex items-center w-full p-3 border border-gray-300 bg-blue-400  hover:bg-blue-600 font-semibold text-white justify-center"
                onClick={save}
              >
                <p> Save</p>
                <img src={right} alt="googleicon" />
              </button>
            </div>
          </div>
        </form>
        <div className="border w-full lg:h-[97%] 2xl:h-[85%] flex flex-col border-gray-400 p-5 lg:w-[25rem]">
          <div className="flex flex-col h-full justify-evenly">
            <div className="flex flex-col h-full justify-evenly">
              <div className=" gap-x-3 flex ">
                <img src={food} alt="food" className="object-cover h-[80px] w-[80px]" />
                <div className="flex justify-between w-full items-center">
                  <div>
                    <h1>Chicken Tikka Kebab</h1>
                    <h1>50$</h1>

                    <div>
                      <select
                        id="cities"
                        className="bg-black border border-gray-400 text-gray-200 text-sm 0 w-[40%] pl-2 h-[30px] rounded-lg"
                      >
                        <option defaultChecked value="1">
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                  <button className="text-[25px]">✖</button>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-300 mt-[0.7vh] mb-[0.7vh]" />
            </div>

            <div className="flex flex-col h-full justify-evenly">
              <div className=" gap-x-3 flex ">
                <img src={food} alt="food" className="object-cover h-[80px] w-[80px]" />
                <div className="flex justify-between w-full items-center">
                  <div>
                    <h1>Chicken Tikka Kebab</h1>
                    <h1>50$</h1>

                    <div>
                      <select
                        id="cities"
                        className="bg-black border border-gray-400 text-gray-200 text-sm 0 w-[40%] pl-2 h-[30px] rounded-lg"
                      >
                        <option defaultChecked value="1">
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                  <button className="text-[25px]">✖</button>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-300 mt-[0.7vh] mb-[0.7vh]" />
            </div>
            <div className="flex flex-col h-full justify-evenly">
              <div className=" gap-x-3 flex ">
                <img src={food} alt="food" className="object-cover h-[80px] w-[80px]" />
                <div className="flex justify-between w-full items-center">
                  <div>
                    <h1>Chicken Tikka Kebab</h1>
                    <h1>50$</h1>

                    <div>
                      <select
                        id="cities"
                        className="bg-black border border-gray-400 text-gray-200 text-sm 0 w-[40%] pl-2 h-[30px] rounded-lg"
                      >
                        <option defaultChecked value="1">
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                  <button className="text-[25px]">✖</button>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-300 mt-[0.7vh] mb-[0.7vh]" />
            </div>
          </div>
          <div className="flex flex-col h-[100%] justify-evenly">
            <div className="">
              <div className="flex justify-between ">
                <h1 className="text-gray-300">Sub Total</h1>
                <p>130$</p>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-300">Shipping</h1>
                <p>Free</p>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-300">Discount</h1>
                <p>25%</p>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-300">Tax</h1>
                <p>54.76$</p>
              </div>
            </div>
            <div className="h-0.5 w-full bg-gray-300 " />
            <div className="flex justify-between pt-1">
              <h1 className="text-[17px]">Total</h1>
              <p>432.65$</p>
            </div>

            <div className="flex gap-y-3 flex-col">
              <button
                type="button"
                className="flex items-center w-full p-3 border border-gray-300 bg-blue-400  hover:bg-blue-600 font-semibold text-white justify-center rounded-md gap-x-2"
                onClick={rickroll}
              >
                <p>Place an order</p>
                <img src={arrowright} alt="googleicon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
