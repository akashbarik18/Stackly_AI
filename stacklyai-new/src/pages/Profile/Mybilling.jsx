

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Banner from "../../assets/profile/banner.jpg";
import Pimage from "../../assets/profile/pimage.png";
import { toast } from 'react-toastify';

export default function MyBilling() {
  const [profileData, setProfileData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    profile_pic: null,
    previewImage: Pimage
  });

  const [subscriptionData, setSubscriptionData] = useState({
    current_plan: 'Basic',
    duration: 'Monthly',
    total_members: 1,
    discount_price: 0
  });

  const [billingHistory, setBillingHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchData = async () => {
    try {
      let userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      // If no direct userId, fallback to userInfo
      if (!userId) {
        const userInfoRaw = localStorage.getItem("userInfo");
        if (userInfoRaw) {
          try {
            const userInfo = JSON.parse(userInfoRaw);
            userId = userInfo.userId || userInfo.id;
          } catch (err) {
            console.warn("Failed to parse userInfo from localStorage", err);
          }
        }
      }

      if (!token) throw new Error("No authentication token found");
      if (!userId) throw new Error("No user ID found in storage");

      // Fetch profile data
      const profileResponse = await axios.get("http://localhost:8000/profile", {
        params: { userid: userId },
        headers: { Authorization: `Bearer ${token}` },
      });

      const profilePicUrl = profileResponse.data.profile_pic
        ? (profileResponse.data.profile_pic.startsWith("/media/profile_pics")
            ? `http://localhost:8000${profileResponse.data.profile_pic}`
            : profileResponse.data.profile_pic)
        : Pimage;

      setProfileData((prev) => ({
        ...prev,
        first_name: profileResponse.data.first_name || "",
        last_name: profileResponse.data.last_name || "",
        email: profileResponse.data.email || "",
        phone_number: profileResponse.data.phone_number || "",
        profile_pic: profileResponse.data.profile_pic,
        previewImage: profilePicUrl,
      }));

      // Fetch subscription data
      const subscriptionResponse = await axios.get("http://localhost:8000/subscription", {
        params: { userid: userId },
        headers: { Authorization: `Bearer ${token}` },
      });

      const subData = subscriptionResponse.data;
      setSubscriptionData({
        current_plan: subData.current_plan || "Basic",
        duration: subData.duration || "Monthly",
        total_members: subData.total_members || 1,
        discount_price: subData.discount_price || subData.original_price || 0,
      });

      // Fetch billing history
      const billingHistoryResponse = await axios.get("http://localhost:8000/billing/history", {
        params: { userid: userId }, // make sure backend filters by user
        headers: { Authorization: `Bearer ${token}` },
      });

      setBillingHistory(billingHistoryResponse.data.billing_history || []);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.response?.data?.detail || "Failed to load data");
      toast.error(err.response?.data?.detail || "Failed to load billing data");

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
      <section className="absolute top-[321px] left-[251px] w-[1094px] h-auto overflow-y-auto rounded-[8px] border border-[#FFFFFF1F] bg-[#FFFFFF0A] p-[32px] flex flex-col  mb-5">

        {/* Header */}
        <div className="flex justify-center items-center w-[173px] h-[38px] rounded-[4px] border-b border-[#0000004D] bg-[#0000004D] px-[12px] py-[4px] opacity-100">
          <h2 className="text-[20px] poppins-font text-white">Billing</h2>
        </div>
        <div className="w-full flex flex-col gap-[20px] mx-auto max-w-[800px] mt-[20px]">
          {/* Header */}
          <div className="w-[657px] h-[30px] text-[20px] font-normal poppins-font text-white text-center leading-[30px] opacity-100 mx-auto">
            Your <span className="text-[#9747FF]">Active</span> Plan!
          </div>


          {/* Plan Details */}
          <div className="flex justify-center gap-[67px]">
            <div className="w-[159px] h-[61px] rounded-[12px] border-[1px] border-solid border-[#9747FF33] bg-gradient-to-r from-[rgba(151,71,255,0.12)] to-[rgba(91,43,153,0.12)] flex items-center justify-center px-[20px] gap-[2px] opacity-100 text-center">
              <span className="text-white text-[12px] font-normal poppins-font">Current Plan:</span>
              <span className="text-[#9747FF] text-[14px] font-medium poppins-font">Basic</span>
            </div>

            <div className="w-[197px] h-[61px] rounded-[12px] border-[1px] border-solid border-[#9747FF33] bg-gradient-to-r from-[rgba(151,71,255,0.12)] to-[rgba(91,43,153,0.12)] flex items-center justify-center px-[20px] gap-[2px] opacity-100 text-center">
              <span className="text-white text-[12px] font-normal poppins-font">Duration period:</span>
              <span className="text-[#9747FF] text-[14px] font-medium poppins-font">Monthly</span>
            </div>

            <div className="w-[159px] h-[61px] rounded-[12px] border-[1px] border-solid border-[#9747FF33] bg-gradient-to-r from-[rgba(151,71,255,0.12)] to-[rgba(91,43,153,0.12)] flex items-center justify-center px-[20px] gap-[2px] opacity-100 text-center">
              <span className="text-white text-[12px] font-normal poppins-font">Total members:</span>
              <span className="text-[#9747FF] text-[14px] font-medium poppins-font">1</span>
            </div>
          </div>

          {/* Spacer to push Credits to bottom */}
          <div className="flex-1"></div>

          {/* Credits & Renewal (Pinned at bottom) */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-3">
              {/* First Row */}
              <div className="flex justify-between gap-3">
                <div className="flex-1 flex flex-col gap-2 items-start">
                  <span className="text-[16px] text-white">Monthly Design Credits</span>
                  <div className="w-[321px] h-[45px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] bg-[#FFFFFF1F] flex items-center justify-start font-medium text-white px-3 gap-[10px] opacity-100">
                    30
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2 items-start">
                  <span className="text-[16px] text-white">Used Design Credits</span>
                  <div className="w-[321px] h-[45px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] bg-[#FFFFFF1F] flex items-center justify-start font-medium text-white px-3 gap-[10px]">
                    5
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex justify-between gap-3">
                <div className="flex-1 flex flex-col gap-2 items-start">
                  <span className="text-[16px] text-white">Balance Design Credits</span>
                  <div className="w-[321px] h-[45px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] bg-[#FFFFFF1F] flex items-center justify-between px-3">
                    <span className="font-medium text-white">25</span>
                  </div>
                  <span className="text-[14px] text-[#6E6E6E]">*Stay updated for your remaining balance</span>
                </div>

                <div className="flex-1 flex flex-col gap-2 items-start">
                  <span className="text-[16px] text-white">Renews on</span>
                  <div className="w-[321px] h-[45px] rounded-[12px] border-[1px] border-solid border-[#FFFFFF66] bg-[#FFFFFF1F] flex items-center justify-between px-3">
                    <span className="font-medium text-white">25 September 2025</span>
                  </div>
                  <span className="text-[14px] text-[#6E6E6E]">*Stay specified as your received time</span>
                </div>
              </div>
            </div>
          </div>
          {/* Billing form */}
           {/* Billing History Section */}
        <div className="mb-8">
         
          
          {/* Table */}
          <div className="w-full rounded-[8px] overflow-hidden border border-[#FFFFFF33]">
            {/* Table Header */}
            <div className="flex bg-[#FFFFFF1A] text-white text-[14px] font-medium">
              <div className="flex-1 p-3 border-r border-[#FFFFFF33]">Date</div>
              <div className="flex-1 p-3 border-r border-[#FFFFFF33]">Amount</div>
              <div className="flex-1 p-3 border-r border-[#FFFFFF33]">Payment Method</div>
              <div className="flex-1 p-3 border-r border-[#FFFFFF33]">Status</div>
              <div className="flex-1 p-3">Invoice</div>
            </div>
            
            {/* Table Rows */}
            <div className="bg-[#FFFFFF0D]">
              {billingHistory.length > 0 ? (
                billingHistory.map((bill, index) => (
                  <div key={index} className="flex text-white text-[14px] border-b border-[#FFFFFF33] last:border-b-0">
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33]">{bill.date || 'N/A'}</div>
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33]">${bill.amount || 'XXXX'}</div>
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33]">{bill.payment_method || 'Credit Card'}</div>
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33] text-[#00FF00]">{bill.status || 'Completed'}</div>
                    <div className="flex-1 p-3 text-[#9747FF] cursor-pointer hover:underline">View</div>
                  </div>
                ))
              ) : (
                // Fallback data if no billing history
                <>
                  <div className="flex text-white text-[14px] border-b border-[#FFFFFF33]">
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33]">01-Mar-25</div>
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33]">$XXXX</div>
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33]">Credit Card</div>
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33] text-[#00FF00]">Completed</div>
                    <div className="flex-1 p-3 text-[#9747FF] cursor-pointer hover:underline">View</div>
                  </div>
                  <div className="flex text-white text-[14px] border-b border-[#FFFFFF33]">
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33]">01-Feb-25</div>
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33]">$XXXX</div>
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33]">Credit Card</div>
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33] text-[#00FF00]">Completed</div>
                    <div className="flex-1 p-3 text-[#9747FF] cursor-pointer hover:underline">View</div>
                  </div>
                  <div className="flex text-white text-[14px]">
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33]">01-Jan-25</div>
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33]">$XXXX</div>
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33]">Credit Card</div>
                    <div className="flex-1 p-3 border-r border-[#FFFFFF33] text-[#00FF00]">Completed</div>
                    <div className="flex-1 p-3 text-[#9747FF] cursor-pointer hover:underline">View</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        </div>
      </section>
    </div>
  );
}
