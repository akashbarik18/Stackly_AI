// import React from 'react'
// import apiBackground from '../../assets/api/back.png';
// import Keys from './Keys';
// import ApiIntegrate from './ApiIntegrate';
// import Plan from './Plan';
// import ApiAccess from './ApiAccess';
// import HowItWorks from './HowItWorks';
// import CustomAPIPlan from './CustomApiPlan';
// import Draggable from './Draggable';
// import sec14Img2 from "../../assets/home/sec14/Vector.png";
// import sec14Img3 from "../../assets/home/sec14/m1.jpg";
// import sec14Img4 from "../../assets/home/sec14/m2.jpg";
// import sec14Img5 from "../../assets/home/sec14/m3.jpg";
// import ApiFaq from './ApiFaq';
// import keyImage from "../../assets/api/key.png";
// import { Link } from 'react-router-dom';



// export default function HeroApi() {

//   const faqs = [
//     {
//       question: "How do I get started with StacklyAI APIs?",
//       answer:
//         "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
//     },
//     {
//       question: "What authentication method does StacklyAI use?",
//       answer:
//         "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
//     },
//     {
//       question: "Are there any rate limits on API requests?",
//       answer:
//         "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
//     },
//     {
//       question: " What image formats do StacklyAI APIs support?",
//       answer:
//         "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
//     },
//     {
//       question: "How to handle other image formats e.g. HEIC, HEIF etc?",
//       answer:
//         "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
//     },
//     {
//       question: "What is the expiration period for my credit pack?",
//       answer:
//         "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
//     },
//   ];


//   return (
//     <div>
//       {/* section1 */}
//       <div className="relative w-full h-[536px] flex flex-col items-center justify-center bg-white-to-cyan">
//         {/* <h1 className="w-[816px] h-[128px] font-bold text-[48px] leading-[64px] text-center text-[#2a2a2a]">
//         "Transform Spaces Effortlessly with <span className="text-[#00B0BA]">StacklyAI API</span>"
//       </h1> */}
//         <h1 className="max-w-full text-[64px] font-extrabold md:text-[40px] text-[48px] leading-[72%] text-center  text-[#2a2a2a]">
//           Transform Spaces Effortlessly with{" "}
//           <span className="text-[#00B0BA]">StacklyAI API</span>
//         </h1>
//         {/* <p className="w-[672px] h-[56px] font-[400] text-[18px] leading-[72px] text-center text-[#b0b0b0] mt-4">
//         Explore limitless possibilities to redesign and enhance any home interior, exterior, or outdoor space — all through powerful AI integration.
//       </p> */}
//         <p className="w-[672px] h-[56px] font-extrabold font-[400] text-[20px] leading-[28px] text-center text-[#b0b0b0] mt-4">
//           <span className="text-[#00B0BA]">
//             Get Instant API Access for your AI Design Platform
//           </span>
//         </p>
//         <Link to="/Sign-in">
//           {" "}
//           <button className="w-[306px] h-[45px] mt-8 rounded-[6px] border-[1px] border-solid border-transparent bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-white font-semibold text-[18px] leading-[100%]">
//             Let’s Connect!
//           </button>
//         </Link>
//         {/* Positioned Illustration at Bottom Left */}
//         <img
//           src={keyImage}
//           alt="API Key Illustration"
//           className="absolute bottom-[40px] right-[80px] w-[330px] h-auto object-contain "
//         />
//       </div>

//       {/* section-2  */}

//       {/* //<div className="relative w-full h-[848px] flex items-center justify-center bg-black"> */}
//       <div className="relative w-full h-[709px] flex items-center justify-center bg-[#011213]">
//         {/* Background API Image */}
//         <img
//           src={apiBackground}
//           alt="API Background"
//           className="absolute w-[1150.91px] h-[848px] p-[34px] opacity-60"
//         />

//         {/* Text Content */}
//         <div className="relative z-10 w-[1172px] h-[242px] flex flex-col items-center justify-center text-white text-center">
//           <h2 className="w-[816px] h-[64px] font-semibold text-[48px] leading-[64px]">
//             What Is StacklyAI API?
//           </h2>
//           <p className="w-[1172px] h-[113px] font-[400] text-[28px] leading-[36px] mt-4">
//             StacklyAI API allows developers, platforms, and businesses to
//             generate high-quality AI-
//             <br />
//             rendered images from user-submitted photos. Whether it's a room
//             makeover,
//             <br /> architectural facade, or outdoor setting — the API delivers
//             instant visual
//             <br /> transformations, directly into your product.
//           </p>
//         </div>
//       </div>

//       {/* section-3  */}

//       {/* <Keys /> */}

//       {/* section 4  */}

//       <ApiIntegrate />

//       {/* section-5  */}

//       {/* <Plan /> */}

//       {/* section-6  */}

//       {/* <ApiAccess /> */}

//       {/* section-7  */}

//       {/* <HowItWorks /> */}

//       {/* section-8  */}

//       <CustomAPIPlan />

//       {/* section-9  */}

//       {/* <div className='w-full flex justify-center'>
//  <div className='w-[1280px] h-[1049px] rounded-[40px] bg-[white] shadow-[#00000040] shadow-[0_0_4px_0] flex flex-col justify-center items-center'>
//       <h2 className="w-full max-w-[743px] min-h-[64px] text-[44px] leading-[64px] font-bold text-center">
//         Ready to <span className="text-[#009A98]">Create Something Great?</span>
//       </h2>
//       <p className=" w-full max-w-[770px] min-h-[56px] text-[18px] font-[400] leading-[28px] text-center text-[#2A2A2A] my-8">
//         We offer flexible API plans tailored to your needs.<br />
//         Let’s build the right setup—just for you.
//       </p>
//     <div className="w-[730px] h-[721px] rounded-[10px] border-[1px] border-[#007B8214] border-solid p-[50px] gap-[10px] bg-[#ffffff] shadow-[#ABB2BB40] shadow-[0_0_12px_0] flex justify-center items-center">
//       <form className="space-y-8">
//         <div className="flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Ram"
//             className="flex-1 border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//           />
//           <input
//             type="email"
//             placeholder="ramprakash@example.com"
//             className="flex-1 border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//           />
//         </div>
//         <div className="flex flex-col md:flex-row gap-4">
//           <input
//             type="tel"
//             placeholder="+9 0123456789"
//             className="flex-1 border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//           />
//           <div className="flex-1 flex items-center border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 ">
//             <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="" />
//             <span className="text-gray-500"></span>
//           </div>
//         </div>
//         <input
//           type="text"
//           placeholder="Companyexample"
//           className="w-full border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <input
//           type="text"
//           placeholder="Address*"
//           className="w-full border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <textarea
//           placeholder="Your message..."
//           rows="4"
//           className="w-full border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-2 rounded hover:opacity-90 transition"
//         >
//           Let's Connect!
//         </button>
//       </form>
//     </div>

//   </div>

//  </div> */}

//       {/* {section-10} */}
//       {/* <section className="w-full py-16 px-4 flex flex-col justify-center items-center mt-20">
//         <h2 className="text-[48px] md:text-5xl font-semibold text-center text-gray-800 leading-[140%]">
//           Discover Our{" "}
//           <span className="text-[#007B82]">Advanced AI Interior Tools</span> and
//           Redesign
//         </h2>
//         <h2 className="text-[48px] md:text-5xl font-semibold text-center text-[black] mt-3">
//           Your Space Instantly
//         </h2>
//       </section> */}

//       <div className="relative w-full h-[709px] flex items-center justify-center bg-[white]">
//         {/* Background API Image */}
//         <img
//           src={apiBackground}
//           alt="API Background"
//           className="absolute w-[1150.91px] h-[848px] p-[34px] opacity-60"
//         />

//         {/* Text Content */}
//         <div className="relative z-10 w-[1172px] h-[242px] flex flex-col items-center justify-center text-black text-center -mt-40">
//           <h2 className="w-[816px] h-[64px] font-semibold text-[48px] leading-[64px]">
//             Ready to{" "}
//             <span className="text-[#00B0BA]">Create Something Great?</span>
//           </h2>
//           <p className="w-[1280px] h-[199px] font-[400] text-[28px] leading-[36px] mt-4">
//             We offer flexible API plans tailored to your needs.
//             <br />
//             Let’s build the right setup—just for you.
//           </p>
//           <Link to="/Sign-in">
//             {" "}
//             <button className="w-[800px] h-[70px] mt-[80] rounded-[6px] border border-transparent bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-white font-semibold text-[18px] leading-[100%] ">
//               Let’s Connect!
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* section-11  */}

//       <Draggable />

//       {/* section-12  */}

//       {/* <section
//          className="relative w-full  absolute-0  bg-cover bg-center bg-no-repeat"
//          style={{ backgroundImage: "url('./src/assets/home/sec14/bg1.jpg')" }}
//        >
//          <div className="py-20 px-6 bg-[#00000096]">
//            <div className="flex flex-col items-center text-center text-white">
//              <h2 className="text-[48px] md:text-5xl leading-[140%] text-center font-bold mb-4">
//                <span className="text-6xl font-bold">“</span> Meet Our Members{" "}
//                <span className="text-6xl font-bold">”</span>
//              </h2>
//              <p className="max-w-[630px] min-h-[78px] text-[28px] leading-[140%] text-center md:text-xl text-gray-300 mb-8">
//                You're in good company with{" "}
//                <span className="text-cyan-400  font-semibold">Stackly AI</span>,
//                trusted by people in all 195 countries.
//              </p> */}
//       {/* Center logo */}
//       {/* <div className="mb-16">
//                <div className="bg-[#FFFFFF1F] rounded-full p-8 shadow-lg">
//                  <img src={sec14Img2} alt="Center Icon" className="w-12 h-12" />
//                </div>
//              </div> */}

//       {/* Member Cards */}
//       {/* <div className="w-[100vw] flex justify-center item-center flex-wrap gap-10"> */}
//       {/* Card 1 */}
//       {/* <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
//                  <div className="min-w-[413px] h-full flex justify-around items-center">
//                    <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1 ">
//                      <h3 className="text-black text-[22px] font-medium leading-[140%] ">Guru Ragav Auditor</h3>
//                      <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">Auditor</p>
//                    </div>
//                    <img
//                      src={sec14Img3}
//                      alt="Member 1"
//                      className="w-20 h-20 rounded-full object-cover"
//                    />
//                  </div>
//                  <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
//                    “I use Stackly AI to help my clients visualize how their
//                    backyard could look like if they hire me for the job. It works
//                    flawlessly!”
//                  </p>
//                </div> */}

//       {/* Card 2 */}
//       {/* <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
//                  <div className="min-w-[413px] h-full flex justify-around items-center">
//                    <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
//                      <h3 className="text-black text-[22px] font-medium leading-[140%]">Cristian Rama</h3>
//                      <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">Architect</p>
//                    </div>
//                    <img
//                      src={sec14Img4}
//                      alt="Member 2"
//                      className="w-20 h-20 rounded-full object-cover"
//                    />
//                  </div>
//                  <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
//                    “I needed to replace my living room furniture so I generated a
//                    few design ideas with Stackly AI. Awesome technology!”
//                  </p>
//                </div> */}

//       {/* Card 3 */}
//       {/* <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
//                  <div className="min-w-[413px] h-full flex justify-around items-center">
//                    <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
//                      <h3 className="text-black text-[22px] font-medium leading-[140%]">Ram Krishnan</h3>
//                      <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">Architect</p>
//                    </div>
//                    <img
//                      src={sec14Img5}
//                      alt="Member 3"
//                      className="w-20 h-20 rounded-full object-cover"
//                    />
//                  </div>
//                  <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
//                    “I run a real estate agency and my clients send me pictures
//                    with their empty properties. I use Stackly AI to furnish them
//                    automatically!”
//                  </p>
//                </div>
//              </div>
//            </div>
//          </div>
//        </section> */}

//       {/* section-14  */}

//       <ApiFaq faqs={faqs} />
//     </div>
//   );
// }
// import React from 'react'
// import apiBackground from '../../assets/api/back.png';
// import Keys from './Keys';
// import ApiIntegrate from './ApiIntegrate';
// import Plan from './Plan';
// import ApiAccess from './ApiAccess';
// import HowItWorks from './HowItWorks';
// import CustomAPIPlan from './CustomApiPlan';
// import Draggable from './Draggable';
// import sec14Img2 from "../../assets/home/sec14/Vector.png";
// import sec14Img3 from "../../assets/home/sec14/m1.jpg";
// import sec14Img4 from "../../assets/home/sec14/m2.jpg";
// import sec14Img5 from "../../assets/home/sec14/m3.jpg";
// import ApiFaq from './ApiFaq';
// import keyImage from "../../assets/api/key.png";
// import { Link } from 'react-router-dom';



// export default function HeroApi() {

//   const faqs = [
//     {
//       question: "How do I get started with StacklyAI APIs?",
//       answer:
//         "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
//     },
//     {
//       question: "What authentication method does StacklyAI use?",
//       answer:
//         "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
//     },
//     {
//       question: "Are there any rate limits on API requests?",
//       answer:
//         "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
//     },
//     {
//       question: " What image formats do StacklyAI APIs support?",
//       answer:
//         "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
//     },
//     {
//       question: "How to handle other image formats e.g. HEIC, HEIF etc?",
//       answer:
//         "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
//     },
//     {
//       question: "What is the expiration period for my credit pack?",
//       answer:
//         "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
//     },
//   ];


//   return (
//     <div>
//       {/* section1 */}
//       <div
//         className="relative w-full h-[536px] flex flex-col items-center justify-center bg-white-to-cyan
//              max-[440px]:w-[440px]
//              max-[440px]:h-[337px]
//              max-[440px]:flex-col
//              max-[440px]:px-[20px]
//              max-[440px]:pt-[40px]
//              max-[440px]:pb-[40px]
//              max-[440px]:gap-[48px]"
//       >

//         {/* <h1 className="w-[816px] h-[128px] font-bold text-[48px] leading-[64px] text-center text-[#2a2a2a]">
//         "Transform Spaces Effortlessly with <span className="text-[#00B0BA]">StacklyAI API</span>"
//       </h1> */}
//         <h1
//           className="max-w-full text-[64px] font-extrabold leading-[72%] text-center text-[#2a2a2a]
//              md:text-[40px] text-[48px]
//              max-[440px]:w-[400px]
//              max-[440px]:h-[56px]
//              max-[440px]:text-[20px]
//              max-[440px]:leading-[140%]
//              max-[440px]:font-bold
//              max-[440px]:text-center
//              max-[440px]:mx-auto"
//         >
//           Transform Spaces Effortlessly with{" "}
//           <span className="text-[#00B0BA]">StacklyAI API</span>
//         </h1>

//         {/* <p className="w-[672px] h-[56px] font-[400] text-[18px] leading-[72px] text-center text-[#b0b0b0] mt-4">
//         Explore limitless possibilities to redesign and enhance any home interior, exterior, or outdoor space — all through powerful AI integration.
//       </p> */}
//         <p className="w-[672px] h-[56px] font-extrabold font-[400] text-[20px] leading-[28px] text-center text-[#b0b0b0] mt-4
//                max-[440px]:w-[400px]
//                max-[440px]:h-[22px]
//                max-[440px]:text-[16px]
//                max-[440px]:leading-[140%]
//                max-[440px]:font-semibold
//                max-[440px]:text-center
//                max-[440px]:mx-auto
//                max-[440px]:-mt-8">
//           <span className="text-[#00B0BA]">
//             Get Instant API Access for your AI Design Platform
//           </span>
//         </p>


//         <Link to="/Sign-in">
//           <button
//             className="w-[306px] h-[45px] mt-8 rounded-[6px] border-[1px] border-solid border-transparent 
//                text-white font-semibold text-[18px] leading-[100%]
//                max-[440px]:-mt-4"
//             style={{
//               backgroundImage:
//                 "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
//             }}
//           >
//             Let’s Connect!
//           </button>
//         </Link>
//         {/* Positioned Illustration at Bottom Left */}
//         <img
//           src={keyImage}
//           alt="API Key Illustration"
//           className="absolute bottom-[40px] right-[80px] w-[330px] h-auto object-contain
//              max-[440px]:w-[70px]
//              max-[440px]:h-[58.55px]
//              max-[440px]:bottom-[4px]"
//         />



//       </div>

//       {/* section-2  */}

//       {/* //<div className="relative w-full h-[848px] flex items-center justify-center bg-black"> */}
//       <div className="relative w-full h-[709px] flex items-center justify-center bg-[#011213]
//                 max-[440px]:flex-col
//                 max-[440px]:w-[440px]
//                 max-[440px]:h-auto
//                 max-[440px]:pt-[40px]
//                 max-[440px]:pr-[20px]
//                 max-[440px]:pb-[40px]
//                 max-[440px]:pl-[20px]">
//         {/* Background API Image */}
//         <img
//           src={apiBackground}
//           alt="API Background"
//           className="absolute w-[1150.91px] h-[848px] p-[34px] opacity-60
//                max-[440px]:relative
//                max-[440px]:w-full
//                max-[440px]:h-auto
//                max-[440px]:p-0
//                max-[440px]:opacity-60"
//         />

//         {/* Text Content */}
//         <div className="relative z-10 w-[1172px] h-[242px] flex flex-col items-center justify-center text-white text-center
//                 max-[440px]:w-[400px]
//                 max-[440px]:mx-auto
//                 max-[440px]:text-center
//                 max-[440px]:items-center
//                 max-[440px]:justify-center
//                 max-[440px]:-mt-72">

//           <h2 className="w-[816px] h-[64px] font-semibold text-[48px] leading-[64px]
//                max-[440px]:w-[400px]
//                max-[440px]:h-[24px]
//                max-[440px]:text-[20px]
//                max-[440px]:leading-[100%]
//                max-[440px]:text-center
//                max-[440px]:mx-auto">
//             What Is StacklyAI API?
//           </h2>
//           <p className="w-[1172px] h-[113px] font-[400] text-[28px] leading-[36px] mt-4
//               max-[440px]:hidden">
//             StacklyAI API allows developers, platforms, and businesses to
//             generate high-quality AI-
//             <br />
//             rendered images from user-submitted photos. Whether it's a room
//             makeover,
//             <br /> architectural facade, or outdoor setting — the API delivers
//             instant visual
//             <br /> transformations, directly into your product.
//           </p>

//           {/* MOBILE */}
//           <p className="hidden max-[440px]:block 
//               w-[400px] text-[14px] leading-[140%] text-center mx-auto h-auto
//               max-[440px]:mt-4">
//             StacklyAI API allows developers, platforms, and businesses to generate high-quality AI-rendered images from user-submitted photos. Whether it's a room makeover, architectural facade, or outdoor setting — the API delivers instant visual transformations, directly into your product.
//           </p>



//         </div>
//       </div>

//       {/* section-3  */}

//       {/* <Keys /> */}

//       {/* section 4  */}

//       <ApiIntegrate />

//       {/* section-5  */}

//       {/* <Plan /> */}

//       {/* section-6  */}

//       {/* <ApiAccess /> */}

//       {/* section-7  */}

//       {/* <HowItWorks /> */}

//       {/* section-8  */}

//       <CustomAPIPlan />

//       {/* section-9  */}

//       {/* <div className='w-full flex justify-center'>
//  <div className='w-[1280px] h-[1049px] rounded-[40px] bg-[white] shadow-[#00000040] shadow-[0_0_4px_0] flex flex-col justify-center items-center'>
//       <h2 className="w-full max-w-[743px] min-h-[64px] text-[44px] leading-[64px] font-bold text-center">
//         Ready to <span className="text-[#009A98]">Create Something Great?</span>
//       </h2>
//       <p className=" w-full max-w-[770px] min-h-[56px] text-[18px] font-[400] leading-[28px] text-center text-[#2A2A2A] my-8">
//         We offer flexible API plans tailored to your needs.<br />
//         Let’s build the right setup—just for you.
//       </p>
//     <div className="w-[730px] h-[721px] rounded-[10px] border-[1px] border-[#007B8214] border-solid p-[50px] gap-[10px] bg-[#ffffff] shadow-[#ABB2BB40] shadow-[0_0_12px_0] flex justify-center items-center">
//       <form className="space-y-8">
//         <div className="flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Ram"
//             className="flex-1 border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//           />
//           <input
//             type="email"
//             placeholder="ramprakash@example.com"
//             className="flex-1 border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//           />
//         </div>
//         <div className="flex flex-col md:flex-row gap-4">
//           <input
//             type="tel"
//             placeholder="+9 0123456789"
//             className="flex-1 border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//           />
//           <div className="flex-1 flex items-center border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 ">
//             <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="" />
//             <span className="text-gray-500"></span>
//           </div>
//         </div>
//         <input
//           type="text"
//           placeholder="Companyexample"
//           className="w-full border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <input
//           type="text"
//           placeholder="Address*"
//           className="w-full border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <textarea
//           placeholder="Your message..."
//           rows="4"
//           className="w-full border-[1px] border-solid border-[#E2E2E2] bg-[#F9F9F9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-2 rounded hover:opacity-90 transition"
//         >
//           Let's Connect!
//         </button>
//       </form>
//     </div>

//   </div>

//  </div> */}

//       {/* {section-10} */}
//       {/* <section className="w-full py-16 px-4 flex flex-col justify-center items-center mt-20">
//         <h2 className="text-[48px] md:text-5xl font-semibold text-center text-gray-800 leading-[140%]">
//           Discover Our{" "}
//           <span className="text-[#007B82]">Advanced AI Interior Tools</span> and
//           Redesign
//         </h2>
//         <h2 className="text-[48px] md:text-5xl font-semibold text-center text-[black] mt-3">
//           Your Space Instantly
//         </h2>
//       </section> */}

//       <div
//         className="relative w-full h-[709px] flex items-center justify-center bg-[white] 
//              max-[440px]:w-[440px] max-[440px]:h-[273px]"
//       >


//         {/* Background API Image */}
//         <img
//           src={apiBackground}
//           alt="API Background"
//           className="absolute object-cover w-full h-full opacity-60"
//           style={{
//             maxWidth: "100%",
//             maxHeight: "100%",
//             objectPosition: "center",
//             transform: "rotate(0deg)",
//           }}
//         />


//         {/* Text Content */}
//         <div
//           className="relative z-10 flex flex-col items-center justify-center text-black text-center
//              w-full max-w-[1172px] px-4 
//              h-full" // Full height to center content vertically
//         >
//           <h2
//             className="w-[816px] h-[64px] font-semibold text-[48px] leading-[64px] 
//              max-[440px]:w-[400px] max-[440px]:h-[24px] max-[440px]:font-[600] 
//              max-[440px]:text-[20px] max-[440px]:leading-[100%] text-center"
//           >
//             Ready to{" "}
//             <span className="text-[#00B0BA]">Create Something Great?</span>
//           </h2>

//           <p
//             className="w-[1280px] h-[199px] font-[400] text-[28px] leading-[36px] mt-4 text-center
//              max-[440px]:w-[400px] max-[440px]:h-[60px] max-[440px]:text-[14px] max-[440px]:leading-[140%]"
//           >
//             We offer flexible API plans tailored to your needs.
//             <br />
//             Let’s build the right setup—just for you.
//           </p>

//           <Link to="/Sign-in">
//             {/* DESKTOP */}
//             <button
//               className="w-[800px] h-[70px] mt-[40px] rounded-[6px] border border-transparent 
//                  text-white font-semibold text-[18px] leading-[100%] 
//                  max-[440px]:hidden"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
//               }}
//             >
//               LOGIN TO ACCESS API KEY
//             </button>

//             {/* MOBILE */}
//             <button
//               className="hidden max-[440px]:flex max-[440px]:w-[347px] max-[440px]:h-[45px] 
//                  max-[440px]:rounded-[8px] max-[440px]:border max-[440px]:border-white 
//                  max-[440px]:px-[24px] max-[440px]:py-[12px] 
//                  max-[440px]:text-white max-[440px]:font-[700] max-[440px]:text-[16px] 
//                  max-[440px]:leading-[100%] max-[440px]:whitespace-nowrap 
//                  max-[440px]:justify-center max-[440px]:items-center 
//                  max-[440px]:bg-[#007B82] mt-[32px]"
//             >
//               Login To Access API Key
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* section-11  */}

//       <Draggable />

//       {/* section-12  */}

//       {/* <section
//          className="relative w-full  absolute-0  bg-cover bg-center bg-no-repeat"
//          style={{ backgroundImage: "url('./src/assets/home/sec14/bg1.jpg')" }}
//        >
//          <div className="py-20 px-6 bg-[#00000096]">
//            <div className="flex flex-col items-center text-center text-white">
//              <h2 className="text-[48px] md:text-5xl leading-[140%] text-center font-bold mb-4">
//                <span className="text-6xl font-bold">“</span> Meet Our Members{" "}
//                <span className="text-6xl font-bold">”</span>
//              </h2>
//              <p className="max-w-[630px] min-h-[78px] text-[28px] leading-[140%] text-center md:text-xl text-gray-300 mb-8">
//                You're in good company with{" "}
//                <span className="text-cyan-400  font-semibold">Stackly AI</span>,
//                trusted by people in all 195 countries.
//              </p> */}
//       {/* Center logo */}
//       {/* <div className="mb-16">
//                <div className="bg-[#FFFFFF1F] rounded-full p-8 shadow-lg">
//                  <img src={sec14Img2} alt="Center Icon" className="w-12 h-12" />
//                </div>
//              </div> */}

//       {/* Member Cards */}
//       {/* <div className="w-[100vw] flex justify-center item-center flex-wrap gap-10"> */}
//       {/* Card 1 */}
//       {/* <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
//                  <div className="min-w-[413px] h-full flex justify-around items-center">
//                    <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1 ">
//                      <h3 className="text-black text-[22px] font-medium leading-[140%] ">Guru Ragav Auditor</h3>
//                      <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">Auditor</p>
//                    </div>
//                    <img
//                      src={sec14Img3}
//                      alt="Member 1"
//                      className="w-20 h-20 rounded-full object-cover"
//                    />
//                  </div>
//                  <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
//                    “I use Stackly AI to help my clients visualize how their
//                    backyard could look like if they hire me for the job. It works
//                    flawlessly!”
//                  </p>
//                </div> */}

//       {/* Card 2 */}
//       {/* <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
//                  <div className="min-w-[413px] h-full flex justify-around items-center">
//                    <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
//                      <h3 className="text-black text-[22px] font-medium leading-[140%]">Cristian Rama</h3>
//                      <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">Architect</p>
//                    </div>
//                    <img
//                      src={sec14Img4}
//                      alt="Member 2"
//                      className="w-20 h-20 rounded-full object-cover"
//                    />
//                  </div>
//                  <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
//                    “I needed to replace my living room furniture so I generated a
//                    few design ideas with Stackly AI. Awesome technology!”
//                  </p>
//                </div> */}

//       {/* Card 3 */}
//       {/* <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
//                  <div className="min-w-[413px] h-full flex justify-around items-center">
//                    <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
//                      <h3 className="text-black text-[22px] font-medium leading-[140%]">Ram Krishnan</h3>
//                      <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">Architect</p>
//                    </div>
//                    <img
//                      src={sec14Img5}
//                      alt="Member 3"
//                      className="w-20 h-20 rounded-full object-cover"
//                    />
//                  </div>
//                  <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
//                    “I run a real estate agency and my clients send me pictures
//                    with their empty properties. I use Stackly AI to furnish them
//                    automatically!”
//                  </p>
//                </div>
//              </div>
//            </div>
//          </div>
//        </section> */}

//       {/* section-14  */}

//       <ApiFaq faqs={faqs} />
//     </div>
//   );
// }

import React from 'react'
import apiBackground from '../../assets/api/back.png';
import buttonkey from '../../assets/api/Key1.png'
import Keys from './Keys';
import ApiIntegrate from './ApiIntegrate';
import Plan from './Plan';
import ApiAccess from './ApiAccess';
import HowItWorks from './HowItWorks';
import CustomAPIPlan from './CustomApiPlan';
import Draggable from './Draggable';
import sec14Img2 from "../../assets/home/sec14/Vector.png";
import sec14Img3 from "../../assets/home/sec14/m1.jpg";
import sec14Img4 from "../../assets/home/sec14/m2.jpg";
import sec14Img5 from "../../assets/home/sec14/m3.jpg";
import ApiFaq from './ApiFaq';
import keyImage from "../../assets/api/key.png";
import apibg from "../../assets/api/API3.png";

import { Link } from 'react-router-dom';



export default function HeroApi() {

  const faqs = [
    {
      question: "How do I get started with StacklyAI APIs?",
      answer:
        "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
    },
    {
      question: "What authentication method does StacklyAI use?",
      answer:
        "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
    },
    {
      question: "Are there any rate limits on API requests?",
      answer:
        "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
    },
    {
      question: " What image formats do StacklyAI APIs support?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
    {
      question: "How to handle other image formats e.g. HEIC, HEIF etc?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
    {
      question: "What is the expiration period for my credit pack?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
  ];


  return (
  <div>
{/* NEW FIGMA DISGINE */}
<section
  className="w-full -mt-[75px] pt-[75px] flex flex-col items-center bg-no-repeat bg-top bg-black"
  style={{
    backgroundImage: `url(${apibg})`,
    backgroundSize: "100% auto", // scales height with content
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  }}
>

  {/* Marquee Section */}
  <div className="w-full h-[46px] mb-3 ">
    <div className="marquee-container w-full h-full overflow-hidden whitespace-nowrap">
      <div className="marquee-content animate-marquee inline-block">
        <span className="marquee-text text-[16px] px-4">
          Hey! It looks like you are from USA. We support Purchasing Power
          Parity pricing, so enjoy 50% off on your subscription. Use code: abc589
        </span>
        <span className="marquee-text text-[16px] px-4 ml-[80px]">
          Hey! It looks like you are from USA. We support Purchasing Power
          Parity pricing, so enjoy 50% off on your subscription. Use code: abc589
        </span>
      </div>
    </div>
  </div>

  {/* Centered Content Block */}
  <div className="w-full max-w-[836px] h-[281px] flex flex-col items-center gap-[40px] mt-[90px] px-4 text-center">
    
    {/* Heading */}
    <div className="w-full h-[107px]">
      <h1 className="text-[42px] text-white font-[600] leading-[100%] font-['Lora']">
        Transform Spaces in Real Time with StacklyAI
      </h1>
    </div>

    {/* Subheading */}
    <div className="w-full h-[50px]">
      <p className="text-[18px] text-[#E0E0E0] font-[500] leading-[140%] font-['Poppins']">
        Experience intelligent design solutions crafted to enhance interiors, exteriors
        <br />
        and outdoor spaces with seamless AI precision
      </p>
    </div>

    {/* Button */}
    <Link to="/sign-in">
     <div className="w-[212px] h-[44px] flex items-center gap-[10px] px-[30px] py-[10px] rounded-[30px] border border-white bg-gradient-to-r from-[rgba(138,56,245,0.5)] to-[rgba(194,44,162,0.5)]">
       {/* Right Child: Text */}
      <div className="w-[118px] h-[19px] flex items-center">
        <span className="text-white text-[16px] leading-[100%] font-medium font-['Inter']">
          Get API Access
        </span>
      </div>
      {/* Left Child: Image */}
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        <img src={buttonkey} alt="Key" className="w-full h-full object-contain" />
      </div>
      </div>
    </Link>

  </div>

 <ApiIntegrate />
  <CustomAPIPlan />
   
</section>

 

 
      {/* section-3  */}

      {/* <Keys /> */}

      {/* section 4  */}

     

      {/* section-5  */}

      {/* <Plan /> */}

      {/* section-6  */}

      {/* <ApiAccess /> */}

      {/* section-7  */}

      {/* <HowItWorks /> */}

      {/* section-8  */}

      

      {/* section-9  */}

     
      {/* section-14  */}

      {/* <ApiFaq faqs={faqs} /> */}
    </div>
  );
}