import mockupImg from "../assets/images/image-mockups.png";
import RequestBtn from "./RequestBtn";

const Hero = () => {
  return (
    <section className="bg-VeryLightGray xl:pl-32 pb-24 xl:pb-0">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:h-96 xl:h-hero 2xl:w-2xl 2xl:mx-auto">
        <div className="flex flex-col items-center px-6 xl:px-0 xl:items-start lg:w-hero lg:gap-8">
          <h1 className="text-DarkBlue font-light text-4xl2 leading-tight text-center mb-4 xl:text-left xl:text-6xl xl:leading-hero">
            Next generation digital banking
          </h1>
          <p className="text-GrayishBlue text-center mb-8 lg:text-base xl:text-lg xl:text-left">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <RequestBtn />
        </div>
        <div className="hero-bg">
          <div className="absolute -top-29 lg:-top-20 xl:-top-29 px-4 xl:px-0 lg:-right-24 xl:-right-30">
            <img src={mockupImg} alt="" className="lg:w-prLg xl:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
