import pineconeLogo from '../assets/pineconeLogo.svg';

const Contact = () => {
  return (
    <div className=" flex items-center justify-center bg-[#111]">
      <section className=" text-gray-800  lg:h-[93vh] md:h-[110vh] sm:h-[140vh] h-[150vh] w-[100vw] flex justify-center items-center">
        <div className="p-[20px] block  rounded-lg shadow-lg bg-white lg:w-[80vw] w-[95vw]">
          <div className=" flex flex-wrap items-center justify-center">
            <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
              <div className="h-[500px] w-full">
                <iframe
                  src="https://maps.google.com/maps?q=gurvan gol&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="h-[500px] left-0 top-0  w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="flex flex-wrap pt-12 lg:pt-0">
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="p-4  rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <img src={pineconeLogo} alt="" />
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">Social support</p>
                      <p className="text-gray-500">social@pinecone.mn</p>
                      <p className="text-gray-500">+976 7270 0800</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <img src={pineconeLogo} alt="" />
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">Sales questions</p>
                      <p className="text-gray-500">sales@pinecone.mn</p>
                      <p className="text-gray-500">+976 7270 0800</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                  <div className="flex align-start">
                    <div className="shrink-0">
                      <div className="p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <img src={pineconeLogo} alt="" />
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">Location</p>
                      <p className="text-gray-500">
                        СБД, 1-р хороо, Чингисийн өргөн чөлөө, Гурван гол оффис центр 3 давхар 14240 Ulaanbaatar,
                        Mongolia.
                      </p>
                      <p className="text-gray-500">hr@pinecone.mn</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                  <div className="flex align-start">
                    <div className="shrink-0">
                      <div className="p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <img src={pineconeLogo} alt="" />
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">Bug report</p>
                      <p className="text-gray-500">info@pinecone.mn</p>
                      <p className="text-gray-500">+976 7270 0800</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
