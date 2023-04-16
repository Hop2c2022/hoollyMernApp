import ytIcon from '../assets/A.Tengis/youtubeicon.png';

const Footer = () => {
  return (
    <div className="bg-[#111] h-full sm:h-[6vh] justify-center sm:justify-start flex items-center w-[100vw] text-[#fff] mt-[0.2vh] flex-col sm:flex-row">
      <div className="ml-[5vw] sm:w-full">
        <p className="text-[8px] md:text-[13px] mt-[0.5vh] sm:mt-0">
          Copyright © 2023 by Khash-Erdene, Tengis, Bilguun, Uchral. All Rigths Reserved.
        </p>
      </div>
      <div className="gap-x-2 flex w-full sm:justify-end items-center justify-center mr-[5vw]">
        <a
          href="https://www.facebook.com/pinecone.academy.mongolia"
          target="_blank
      "
          className="flex justify-end cursor-pointer"
        >
          <img
            src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png"
            alt=""
            width={'40px'}
          />
        </a>
        <a
          href="https://twitter.com/PineconeAcademy"
          target="_blank
      "
          className="flex justify-end cursor-pointer"
        >
          <img
            src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"
            alt=""
            width={'28px'}
          />
        </a>
        <a
          href="https://www.instagram.com/pineconemongolia/"
          target="_blank
      "
          className="flex justify-end cursor-pointer"
        >
          <img
            src="https://freepngimg.com/download/logo/69813-instagram-logo-computer-royalty-free-icons-free-download-png-hq.png"
            alt=""
            width={'45px'}
          />
        </a>
        <a
          href="https://www.youtube.com/@PineconeAcademy"
          target="_blank
      "
          className="flex justify-end cursor-pointer"
        >
          <img src={ytIcon} alt="" width={'31px'} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
