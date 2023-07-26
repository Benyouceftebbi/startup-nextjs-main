"use client";
import { useState,useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import { auth,db } from "@/firebase/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc,onSnapshot } from 'firebase/firestore';
import useVIPStatus from "@/stripe/useVIPStatus";
const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [user, setUser] = useState(null);
const cuser=auth.currentUser
const userIsVIP=useVIPStatus(cuser)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
       console.log("hellloooo");
       
        const userRef = doc(db, 'users', user.uid);
        onSnapshot(userRef, (doc) => {
          setUser(doc.data());
      
        });
      } else {
        setUser(null);
    
      }
    });
  
    return () => unsubscribe();
  }, []);
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Pricing Plans"
          paragraph="Choose the Perfect Plan for You and Your Team!"
          center
          width="665px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "2.99" : "29.99"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Unlock Exclusive Benefits."
            plan="price_1NXTB8IYZtC8wS3wzUXFWQER"
          >
            <OfferList text="Get 5 tickets to participate in events or give to your team for tournaments and challenges" status="active" />
            <OfferList text="Discover and connect with unlimited players in your area to play or challenge" status="active" />
            <OfferList text="Participate in exciting and engaging events" status="active" />
            <OfferList text="Create and manage your own dream team" status="active" />
            <OfferList text="Create a lineup, add player positions, and rearrange order" status="active" />
           
       

          </PricingBox>
          <PricingBox
            packageName="Pro"
            price={isMonthly ? "6.99" : "69.99"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="All features of the Basic Plan and More Additional Benefits."
            plan='price_1NXTD5IYZtC8wS3w0IFtYFNL'
          >
            <OfferList text="All features of the Basic Plan" status="active" />
    
            <OfferList text="Access to exclusive tournaments and competitions" status="active" />
            <OfferList text="Dive deep into detailed statistics and analytics for your team" status="active" />
          
          </PricingBox>
          <PricingBox
            packageName="Premuim"
            price={isMonthly ? "9.99" : "99.99"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="All features of the Pro Plan And VIP Support."
            plan="price_1NXTDcIYZtC8wS3w9SMWJRZr"
          >
           <OfferList text="All features of the Pro Plan" status="active" />
            <OfferList text="Get priority assistance for any app-related queries or issues" status="active" />
            <OfferList text="Be the first to experience and explore new features and updates" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
