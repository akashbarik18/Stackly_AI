import React, { useEffect, useState } from "react";
import Banner from "../../assets/profile/banner.jpg";
import Pimage from "../../assets/profile/pimage.png";
import Img from "../../assets/profile/msg.png";
import Eye from "../../assets/profile/eye.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HelpCenter() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState("");

  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    profile_pic: null,
    previewImage: Pimage,
  });

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await fetch("http://localhost:8000/help-center", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.detail || "Submission failed");

      setSuccessMsg("Your message has been sent successfully!");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (!userId) {
          const userInfoRaw = localStorage.getItem("userInfo");
          if (userInfoRaw) {
            const userInfo = JSON.parse(userInfoRaw);
            userId = userInfo.userId || userInfo.id;
          }
        }

        if (!token) throw new Error("No authentication token found");
        if (!userId) throw new Error("No user ID found in storage");

        const profileResponse = await axios.get("http://localhost:8000/profile", {
          params: { userid: userId },
          headers: { Authorization: `Bearer ${token}` },
        });

        const profilePicUrl = profileResponse.data.profile_pic
          ? profileResponse.data.profile_pic.startsWith("/media/profile_pics")
            ? `http://localhost:8000${profileResponse.data.profile_pic}`
            : profileResponse.data.profile_pic
          : Pimage;

        setProfileData({
          first_name: profileResponse.data.first_name || "",
          last_name: profileResponse.data.last_name || "",
          email: profileResponse.data.email || "",
          phone_number: profileResponse.data.phone_number || "",
          profile_pic: profileResponse.data.profile_pic,
          previewImage: profilePicUrl,
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.response?.data?.detail || "Failed to load data");
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div>
      <section className="absolute top-[321px] left-[251px] w-[1094px] rounded-[8px] border-[1px] border-solid border-[#FFFFFF1F] bg-[#FFFFFF0A] p-[32px] flex flex-col">
        {/* Header */}
        <div className="flex justify-center items-center w-[173px] h-[38px] rounded-[4px] border-b border-[#0000004D] bg-[#0000004D] px-[12px] py-[4px] opacity-100">
          <h2 className="text-[20px] poppins-font text-white">Help Center</h2>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col gap-[20px] mx-auto max-w-[800px] mt-[20px]">
          <div className="w-[807px] rounded-[10px] backdrop-blur-[6px] shadow-[0_1px_4px_0] shadow-[#0000003D]">
            <div className="w-[807px] px-[60px] py-[20px] flex flex-col justify-start items-center gap-[10px]">
              <div className="w-[687px] flex flex-col gap-[32px] justify-start items-center">
                <div className="w-full text-center font-semibold text-[20px] text-white">
                  Need Assistance?
                </div>
                <div className="w-full text-center font-[400] text-[14px] text-white">
                  We're here to help. Whether you're facing an issue or simply have a question, feel free to reach out anytime.
                </div>

                <div className="w-[687px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF1F] bg-[#FFFFFF1F] flex flex-col justify-center items-center gap-[36px] px-[36px] py-[32px] shadow-[#ABB2BB40] shadow-[0_1.54px_12.2px_0]">
                  {/* Connected Section */}
                  <div className="w-[228px] h-[27px] flex items-center gap-[4px]">
                    <div className="w-[24px] h-[24px] opacity-100">
                      <img src={Img} alt="icon" className="w-[24px] h-[24px]" />
                    </div>
                    <div className="font-semibold text-[18px] text-[#9747FF]">
                      Let’s Stay Connected!
                    </div>
                  </div>

                  <div className="w-[615px] font-[400] text-[14px] text-center text-white">
                    Leave your email and message below. We’ll get back to you as soon as possible.
                  </div>

                  {/* Form */}
                  <div className="w-[487px] flex flex-col justify-between items-center gap-[32px]">
                    <div className="w-[487px] flex flex-col justify-between items-center gap-[24px]">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your email"
                        className="w-[558px] h-[45px] rounded-[10px] border-[1px] border-[#FFFFFF66] bg-[#FFFFFF1F] border-solid px-[16px] py-[10px] text-[16px] text-white placeholder-white focus:outline-none focus:border-[#9747FF]"
                      />

                      <input
                        type="email"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Write a Subject"
                        className="w-[558px] h-[45px] rounded-[10px] border-[1px] border-[#FFFFFF66] bg-[#FFFFFF1F] border-solid px-[16px] py-[10px] text-[16px] text-white placeholder-white focus:outline-none focus:border-[#9747FF]"
                      />

                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message (Max 500 characters)"
                        className="w-[558px] h-[176px] rounded-[10px] border-[1px] border-[#FFFFFF66] bg-[#FFFFFF1F] border-solid px-[16px] py-[10px] text-[16px] text-white placeholder-white focus:outline-none focus:border-[#9747FF]"
                      />

                      <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-[371px] h-[41px] rounded-[30px] px-[40px] py-[6px] flex justify-center items-center bg-[#8A38F533] font-semibold text-[16px] text-white"
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </button>

                      {successMsg && (
                        <div className="text-green-400 text-[14px]">{successMsg}</div>
                      )}
                      {errorMsg && (
                        <div className="text-red-500 text-[14px]">{errorMsg}</div>
                      )}
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
}
