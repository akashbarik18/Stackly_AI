// import React from 'react'

// export default function StepsHome() {
//   return (
// <section className="w-full pb-20 px-5 ">
//     <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
//       <h1 className=" w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
//         <span className="text-[#007B82]">SIMPLIFY DESIGN </span>WITH{" "}
//         <span className="text-[#007B82]">STACKLYAI</span>
//       </h1>
//       <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
//         3 Easy Steps to Get Started
//       </p>
//     </div>

//     <div className="step1">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
//         style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
//           Step 1:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//         <span className="text-[#007B82]"> Upload </span>a photo of your room,
//         home, or outdoor space.
//       </p>
//     </div>
//     <div className="step2 flex flex-col items-center">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
//         style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
//           Step 2:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//         <span className="text-[#007B82]"> Personalize your experience </span>—
//         choose the room type, adjust AI creativity, add special
//         instructions, and select your favorite design style
//       </p>
//     </div>

//     <div className="step3 flex flex-col items-end">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
//         style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
//           Step 3:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//         <span className="text-[#007B82]">Generate</span> stunning new decor and
//         design concepts in under 25 seconds.
//       </p>
//     </div>
//   </section>

//     <section className="w-full pb-20 px-5">
//   {/* Header Section */}
//   <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
//     <h1 className="w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
//       <span className="text-[#007B82]">SIMPLIFY DESIGN </span>
//       WITH <span className="text-[#007B82]">STACKLYAI</span>
//     </h1>
//     <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
//       3 Easy Steps to Get Started
//     </p>
//   </div>

//   {/* Steps Row */}
//   <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-10 flex-wrap">
//     {/* Step 1 */}
//     <div className="flex flex-col items-center">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//         style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//           Step 1:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//         <span className="text-[#007B82]">Upload</span> a photo of your room,
//         home, or outdoor space.
//       </p>
//     </div>

//     {/* Step 2 */}
//     <div className="flex flex-col items-center">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//         style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//           Step 2:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//         <span className="text-[#007B82]">Personalize your experience</span> —
//         choose the room type, adjust AI creativity, add special instructions, and select your favorite design style
//       </p>
//     </div>

//     {/* Step 3 */}
//     <div className="flex flex-col items-center">
//       <div
//         className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//         style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//       >
//         <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//           Step 3:
//         </div>
//       </div>
//       <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//         <span className="text-[#007B82]">Generate</span> stunning new decor and
//         design concepts in under 25 seconds.
//       </p>
//     </div>
//   </div>
// </section>

//     <section className="w-full pb-20 px-5">
//   <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
//     <h1 className="w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
//       <span className="text-[#007B82]">SIMPLIFY DESIGN </span>WITH{' '}
//       <span className="text-[#007B82]">STACKLYAI</span>
//     </h1>
//     <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
//       3 Easy Steps to Get Started
//     </p>
//   </div>

//   {/* Steps Container */}
//   <div className="flex flex-row flex-wrap justify-center items-start gap-8 mt-16">
//     <SlideInView direction="left" delay={0.2}>
//       <div className="flex flex-col items-center">
//         <div
//           className="w-[450px] min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-lg" // Increased width and added border radius
//           style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//         >
//           <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold text-white rounded-[60px]">
//             Step 1:
//           </div>
//         </div>
//         <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//           <span className="text-[#007B82]">Upload</span> a photo of your room,
//           home, or outdoor space.
//         </p>
//       </div>
//     </SlideInView>

//     <SlideInView direction="bottom" delay={0.4}>
//       <div className="flex flex-col items-center">
//         <div
//           className="w-[450px] min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-lg" // Increased width and added border radius
//           style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
//         >
//           <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold text-white rounded-[60px]">
//             Step 2:
//           </div>
//         </div>
//         <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//           <span className="text-[#007B82]">Personalize your experience</span> — choose the room type, adjust AI creativity, add special instructions, and select your favorite design style.
//         </p>
//       </div>
//     </SlideInView>

//     <SlideInView direction="right" delay={0.6}>
//       <div className="flex flex-col items-center">
//         <div
//           className="w-[450px] min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-lg" // Increased width and added border radius
//           style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//         >
//           <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold text-white rounded-[60px]">
//             Step 3:
//           </div>
//         </div>
//         <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
//           <span className="text-[#007B82]">Generate</span> stunning new décor and design concepts in under 25 seconds.
//         </p>
//       </div>
//     </SlideInView>
//   </div>
// </section>
//   )
// }
// import React from "react";
// import SlideInView from "../../components/SlideInView.jsx";

// export default function StepsHome() {
//   return (
//     <section className="w-full h-auto pb-20 px-5 mt-5">
//       {/* Header Section */}
//       <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
//         <h1 className="w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
//           <span className="text-[#007B82]">SIMPLIFY DESIGN </span>
//           WITH <span className="text-[#007B82]">STACKLYAI</span>
//         </h1>
//         <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
//           3 Easy Steps to Get Started
//         </p>
//       </div>

//       {/* Steps Row */}
//       <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-10 flex-wrap">
//         {/* Step 1 */}
//         <SlideInView delay={0}>
//           <div className="flex flex-col items-center">
//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//               style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//                 Step 1:
//               </div>
//             </div>
//             <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//               <span className="text-[#007B82]">Upload</span> a photo of your
//               room, home, or outdoor space.
//             </p>
//           </div>
//         </SlideInView>

//         {/* Step 2 */}
//         <SlideInView delay={0.3}>
//           <div className="flex flex-col items-center">
//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//               style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//                 Step 2:
//               </div>
//             </div>
//             <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//               <span className="text-[#007B82]">
//                 Personalize your experience
//               </span>{" "}
//               — choose the room type, adjust AI creativity, add special
//               instructions, and select your favorite design style
//             </p>
//           </div>
//         </SlideInView>

//         {/* Step 3 */}
//         <SlideInView delay={0.6}>
//           <div className="flex flex-col items-center">
//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]"
//               style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px]">
//                 Step 3:
//               </div>
//             </div>
//             <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5">
//               <span className="text-[#007B82]">Generate</span> stunning new
//               decor and design concepts in under 25 seconds.
//             </p>
//           </div>
//         </SlideInView>
//       </div>
//     </section>
//   );
// }
// import React from "react";
// import SlideInView from "../../components/SlideInView.jsx";

// export default function StepsHome() {
//   return (
//    <section className="w-full h-auto pb-20 px-5 mt-5 
//   max-[440px]:w-[440px] max-[440px]:h-[585px] 
//   max-[440px]:flex max-[440px]:flex-col 
//   max-[440px]:pt-[40px] max-[440px]:px-[20px] max-[440px]:pb-[40px] max-[440px]:gap-[45px]">

//       {/* Header Section */}
//     <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5 
//   max-[440px]:w-[400px] max-[440px]:h-[53px] max-[440px]:gap-[16px] 
//   max-[440px]:mt-[-132px]">

//        <h1 className="w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black 
//   max-[440px]:w-[400px] max-[440px]:h-[22px] 
//   max-[440px]:font-['Inter'] max-[440px]:font-semibold 
//   max-[440px]:text-[18px] max-[440px]:leading-[100%] 
//   max-[440px]:tracking-[0] max-[440px]:text-center">
//   <span className="text-[#007B82]">SIMPLIFY DESIGN </span>
//   WITH <span className="text-[#007B82]">STACKLYAI</span>
// </h1>

//       <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A] 
//   max-[440px]:w-[400px] max-[440px]:h-[17px] 
//   max-[440px]:font-['Inter'] max-[440px]:font-normal 
//   max-[440px]:text-[14px] max-[440px]:leading-[100%] 
//   max-[440px]:tracking-[0] max-[440px]:text-center 
//   max-[440px]:mt-[-33px]">
//   3 Easy Steps to Get Started
// </p>


//       </div>

//       {/* Steps Row */}
//       <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-10 flex-wrap 
//   max-[440px]:flex-row max-[440px]:w-[400px] max-[440px]:h-[237px] 
//   max-[440px]:justify-between max-[440px]:px-[4px] max-[440px]:gap-[8px] 
//   max-[440px]:mt-[-120px]">


//         {/* Step 1 */}
//         <SlideInView delay={0}>
//          <div className="flex flex-col items-center 
//   max-[440px]:flex-col max-[440px]:w-[120px] max-[440px]:h-[169px] max-[440px]:gap-[28px]">

//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]
//   max-[440px]:w-[120px] max-[440px]:h-[90px] max-[440px]:rounded-[4px]"
// style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px] max-[440px]:hidden">
//   Step 1:
// </div>

//             </div>
//            <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5
//   max-[440px]:w-[120px] max-[440px]:h-[51px]
//   max-[440px]:font-['Inter'] max-[440px]:font-normal
//   max-[440px]:text-[12px] max-[440px]:leading-[140%]
//   max-[440px]:tracking-[0] max-[440px]:text-center">
//   <span className="text-[#007B82]">Upload</span> a photo of your
//   room, home, or outdoor space.
// </p>

//           </div>
//         </SlideInView>

//         {/* Step 2 */}
//         <SlideInView delay={0.3}>
//          <div className="flex flex-col items-center
//   max-[440px]:flex-col max-[440px]:w-[134px] max-[440px]:h-auto
//   max-[440px]:gap-[28px]">

//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]
//   max-[440px]:w-[120px] max-[440px]:h-[90px] max-[440px]:rounded-[4px]"
// style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}

//             >
//               <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px] max-[440px]:hidden">
//   Step 2:
// </div>

//             </div>
//             <p
//   className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5
//     max-[440px]:w-[134px] max-[440px]:h-[119px] 
//     max-[440px]:text-[12px] max-[440px]:leading-[140%] 
//     max-[440px]:font-['Inter'] max-[440px]:font-normal 
//     max-[440px]:tracking-[0] max-[440px]:text-center"
// >
//   <span className="text-[#007B82]">
//     Personalize your experience
//   </span>{" "}
//   — choose the room type, adjust AI creativity, add special
//   instructions, and select your favorite design style
// </p>

//           </div>
//         </SlideInView>

//         {/* Step 3 */}
//         <SlideInView delay={0.6}>
//           <div
//   className="flex flex-col items-center
//     max-[440px]:flex-col 
//     max-[440px]:w-[120px] 
//     max-[440px]:h-[186px] 
//     max-[440px]:gap-[28px]"
// >

//             <div
//               className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5 rounded-[12px]
//   max-[440px]:w-[120px] max-[440px]:h-[90px] max-[440px]:rounded-[4px]"
// style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
//             >
//              <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-white rounded-[60px] max-[440px]:hidden">
//   Step 3:
// </div>

//             </div>
//            <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 
//   max-[440px]:w-[120px] max-[440px]:h-[68px] 
//   max-[440px]:text-[12px] max-[440px]:leading-[140%] 
//   max-[440px]:tracking-[0] max-[440px]:font-normal max-[440px]:text-center font-['Inter']">
//   <span className="text-[#007B82]">Generate</span> stunning new
//   decor and design concepts in under 25 seconds.
// </p>

//           </div>
//         </SlideInView>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import SlideInView from "../../components/SlideInView.jsx";
import Frame from "../../assets/home/Frame.png";
import step1 from "../../assets/home/sec7/step1.png";
import step2 from "../../assets/home/sec7/step2.png";
import step3 from "../../assets/home/sec7/step3.png";
import stepbg from "../../assets/home/sec7/sectionBg.png";

export default function StepsHome() {
  return (
<section
  className="w-full h-[777px] opacity-100 pt-[60px] pb-[60px] gap-[53px] bg-cover bg-center relative overflow-hidden"
  style={{ backgroundImage: `url(${stepbg})` }}
>
  {/* Floating decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white/10 backdrop-blur-sm"
        style={{
          width: `${Math.random() * 20 + 10}px`,
          height: `${Math.random() * 20 + 10}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, (Math.random() - 0.5) * 100],
          x: [0, (Math.random() - 0.5) * 50],
          opacity: [0.7, 0.3, 0.7],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    ))}
  </div>

  <div className="w-full h-[657px] opacity-100 gap-[65px] flex flex-col items-center mx-auto relative z-10">
    {/* Heading with animated underline */}
    <div className="w-[1120px] h-[81px] opacity-100 gap-[18px] text-center flex flex-col justify-center items-center relative">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[1120px] h-[41px] opacity-100 text-[32px] font-normal leading-[100%] text-center text-white lora-text"
      >
        Bringing <span className="text-[#8A38F5] lora-text relative">
          Beauty
          <motion.span 
            className="absolute bottom-[-5px] left-0 h-[2px] bg-[#8A38F5]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </span> to Every Corner
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="w-[1120px] h-[22px] opacity-100 text-[18px] font-normal leading-[100%] text-center text-white poppins-font"
      >
        Personalized design solutions that make your home truly yours
      </motion.p>
    </div>

    {/* Steps Section */}
    <div className="w-[1440px] h-[511px] opacity-100 flex flex-col justify-center items-center gap-[22px] flex-wrap max-[440px]:hidden">
      {/* Sub-heading */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-[1280px] h-[19px] opacity-100 gap-[10px] px-[80px] flex items-start"
      >
        <p className="w-full h-[19px] opacity-100 text-[16px] leading-[100%] font-normal text-left text-white poppins-font">
          Create Stunning Designs in 3 Simple Steps, Powered by{" "}
          <span className="text-[#8A38F5] relative">
            STACKLYAI
            <motion.span 
              className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-[#8A38F5]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </span>
        </p>
      </motion.div>

      {/* Step Cards */}
      <div className="w-[1440px] h-[470px] px-[80px] flex justify-between items-start">
        {[
          {
            step: "Step 1",
            title: "Upload",
            text: "Upload a photo of your room, home, or outdoor space.",
            image: step1,
          },
          {
            step: "Step 2",
            title: "Personalize your experience",
            text: "Personalize your stay! choose a room, set AI creativity, and pick your design style.",
            image: step2,
          },
          {
            step: "Step 3",
            title: "Generate",
            text: "Generate stunning new decor and design concepts in under 25 seconds.",
            image: step3,
          },
        ].map((item, index) => (
          <SlideInView key={index} delay={index * 0.3}>
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-[400px] h-[470px] rounded-[12px] overflow-hidden group"
            >
              {/* Background Image with parallax effect */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: `${Math.random() * 4 + 2}px`,
                      height: `${Math.random() * 4 + 2}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: 0.6,
                    }}
                    animate={{
                      y: [0, (Math.random() - 0.5) * 50],
                      x: [0, (Math.random() - 0.5) * 30],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Description with slide-up effect */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-[46px] left-[25px] w-[247px] text-white z-10 pointer-events-none"
              >
                <p className="font-[600] text-[16px] leading-[140%] mb-1">{item.title}</p>
                <p className="font-[400] text-[16px] leading-[140%]">{item.text}</p>
              </motion.div>

              {/* Step Badge with enhanced animation */}
              <motion.div
                className="
                  absolute inset-0 flex items-center justify-center 
                  bg-white/10 backdrop-blur-[6px] border border-white/20 shadow-lg 
                  transition-all duration-500 ease-in-out 
                  group-hover:w-auto group-hover:h-auto group-hover:px-[22px] group-hover:py-[10px]
                  group-hover:bottom-[20px] group-hover:right-[20px] group-hover:left-auto group-hover:top-auto
                  rounded-[12px] group-hover:rounded-[12px] 
                  z-20 overflow-hidden
                "
                whileHover={{ backgroundColor: "rgba(138, 56, 245, 0.3)" }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-[2px] bg-[#8A38F5]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8A38F5]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "-100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-[19.5px] h-[19.5px] border-[1.5px] border-white flex items-center justify-center rounded-full"
                >
                  <img src={Frame} alt="star" className="w-full h-full object-cover" />
                </motion.div>

                <motion.div 
                  className="ml-[10px] text-white text-[16px] font-semibold whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.step}
                </motion.div>
              </motion.div>
            </motion.div>
          </SlideInView>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}

