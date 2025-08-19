import React from "react";
import center from "../../assets/afterHome/SpaceCenter.png";
import star from "../../assets/afterHome/SpaceStar.png";
import recent from "../../assets/afterHome/SpaceRecent.png";
import colorStar from "../../assets/afterHome/colorStar.png";

export default function HeroAfterProducts() {
  return (
  <section
  className="relative w-full h-[878px] bg-black opacity-100 -mt-[82px] pt-[82px] overflow-hidden"
  style={{ transform: "rotate(0deg)" }}
>
<div className="absolute top-[159px] left-[58px] flex gap-[46px] z-10">
  {["Interiors", "Exteriors", "Outdoors"].map((item) => (
    <a
      key={item}
      href="#"
      className="relative text-white font-poppins cursor-pointer hover:text-[#BD8AFF] z-10
                 after:content-[''] after:absolute after:left-0 after:bottom-0
                 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-transparent after:via-[#8A38F5] after:to-transparent
                 after:transition-all after:duration-300 hover:after:w-full"
    >
      {item}
    </a>
  ))}
</div>

 
<div 
  className="absolute w-[1255px] h-[1px] top-[196px] left-1/2 transform -translate-x-1/2 bg-[#FFFFFF80] opacity-100"
></div>

<div
  className="absolute w-[238px] h-[24px] top-[212px] left-[1060px] flex gap-[24px] opacity-100 "
>
  <div className="w-[81px] h-[24px] flex items-center gap-[8px] opacity-100">

  <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[30px] border border-[#FFFFFF33]">
    <img src={recent} alt="icon" className="w-[24px] h-[24px]" />
  </div>

 
  <div className="w-[49px] h-[21px] flex items-center">
    <span className="font-poppins font-normal text-[14px] leading-[100%] text-white">
      Recent
    </span>
  </div>
</div>

<div className="w-[133px] h-[24px] flex items-center gap-[8px] opacity-100">

<div className="w-[24px] h-[24px] flex items-center justify-center rounded-[30px]  border-[1px] border-solid border-[#FFFFFF33]">
  <img src={star} alt="icon" className="w-[16px] h-[16px]" />
</div>


  <div className="flex-1 flex items-center">
    <span className="text-white font-poppins text-[14px] leading-[100%]">
      Starred Image
    </span>
  </div>
</div>
</div>

{/* center div */}
<div className="fixed inset-0 flex items-center justify-center bg-black/50">
  <div className="w-[90%] max-w-[496px] h-auto flex flex-col items-center justify-center gap-[24px] opacity-100 rounded-lg shadow-lg bg-/70 p-6 mt-[180px]">
    
    {/* Image */}
    <div className="w-[318px] h-[318px]">
      <img
        src={center}
        alt="Preview"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

    {/* Text */}
    <div className="w-full text-center flex flex-col gap-[6px]">
      {/* Top child text */}
      <p className="text-[16px] font-poppins font-medium text-white leading-[100%]">
        This space is still empty
      </p>

      {/* Bottom child text */}
      <p className="text-[14px] font-poppins font-normal text-[#E0E0E0] leading-[120%]">
        Start creating with AI to design a home that reflects your style.
      </p>
    </div>

    {/* Button */}
    <button
      className="w-[236px] h-[44px] flex items-center justify-between gap-[10px] 
                 rounded-[30px] px-[30px] py-[10px] 
                 border border-[#C22CA299] 
                 bg-[linear-gradient(95.92deg,rgba(138,56,245,0.5)_15.32%,rgba(194,44,162,0.5)_99.87%)]
                 backdrop-blur-[6px] 
                 shadow-[0px_2px_12px_0px_#C22CA240]
                 cursor-pointer"
    >
      {/* Text */}
      <span className="text-white font-inter font-medium text-[16px] leading-[100%]">
        Start creating now
      </span>

      {/* Icon */}
      <img
        src={colorStar}
        alt="icon"
        className="w-[24px] h-[24px]"
      />
    </button>

  </div>
</div>






</section>

  );
}