// import React from "react";
// import logo from "../../assets/pricing-pg/logo.png"; // replace with your logo path
// import iconChat from "../../assets/pricing-pg/chat.png"; // faded background icon
// import iconNote from "../../assets/pricing-pg/pad.png"; // another background icon

// const ContactBanner = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center w-full min-h-[425px] px-4 py-20 bg-white overflow-hidden gap-[30px]">
//       {/* Background icons */}
//       <img src={iconChat} alt="" className="absolute top-[10px] left-20" />
//       <img src={iconChat} alt="" className="absolute  left-0 bottom-0" />
//       <img
//         src={iconNote}
//         alt=""
//         className="absolute right-[300px] top-[80px]"
//       />
//       {/* Logo */}
//       <img src={logo} alt="StacklyAI logo" className="w-[88.5px] h-[118px]" />

//       {/* Heading */}
//       <h2 className=" max-w-[700px] leading-[100%] text-[38px] font-semibold text-center text-[#2A2A2A]">
//         Get in touch with{" "}
//         <span className="text-[#00B0BA] font-bold">STACKLYAI</span> right now!
//       </h2>
//     </section>
//   );
// };

// export default ContactBanner;

import React from "react";
import logo from "../../assets/pricing-pg/logo.png"; // replace with your logo path
import iconChat from "../../assets/pricing-pg/chat.png"; // faded background icon
import iconNote from "../../assets/pricing-pg/pad.png"; // another background icon
import backgroundImage from "../../assets/pricing-pg/Contact us.png";
import handShake from "../../assets/pricing-pg/handShake.png";

const ContactBanner = () => {
  return (
 <section
        className="w-full min-h-[1926px] -mt-[75px] pt-[75px] flex flex-col items-center bg-no-repeat bg-top"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        transform: "rotate(0deg)",
      }}
    >
      {/* Your content goes here */}
         
    {/* Top form div - horizontally centered */}
<div class="absolute w-[668px] h-[691px] top-[171px] left-1/2 -translate-x-1/2 opacity-100 rotate-0 flex flex-col gap-[28px]">

  <div class="w-[373px] h-[120px] flex flex-col gap-[13px] mx-auto">
    
    <div class="w-[308px] h-[47px] mx-auto flex items-center justify-between">

      <div class="w-[276px] h-[47px] flex items-center">
        <p class="text-white text-[32px] leading-[100%] font-[400] font-[Poppins] whitespace-nowrap">
          Let’s Have a Chat
        </p>
      </div>

     
      <div class="w-[32px] h-[32px]">
        <img src={handShake} alt="chat icon" class="w-full h-full object-contain" />
      </div>
    </div>

    <div class="w-[373px] h-[60px] flex items-center justify-center text-center">
      <p class="text-white/80 text-[20px] leading-[100%] tracking-[0%] font-[400] font-[Poppins]">
        Curious how AI can style your space? Let’s talk.
      </p>
    </div>
  </div>


 <div class="w-full flex justify-center">
  <div class="w-[668px] h-[84px] flex gap-[26px] opacity-100 rotate-0">
    <div class="w-[321px] h-[84px] flex flex-col gap-[12px]">
      <div class="w-[321px] h-[24px]">
        <p class="text-white text-[16px] leading-[100%] font-[400] font-[Poppins]">
          First Name
        </p>
      </div>
      <input
        type="text"
        placeholder="John"
        class="w-[321px] h-[48px] border border-[#FFFFFF66] bg-white/10 rounded-[12px] px-[12px] text-[#E0E0E0EE] text-[16px] leading-[100%] font-[400] font-[Poppins] placeholder-[#E0E0E0EE] outline-none"
      />
    </div>
    <div class="w-[321px] h-[84px] flex flex-col gap-[12px]">
  <div class="w-[321px] h-[24px]">
    <p class="text-white text-[16px] leading-[100%] font-[400] font-[Poppins]">
      Last Name
    </p>
  </div>
  <input
    type="text"
    placeholder="Poul"
    class="w-[321px] h-[48px] border border-white bg-white/10 rounded-[12px] px-[12px] 
           text-[#E0E0E0EE] text-[16px] leading-[100%] font-[400] font-[Poppins] 
           placeholder-[#E0E0E0EE] outline-none"
  />
</div>

  </div>
</div>

</div>



    </section>
  );
};

export default ContactBanner;