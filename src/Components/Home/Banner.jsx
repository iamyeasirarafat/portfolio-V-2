const HomeBanner = () => {
  return (
    <div className="flex mx-auto w-full justify-around mt-36 mb-48">
      <div className="">
        <div className="flex items-center gap-[10px]">
          <div className="w-10 h-1 bg-primary"></div>
          <p className="text-3xl font-medium text-primary">Hello</p>
        </div>
        <h2
          style={{ color: "white" }}
          className=" mt-5 uppercase text-[90px] leading-[120%]  font-bold"
        >
          I&#8217;m yeasir arafat{" "}
        </h2>
        <h6 className="text-3xl text-secondary mt-8">Frontend Developer</h6>
        <div className="flex mt-14 gap-7 items-center">
          <button className="py-4 px-12 rounded-xl text-primary text-lg font-medium border-2 border-primary ">
            Hire Me
          </button>
          <a className="flex gap-1 items-center border-b-2 text-primary text-lg" href="#">Download CV <DownloadIcon/></a>
        </div>
      </div>
      <div className="h-[555px] w-[495px]">
        <img
          className="w-full rounded-tl-[80px] rounded-bl-[80px]"
          src="BannerPic.png"
        />
      </div>
    </div>
  );
};
export default HomeBanner;

// svg
const DownloadIcon = () => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.87695 9.91016C7.89157 9.92883 7.91024 9.94394 7.93156 9.95432C7.95288 9.96471 7.97629 9.97011 8 9.97011C8.02371 9.97011 8.04712 9.96471 8.06844 9.95432C8.08976 9.94394 8.10843 9.92883 8.12305 9.91016L10.3105 7.14258C10.3906 7.04102 10.3184 6.89062 10.1875 6.89062H8.74023V0.28125C8.74023 0.195312 8.66992 0.125 8.58398 0.125H7.41211C7.32617 0.125 7.25586 0.195312 7.25586 0.28125V6.88867H5.8125C5.68164 6.88867 5.60938 7.03906 5.68945 7.14062L7.87695 9.91016ZM15.1484 9.22656H13.9766C13.8906 9.22656 13.8203 9.29688 13.8203 9.38281V12.3906H2.17969V9.38281C2.17969 9.29688 2.10938 9.22656 2.02344 9.22656H0.851562C0.765625 9.22656 0.695312 9.29688 0.695312 9.38281V13.25C0.695312 13.5957 0.974609 13.875 1.32031 13.875H14.6797C15.0254 13.875 15.3047 13.5957 15.3047 13.25V9.38281C15.3047 9.29688 15.2344 9.22656 15.1484 9.22656Z"
        fill="#EB4A4A"
      />
    </svg>
  );
};
