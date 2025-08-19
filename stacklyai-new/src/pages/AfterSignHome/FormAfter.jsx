// import React, { useContext, useRef, useState } from "react";
// import { UserContext } from "../../context/UserContext";
// import { useNavigate } from "react-router-dom";
// import Interior from "../../assets/product-pg/Vector.png";
// import Home from "../../assets/product-pg/home.png";
// import Tree from "../../assets/product-pg/tree.png";
// import Lock from "../../assets/product-pg/lock.png";
// import Galley from "../../assets/product-pg/gallery.png";
// import I from "../../assets/product-pg/i.png";
// import Magic from "../../assets/product-pg/magic.png";

// export default function FormAfter() {
//   const { userInfo } = useContext(UserContext);
//   const navigate = useNavigate();
//   const inpRef = useRef(null);

//   const [activeTab, setActiveTab] = useState("Interiors");
//   const [formData, setFormData] = useState({
//     buildingType: "",
//     roomType: "",
//     roomStyle: "",
//     noOfDesign: "1",
//     aiTouch: "Low",
//   });
//   const [imgURL, setImgURL] = useState(null);

//   const tabs = [
//     { name: "Interiors", icon: Interior },
//     { name: "Exteriors", icon: Home },
//     { name: "Outdoors", icon: Tree },
//     // { name: "Upgrade to Unlock", icon: Lock },
//   ];

//   const roomTypes = {
//     Interiors: [
//       "Living room",
//       "Bedroom",
//       "Kitchen",
//       "Dining Room",
//       "Study Room",
//       "Home Office",
//       "Family Room",
//       "Kids Room",
//       "Balcony",
//     ],
//     Exteriors: [
//       "Front Yard",
//       "Backyard",
//       "Garden",
//       "Patio",
//       "Deck",
//       "Pool Area",
//       "Driveway",
//     ],
//     Outdoors: [
//       "Park",
//       "Camping Site",
//       "Beach",
//       "Mountain View",
//       "Forest",
//       "Lake Side",
//     ],
//   };

//   const styles = [
//     "Modern",
//     "Tropical",
//     "Rustic",
//     "Tribal",
//     "Cyberpunk",
//     "Zen",
//     "Japanese Design",
//     "Biophilic",
//     "Christmas",
//     "Bohemian",
//     "Contemporary",
//     "Maximalist",
//     "Vintage",
//     "Baroque",
//     "Farmhouse",
//     "Minimalist",
//     "Gaming Room",
//     "French Country",
//     "Art Deco",
//     "Art Nouveau",
//     "Halloween",
//     "Ski Chalet",
//     "Sketch",
//     "Scandinavian",
//     "Industrial",
//     "Neoclassic",
//     "Medieval",
//     "Shabby Chic",
//     "Eclectic",
//     "Asian Traditional",
//     "Hollywood Glam",
//     "Western Traditional",
//     "Transitional",
//   ];

//   const changeImage = (e) => {
//     // if (!userInfo.userId) {
//     //   return navigate("/sign-in");
//     // }
//     const file = e.target.files[0];
//     if (file) {
//       const preview = URL.createObjectURL(file);
//       setImgURL(preview);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     // if (!userInfo.userId) {
//     //   return navigate("/sign-in");
//     // }
//     const file = e.dataTransfer.files[0];

//     if (file && file.type.startsWith("image/")) {
//       const preview = URL.createObjectURL(file);
//       setImgURL(preview);
//     } else {
//       alert("Please drop only image files.");
//     }
//   };

//   const handleChange = (value, key) => {
//     setFormData((prev) => {
//       return { ...prev, [key]: value };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!userInfo.userId) {
//       return navigate("/sign-in");
//     }
//     if (
//       formData.aiTouch &&
//       formData.noOfDesign &&
//       formData.roomStyle &&
//       formData.roomType &&
//       formData.buildingType &&
//       imgURL
//     ) {
//       console.log("Form Data:", formData);
//       console.log("Image URL:", imgURL);
//       // Here you would typically send the data to your backend
//       alert("Design generation started!");
//       // Reset form
//       setFormData({
//         buildingType: "",
//         roomType: "",
//         roomStyle: "",
//         noOfDesign: "1",
//         aiTouch: "Low",
//       });
//       setImgURL(null);
//     } else {
//       alert("Please fill out all the fields!");
//     }
//   };

//   return (
//     //add some responsive

//     <section className="w-full min-h-screen pb-[50px] px-6 sm:px-10 py-10 flex flex-col justify-start items-center gap-y-10 bg-gradient-to-l from-[#002628] to-[#00646A] overflow-hidden">
//       {/* Header */}
//       <div className="w-full max-w-4xl text-center space-y-2">
//         <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold text-white leading-snug">
//           Let AI Style It
//         </h1>
//         <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-medium text-white leading-snug">
//           Upload a photo to begin your AI-powered room design
//         </p>
//       </div>

//       {/* Tabs */}
//       <div className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-4">
//         {tabs.map((tab) => (
//           <div
//             key={tab.name}
//             className="w-[clamp(120px,15vw,200px)] max-w-[200px] h-[clamp(100px,12vh,128px)] flex flex-col justify-center items-center gap-2 cursor-pointer"
//             // onClick={() => {
//             //   setActiveTab(tab.name);

//             //   switch (tab.name) {
//             //     case "Interiors":
//             //       navigate("/FormAfter");
//             //       break;
//             //     case "Exteriors":
//             //       navigate("/Exteriorform");
//             //       break;
//             //     case "Outdoors":
//             //       navigate("/Outdoorform");
//             //       break;
//             //     default:
//             //       break;
//             //   }
//             // }}
//           >
//             <div
//               className={`w-[clamp(60px,6vw,77px)] aspect-square border-2 p-2 flex justify-center items-center rounded-full transition-all duration-200 ${
//                 activeTab === tab.name
//                   ? "border-white bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82]"
//                   : "border-[#FFFFFF1A] bg-[#FFFFFF1A] hover:border-blue-300"
//               }`}
//             >
//               <img
//                 src={tab.icon}
//                 alt={tab.name}
//                 className="w-full h-auto max-w-[60%] max-h-[60%] object-contain"
//               />
//             </div>
//             <p className="text-white text-[clamp(0.9rem,1.5vw,1.4rem)] font-semibold text-center">
//               {tab.name}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Form Section */}
//       <div className="w-full max-w-7xl flex flex-col xl:flex-row gap-10 items-start justify-between">
//         {/* Upload */}
//         <div className="w-full xl:w-1/2 max-w-xl flex flex-col items-center gap-4">
//           <div
//             className="w-full aspect-[4/3] max-h-[70vh] border-2 border-dashed border-white rounded-xl flex justify-center items-center cursor-pointer"
//             onClick={() => inpRef.current.click()}
//             onDragOver={handleDragOver}
//             onDrop={handleDrop}
//           >
//             {imgURL ? (
//               <img
//                 src={imgURL}
//                 alt="Preview"
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             ) : (
//               <div className="w-[clamp(180px,25vw,280px)] flex flex-col items-center gap-2">
//                 <div className="w-[clamp(40px,5vw,70px)] aspect-square rounded-full p-2 bg-[#FFFFFF1A] flex justify-center items-center">
//                   <img src={Galley} alt="gallery" className="w-full h-auto" />
//                 </div>
//                 <p className="text-[#FFFFFFB2] text-center text-[clamp(0.9rem,2vw,1.5rem)] leading-snug">
//                   Drag & drop or click to upload a photo
//                 </p>
//               </div>
//             )}
//             <input
//               type="file"
//               ref={inpRef}
//               onChange={changeImage}
//               accept="image/*"
//               className="hidden"
//             />
//           </div>

//           <div className="w-[147px] h-[40px] rounded-[6px] border-[1.5px] border-solid border-white px-[10px] py-[8px] flex justify-around items-center cursor-pointer">
//             <div className="w-[24px] h-[24px]">
//               <img src={I} alt="i" />
//             </div>
//             <div className="w-[93px] h-[19px] text-[16px] font-[medium] leading-[100%] text-center text-white">
//               Photo guide
//             </div>
//           </div>
//         </div>

//         {/* Form Controls */}
//         <form
//           onSubmit={handleSubmit}
//           className="w-full xl:w-1/2 max-w-xl flex flex-col gap-6"
//         >
//           {/* Building Type */}
//           <div className="space-y-2">
//             <label className="text-white text-lg">Choose Building Type</label>
//             <div className="flex flex-col sm:flex-row gap-4">
//               {["Commercial", "Residential"].map((type) => (
//                 <div
//                   key={type}
//                   className={`flex-1 flex justify-between items-center px-4 py-2 rounded-md cursor-pointer ${
//                     formData.buildingType === type
//                       ? "bg-white text-[#007B82]"
//                       : "bg-[#00000033] text-[#FFFFFF80]"
//                   }`}
//                   onClick={() => handleChange(type, "buildingType")}
//                 >
//                   <span>{type}</span>
//                   <input
//                     type="radio"
//                     checked={formData.buildingType === type}
//                     onChange={() => {}}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Dynamic Fields */}
//           {[
//             {
//               label: "Select Room Type",
//               name: "roomType",
//               options: roomTypes[activeTab],
//             },
//             { label: "Pick a Style", name: "roomStyle", options: styles },
//             {
//               label: "Number of designs",
//               name: "noOfDesign",
//               options: Array.from({ length: 9 }, (_, i) => i + 1),
//             },
//           ].map((field) => (
//             <div key={field.name} className="space-y-2">
//               <label className="text-white text-lg">{field.label}</label>
//               <select
//                 name={field.name}
//                 value={formData[field.name]}
//                 onChange={(e) => handleChange(e.target.value, field.name)}
//                 className="w-full p-3 rounded-md bg-white text-[#007B82] cursor-pointer"
//               >
//                 <option value="">Select {field.name}</option>
//                 {field.options.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           ))}

//           {/* AI Strength */}
//           <div className="space-y-2">
//             <label className="text-white text-lg">AI Styling Strength</label>
//             <div className="flex flex-wrap gap-3">
//               {["Very Low", "Low", "Medium", "High"].map((level) => (
//                 <div
//                   key={level}
//                   className={`flex-1 min-w-[120px] px-4 py-2 rounded-md cursor-pointer text-center ${
//                     formData.aiTouch === level
//                       ? "bg-white text-[#007B82]"
//                       : "bg-[#00000033] text-[#FFFFFF80]"
//                   }`}
//                   onClick={() => handleChange(level, "aiTouch")}
//                 >
//                   {level}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </form>
//       </div>
//       <div
//         className="w-full max-w-[899px] min-h-[67px] rounded-[8px] border border-[#FFFFFF4D] flex justify-center items-center cursor-pointer"
//         style={{
//           backgroundImage: `
//         linear-gradient(to right, #007c82 0%,rgb(4, 68, 75),rgb(3, 89, 94) 100%)

//         `,
//         }}
//       >
//         <button
//           type="submit"
//           className="w-[200px] min-h-[35px] flex justify-center items-center gap-[10px] text-[20px] font-bold leading-[35px] tracking-[0.5px] text-center text-white"
//         >
//           <span>
//             <img src={Magic} alt="magic" />
//           </span>
//           Generate Design
//         </button>
//       </div>
//     </section>
//   );
// }

import React, { useContext, useRef, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Interior from "../../assets/product-pg/Vector.png";
import Home from "../../assets/product-pg/home.png";
import Tree from "../../assets/product-pg/tree.png";
import Lock from "../../assets/product-pg/lock.png";
import Galley from "../../assets/product-pg/gallery.png";
import I from "../../assets/product-pg/i.png";
import Magic from "../../assets/product-pg/magic.png";
import axios from "axios";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FormDataContext } from "../../context/FormDataContext";
import Frame from "../../assets/home/Frame.png";
import CanvasImg from "../../assets/afterHome/CanvasImg.png";
import CanvasUplod from "../../assets/afterHome/CanvasUplod.png";
import Upload from "../../assets/home/upload.png";
const CloseIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E";

export default function Form({ selectedImage }) {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const inpRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("Interiors");
  const [imgFile, setImgFile] = useState(null);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [originalImageUrl, setOriginalImageUrl] = useState(null);
  const backendBaseUrl = "http://localhost:8000";
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 8 });
  const [strength, setStrength] = useState("LOW");

  const [formData, setFormData] = useState({
    buildingType: "",
    roomType: "",
    roomStyle: "",
    numDesigns: "1",
    aiStrength: "Low",
    houseAngle: "",
    spaceType: "",
  });

  const [imgURL, setImgURL] = useState(null);

  const tabs = [
    { name: "Interiors", icon: Interior },
    { name: "Exteriors", icon: Home },
    { name: "Outdoors", icon: Tree },
  ];

  const roomTypes = {
    Interiors: [
      "classic", "modern", "minimal", "scandinavian", "contemporary",
      "industrial", "japandi", "bohemian", "coastal", "modern luxury",
      "tropical resort", "japanese zen",
    ],
    Exteriors: [
      "classic", "modern", "bohemian", "coastal", "international",
      "elephant", "stone clad", "glass house", "red brick",
      "painted brick", "wood accents", "industrial",
    ],
    Outdoors: [
      "modern", "contemporary", "traditional", "rustic",
      "scandinavian", "classic garden", "coastal outdoor",
      "farmhouse", "cottage garden", "industrial", "beach",
    ],
  };

  const styles = {
     Interiors: [
      "Living room", "Bedroom", "Kitchen", "Home office", "Dining room",
      "Study room", "Family room", "Kid room", "Balcony",
    ],
    Exteriors: ["Front side", "Back side", "Left side", "Right side"],
    Outdoors: [
      "Front Yard", "Backyard", "Balcony", "Terrace/Rooftop",
      "Driveway/Parking Area", "Walkway/Path", "Lounge", "Porch",
      "Fence", "Garden",
    ],
  };

  const handleDragOver = (e) => e.preventDefault();

  const changeImage = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImgFile(file);
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
    } else {
      alert("Please upload only image files.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImgFile(file);
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
    } else {
      alert("Please drop only image files.");
    }
  };

  const handleChange = (value, key) => {
    if (key === "roomType" && activeTab === "Exteriors") {
      setFormData(prev => ({ ...prev, [key]: value }));
    } else {
      setFormData(prev => ({ ...prev, [key]: value.toLowerCase() }));
    }
  };

  const handleTabChange = (tabName) => {
    if (tabName === "Upgrade to Unlock") {
      alert("Please upgrade your account to access this feature");
    } else {
      setActiveTab(tabName);
      setVisibleRange({ start: 0, end: 8 });
      setFormData({
        buildingType: "",
        roomType: "",
        roomStyle: "",
        numDesigns: "1",
        aiStrength: "Low",
        houseAngle: "",
        spaceType: "",
      });
    }
  };

  const handleNext = () => {
    const currentStyles = styles[activeTab];
    const newEnd = Math.min(visibleRange.end + 1, currentStyles.length);
    const newStart = newEnd > visibleRange.end ? visibleRange.start + 1 : visibleRange.start;
    
    setVisibleRange({ 
      start: newStart,
      end: newEnd
    });
  };

  const handlePrev = () => {
    const newStart = Math.max(visibleRange.start - 1, 0);
    const newEnd = newStart < visibleRange.start ? visibleRange.end - 1 : visibleRange.end;
    
    setVisibleRange({ 
      start: newStart,
      end: newEnd
    });
  };

  const getPositionClass = () => {
    if (strength === "LOW") return "left-0";
    if (strength === "MEDIUM") return "left-1/2 -translate-x-1/2";
    if (strength === "HIGH") return "right-0";
  };

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + 10;
      });
    }, 1000);

    try {
      if (!imgFile) throw new Error("Please upload an image first!");

      const formDataToSend = new FormData();
      formDataToSend.append("image", imgFile);
      formDataToSend.append("design_style", formData.roomStyle);
      formDataToSend.append("ai_strength", formData.aiStrength);
      formDataToSend.append("num_designs", formData.numDesigns.toString());

      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User not logged in.");
        setIsLoading(false);
        return;
      }
      formDataToSend.append("user_id", userId);

      let endpoint = "";
      let typeDetail = "";

      switch (activeTab) {
        case "Interiors":
          endpoint = "generate-interior-design";
          formDataToSend.append("building_type", formData.buildingType);
          formDataToSend.append("room_type", formData.roomType);
          typeDetail = formData.roomType;
          break;
        case "Exteriors":
          endpoint = "generate-exterior-design";
          formDataToSend.append("house_angle", formData.roomType);
          typeDetail = formData.roomType;
          break;
        case "Outdoors":
          endpoint = "generate-outdoor-design";
          formDataToSend.append("space_type", formData.roomType);
          typeDetail = formData.roomType;
          break;
      }

      const response = await axios.post(
        `http://localhost:8000/api/${endpoint}/`,
        formDataToSend,
        {
          onUploadProgress: (progressEvent) => {
            const uploadPercent = Math.round((progressEvent.loaded * 50) / progressEvent.total);
            setProgress(uploadPercent);
          },
        }
      );

      for (let i = 50; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setProgress(i);
      }

      if (response.data.success) {
        const designs = Array.isArray(response.data.designs)
          ? response.data.designs.map(url => ({
            url: url.startsWith("http") ? url : backendBaseUrl + url,
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
          }))
          : [];

        const base64Image = await toBase64(imgFile);

        const navState = {
          originalImage: base64Image,
          uploadedFile: imgFile,
          generatedImages: designs,
          formData: {
            userId: userId,
            category: activeTab.toLowerCase(),
            typeDetail: typeDetail,
            style: formData.roomStyle,
            aiStrength: formData.aiStrength,
            numDesigns: formData.numDesigns
          }
        };

        localStorage.setItem("imageGenState", JSON.stringify(navState));
        navigate("/ImageGeneration", { state: navState });
      } else {
        throw new Error(response.data.message || "Design generation failed");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Failed to connect to server";
      alert(`Error: ${errorMessage}`);
    } finally {
      clearInterval(progressInterval);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedImage) {
      setImgURL(selectedImage); // Display in upload box
      fetch(selectedImage)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], "previous-image.png", { type: blob.type });
          setImgFile(file); // Set as upload file
        });
    }
  }, [selectedImage]);

  return (
    <section
  className="w-full h-[1268px] bg-black opacity-100 -mt-[82px] pt-[82px] overflow-hidden"
  style={{ transform: "rotate(0deg)" }}
> 
 {/* Header */}
     <div className="flex flex-col items-center justify-center mt-[75px] gap-[16px]">
  {/* Top text */}
  <h1 className="text-center text-[28px] sm:text-[34px] font-[400] leading-[100%] text-white lora-text">
    Elevate Your Space with{" "}
    <span
      className="bg-clip-text text-transparent lora-text"
      style={{
        backgroundImage: "linear-gradient(90deg, #8A38F5 0%, #C22CA2 97.12%)",
      }}
    >
      AI
    </span>
  </h1>

  {/* Middle text */}
  <div
    className="text-[16px] sm:text-[18px] text-[#6D6D6D] text-center"
    style={{
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      lineHeight: "140%",
    }}
  >
    Upload a photo and let AI create a stunning makeover
  </div>

  {/* Bottom text */}
  <div
    className="text-[14px] sm:text-[16px] text-white text-center"
    style={{
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      lineHeight: "140%",
    }}
  >
    Free Trial ( 9 of 10 renders left)
  </div>
</div>

      {/* Tabs */}
     
    <div className="w-full max-w-[352px] h-[84px] flex gap-[20px] sm:gap-[72px] mx-auto mt-8">

        {tabs.map((tab) => (
          <div
            key={tab.name}
          className="w-full h-[84px] flex flex-col gap-[8px] opacity-100"
            onClick={() => handleTabChange(tab.name)}
          >

<div
  className={`w-[52px] h-[52px] rounded-full border-[2px] border-solid border-[#FFFFFF] shadow-[0_0_8px_#8A38F580] bg-gradient-to-b from-[#8120FF] to-[#4D1399] mx-auto flex items-center justify-center
    max-[440px]:w-[32px] max-[440px]:h-[32px]
    max-[440px]:rounded-full max-[440px]:border-[0.9px] max-[440px]:opacity-100
    ${activeTab === tab.name
      ? "border-white bg-gradient-to-l from-[#7A1FF133]  to-[#8120FF]"
      : "border-[#000000] bg-[#7A1FF133] hover:border-blue-300"
    }`}
>
  <img
    src={tab.icon}
    alt={tab.name}
    className="w-[26px] h-[19px] object-contain
               max-[440px]:w-[17.97px] max-[440px]:h-[13.07px] max-[440px]:opacity-100"
  />


            </div>
     <p
  className={`text-[16px] font-[500] font-poppins leading-[100%] tracking-[0%] text-center
              w-[66px] h-[24px]
              max-[440px]:w-[56px] max-[440px]:h-[17px] max-[440px]:text-[12px] max-[440px]:leading-[140%]
              ${
                activeTab === tab.name
                  ? "text-white"  // color when active
                  : "text-[#FFFFFF80]"      // color when inactive
              }`}
>
  {tab.name}
</p>


          </div>
        ))}
      </div>
<div className="w-full h-[32px] opacity-100 rotate-0 flex justify-center items-center mt-10">
  <div className="w-[1080px] h-[32px] opacity-100 rotate-0 bg-black flex items-center relative overflow-hidden">
    {/* Styles container with infinite items */}
    <div 
      className="flex gap-[28px] transition-transform duration-300"
      style={{
        transform: `translateX(-${visibleRange.start * (100 / 8)}%)`,
        width: `${Math.ceil(styles[activeTab].length / 8) * 100}%`,
        marginRight: '16px' // Added gap between text and button
      }}
    >
      {/* Render multiple copies for seamless looping */}
      {[...Array(3)].map((_, copyIndex) => (
        <React.Fragment key={`copy-${copyIndex}`}>
          {styles[activeTab].map((style) => (
            <span
              key={`${style}-${copyIndex}`}
              className={`text-white text-sm cursor-pointer px-4 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
                formData.roomStyle === style.toLowerCase() 
                  ? 'bg-white/10 border-white' 
                  : 'bg-[#0B0B0B] border-[#6D6D6D]'
              }`}
              style={{
                border: "1px solid",
              }}
              onClick={() => handleChange(style.toLowerCase(), "roomStyle")}
            >
              {style}
            </span>
          ))}
        </React.Fragment>
      ))}
    </div>
  </div>

  {/* Next button moved to parent div with proper spacing */}
<button
  className="ml-4 flex items-center justify-center rounded-full transition"
  onClick={handleNext}
  style={{
    width: "32px",
    height: "32px",
    opacity: 1,
    borderRadius: "40px",
    borderWidth: "1px",
    background: "#7A1FF133",
    border: "1px solid #FFFFFF",
    boxShadow: "0px 0px 8px 0px #8A38F51F",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      width: "12px",   // bigger size
      height: "12px",
    }}
  >
    <path
      d="M9 5l7 7-7 7"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>


</div>



      {/* upload box 2 */}
      <div className="w-[590px] h-[474px] opacity-100 absolute right-0 top-1/2 transform -translate-y-1/2 bg-black flex flex-col gap-[24px] mr-8 mt-[220px]">
        {/* content-1 */}
        <div className="w-[590px] h-[22px] text-white font-poppins font-medium text-[16px] leading-[140%]">
          Generated Image
        </div>
        {/* content-2 */}
        <div className="w-[590px] h-[358px] rounded-[8px] border border-dashed border-[#6D6D6D] bg-[#6D6D6D1A] relative">

          <div className="w-[52px] h-[52px] rounded-[40px] bg-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <img src={CanvasImg} alt="Canvas" className="w-[26px] h-[26px] object-contain" />
          </div>

        </div>
        {/* content-3 */}
        <div className="w-[590px] h-[44px] flex gap-[24px] opacity-100">

          {/* Left child div */}


          {/* <button
            type="submit"
            className="w-[283px] h-[44px] rounded-[30px] border border-[#C22CA299] flex items-center justify-center gap-[8px] px-[30px] py-[10px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110"
            style={{
              background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)",
            }}
          >
           
            <span className="text-white text-[16px] font-poppins font-normal leading-[100%]">
              Create Again
            </span>

           
            <img
              src={Frame}
              alt="Frame Icon"
              className="w-[24px] h-[24px] object-contain transition-transform duration-300 group-hover:rotate-12"
            />
          </button> */}

          {/* Right child div */}
          {/* <button
            type="button"
            className="w-[283px] h-[44px] rounded-[30px] border border-[#8A38F5] flex items-center justify-center gap-[8px] px-[30px] py-[10px] bg-[#8A38F580] group relative overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8A38F5] hover:to-[#C22CA2] hover:scale-105 hover:shadow-lg"
          >
         
            <span className="text-white text-[16px] font-poppins font-normal leading-[100%] transition-colors duration-300 z-[10]">
              Download
            </span>

            <img
              src={CanvasUplod}
              alt="Frame Icon"
              className="w-[24px] h-[24px] object-contain z-[10]"
            />
          </button> */}
         </div>
      </div>

      {/* Form Section */}
<div className="flex flex-col xl:flex-row items-start justify-between ml-10 mt-20 
                w-[590px] h-[686px] gap-6 opacity-100 rotate-0">
    
    
        {/* Upload Box */}
      <div
  className="w-full xl:w-1/2 max-w-xl flex flex-col items-center gap-4 ml-[190px]
             max-[440px]:w-[329px] max-[440px]:h-[341.547px] max-[440px]:gap-[16px] max-[440px]:opacity-100 
             max-[440px]:mx-auto max-[440px]:justify-center max-[440px]:items-center"
>
   <div className="w-[590px] h-[22px] text-white font-poppins font-medium text-[16px] leading-[140%] flex items-center pl-4">
                Upload Image
              </div>

         <div
  className="
    w-[590px] h-[358px] 
    flex justify-center items-center 
    cursor-pointer relative 
    rounded-[8px] 
    border border-dashed
  "
 
>
  <div
  className="w-full h-full flex justify-center items-center relative
             max-[440px]:w-[329px] max-[440px]:h-[285.547px] max-[440px]:px-[50.69px] max-[440px]:py-[96.22px]"
  onClick={() => inpRef.current.click()}
  onDragOver={handleDragOver}
  onDrop={handleDrop}
  style={{
    background: "#6D6D6D1A",
    borderColor: "#6D6D6D",
    borderWidth: "1px",
    borderRadius: "8px",
    borderStyle: "dashed",
    opacity: 1,
  }}
>


              {imgURL ? (
                <>
                  {!isImageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFF1A] rounded-xl">
                      <p className="text-[#FFFFFFB2]">Loading image...</p>
                    </div>
                  )}
                  <div className="cursor-default relative h-full w-full flex justify-center items-center rounded-xl p-4">
                    <div className="relative h-full w-full flex justify-center items-center rounded-xl overflow-hidden">
                      <img
                        src={imgURL}
                        alt="Preview"
                        className={`max-w-[calc(100%-8px)] max-h-[calc(100%-8px)] object-contain ${isImageLoaded ? "block" : "hidden"}`}
                        onLoad={() => setIsImageLoaded(true)}
                        onError={() => setIsImageLoaded(false)}
                      />
                    </div>

                    {/* Close button */}
                    <svg
                      onClick={(e) => {
                        e.stopPropagation();
                        setImgURL(null);
                        setIsImageLoaded(false);
                      }}
                      className="absolute p-1 w-7 h-7 rounded-full bg-black/70 fill-white top-3 right-3 cursor-pointer hover:bg-black/90 transition-colors"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </div>
                  {isLoading && (
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center rounded-xl">
                      <div className="relative w-24 h-24 mb-4">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#FFFFFF20"
                            strokeWidth="8"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="283"
                            strokeDashoffset={283 - (283 * progress) / 100}
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-xl font-bold">{progress}%</span>
                        </div>
                      </div>
                      <p className="text-white text-lg text-center">
                        {progress < 100 ? "Rendering..." : "Finalizing designs..."}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                  <div
                    className="w-[clamp(180px,25vw,280px)] flex flex-col items-center gap-2
                    max-[440px]:w-[145px] max-[440px]:h-[81px] max-[440px]:opacity-100"
                  >

                <div
                      className="w-[37px] h-[28px]  flex justify-center items-center
             max-[440px]:w-[36px] max-[440px]:h-[36px] max-[440px]:px-[9.31px] max-[440px]:py-[8.28px] 
             max-[440px]:rounded-[20.69px] max-[440px]:opacity-100"
                    >
                      <img
                        src={Upload}
                        alt="gallery"
                        className="w-[38px] h-[38px] object-contain 
               max-[440px]:w-[16.23px] max-[440px]:h-[13.01px] max-[440px]:opacity-100"
                      />
                    </div>

    <p
  className="w-[162px] h-[44px] text-white/70 text-center font-poppins font-normal 
             text-[16px] leading-[140%] tracking-[0] opacity-100"
>
  Drag & drop or click to upload a photo
</p>


                </div>
              )}
              <input
                type="file"
                name="image"
                ref={inpRef}
                onChange={changeImage}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
        <form
          onSubmit={handleSubmit}
          className="w-full xl:w-1/2 max-w-xl flex flex-col gap-6"
        >
          {/* Building Type (only for Interior) */}
          {activeTab === "Interiors" && (
  <div className="space-y-2">
   
  </div>
)}


    {/* Room Type & Number of Designs in One Line */}
<div
  className="flex max-[440px]:flex-col w-[590px] h-[96px] opacity-100 gap-[18px]  ml-[-210px]"
  style={{ transform: "rotate(0deg)" }}
>
  {/* Select Room Type */}
  
  <div
  className="space-y-2 relative w-[286px] h-[76px] opacity-100 flex flex-col gap-[12px]"
  style={{ transform: "rotate(0deg)" }}
>
   <label
  className="
    text-white 
    text-[16px] 
    max-[440px]:text-[14px] 
    font-poppins 
    font-normal 
    leading-[140%] 
    w-[286px] 
    h-[22px] 
    opacity-100 
    tracking-[0]
  "
>
  {activeTab === "Interiors"
    ? "Select Room Style"
    : activeTab === "Exteriors"
    ? "Select House Angle"
    : "Select Space"}
</label>

   <div className="relative w-[286px]">
  <select
    name="roomType"
    value={formData.roomType}
    onChange={(e) => handleChange(e.target.value, "roomType")}
    className="
      w-full h-[42px]
      rounded bg-[#781EED33] text-white cursor-pointer
      px-4 pr-10 py-2 appearance-none
      focus:outline-none focus:ring-2 focus:ring-[#781EED]
    "
    required
  >
    <option value="" className="text-black">
     Select Room Style
    </option>
    {roomTypes[activeTab].map((room) => (
      <option key={room} value={room.toLowerCase()} className="text-black">
        {room}
      </option>
    ))}
  </select>

  {/* Dropdown arrow */}
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
    <svg
      className="h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 
        111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 
        010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </div>


    </div>
  </div>

  {/* Number of Designs */}
<div className="space-y-2 relative w-[286px] h-[76px] flex flex-col gap-[12px]">
  <label className="w-[286px] h-[22px] text-white text-[16px] max-[440px]:text-[14px] font-poppins font-normal leading-[140%] tracking-[0] opacity-100">
    Number of Designs
  </label>

  <div className="relative w-[286px]">
    <select
      name="numDesigns"
      value={formData.numDesigns}
      onChange={(e) => handleChange(e.target.value, "numDesigns")}
      className="
        w-full h-[42px]
        rounded bg-[#781EED33] text-white cursor-pointer
        px-4 pr-10 py-2 appearance-none
        focus:outline-none focus:ring-2 focus:ring-[#781EED]
      "
      required
    >
      {/* Placeholder option (same style as Room Type) */}
      <option value="" className="text-black">
        Number of designs
      </option>

      {[...Array(12).keys()].map((num) => (
        <option key={num + 1} value={num + 1} className="text-black">
          {num + 1}
        </option>
      ))}
    </select>

    {/* Dropdown arrow */}
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <svg
        className="h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 
          111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 
          010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
</div>

</div>



      {/* AI Strength */}
     
                <div className="w-[590px] h-[84px] flex flex-col gap-[12px] opacity-100 rotate-0  ml-[-210px]">
                  <div className="w-[590px] h-[22px] text-white font-poppins font-normal text-[16px] leading-[140%] opacity-100 rotate-0">
                    AI Styling Strength
                  </div>
                 <div className="relative w-[590px]">
  {/* Line */}
  <div className="w-full h-[8px] rounded-[16px] opacity-100 bg-[#6D6D6D33]"></div>

  {/* Circle with Icon */}
  <div
    className={`absolute top-1/2 -translate-y-1/2 
      w-[24px] h-[24px] rounded-[30px] 
      bg-gradient-to-tr from-[#8A38F5] to-[#C22CA2] 
      flex items-center justify-center transition-all duration-500 ${getPositionClass()}`}
  >
    <img
      src={Frame}
      alt="icon"
      className="w-[12px] h-[12px] border border-white rounded-[2px]"
    />
  </div>
</div>

{/* Labels */}
<div className="w-[590px] h-[22px] flex justify-between items-center opacity-100">
  <span className="text-white text-sm cursor-pointer" onClick={() => setStrength("LOW")}>
    LOW
  </span>
  <span className="text-white text-sm cursor-pointer" onClick={() => setStrength("MEDIUM")}>
    MEDIUM
  </span>
  <span className="text-white text-sm cursor-pointer" onClick={() => setStrength("HIGH")}>
    HIGH
  </span>
</div>
</div>
           
    </form>
      </div >
        
        </div>
        {/* Form Controls */}


    {/* Generate Button */ }

<button
  type="submit"
  className="w-[590px] h-[44px] flex items-center justify-center gap-[10px] 
             rounded-[30px] border border-white/50 px-[30px] py-[10px] 
             bg-gradient-to-r from-[rgba(138,56,245,0.5)] to-[rgba(194,44,162,0.5)] 
             text-white font-poppins font-normal text-[16px] leading-[100%]
             hover:opacity-90 transition -mt-8  ml-[95px]"
>
  <span>Create magic</span>
  <img
    src={Frame}
    alt="icon"
    className="w-[24px] h-[24px] opacity-100"
  />
</button>


    
    </section >
  );
}