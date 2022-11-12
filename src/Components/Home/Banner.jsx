import { DownloadIcon } from "../Icons";

const HomeBanner = () => {
  return (
    <div
      id="home"
      className="flex flex-col gap-12 sm:flex-row w-full sm:justify-between items-center mt-10 lg:mt-24 2xl:mt-36 mb-12 lg:mb-28 2xl:mb-48"
    >
      <div className="sm:w-3/5 w-full">
        <div className="flex items-center  gap-[10px]">
          <div className="w-6 xl:w-10 h-1 bg-primary"></div>
          <p className="2xl:text-3xl md:text-xl font-medium text-primary">
            Hello
          </p>
        </div>
        <h2 className="mt-3 lg:mt-5 uppercase sm:text-2xl text-xl  md:text-4xl lg:text-6xl xl:text-[90px] leading-[120%] text-white font-bold">
          I&#8217;m yeasir arafat
        </h2>
        <h6 className="lg:text-3xl text-xl text-secondary md:mt-5 mt-3 lg:mt-8">
          Frontend Developer
        </h6>
        <div className="flex xl:mt-14 md:mt-8 mt-4 gap-7 items-center">
          <a
            href="#"
            className="lg:py-4 py-2  hover:bg-[#171F38] duration-150 px-8 lg:px-12 rounded-xl text-primary  text-sm sm:text-base lg:text-lg font-medium border-2 border-primary "
          >
            Hire Me
          </a>
          <a
            className="flex gap-1 hover:border-b-0 duration-200 items-center border-b-2 text-primary text-sm sm:text-base lg:text-lg"
            href="#"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
      <div className="lg:h-[555px]  md:h-[300px] w-full sm:w-2/5">
        <img
          alt=""
          className="w-full h-full object-cover lg:rounded-tl-[80px] rounded-tl-3xl rounded-bl-3xl lg:rounded-bl-[80px]"
          src="BannerPic.png"
        />
      </div>
    </div>
  );
};
export default HomeBanner;
