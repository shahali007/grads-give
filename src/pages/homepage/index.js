import React, { useRef, useState } from "react";
import HomePageBanner from '../../components/homepage-banner'
import CompanyAbout from "../../components/company-about";
import BoardOfLeaders from '../../components/company-board-of-leaders'
import CompanyMission from '../../components/company-mission'
import CompanyProcess from '../../components/company-process'
import CompanyWorks from '../../components/company-works'
import CompanyFAQ from '../../components/company-faqs'
import StudentsRequirements from '../../components/students-reqirements'
import ContactUs from '../../components/contact-us'
import Footer from '../../components/footer'
import Navbar from "../../components/navbar";
import { IoMdMenu } from "react-icons/io";
import SidebarDynamic from "./SidebarDynamic";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerRef = useRef(null);
  const sidebarRef = useRef(null);

  const closeSidebarWhenClickedOutside = (ref, hamburgerRef) => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };

  closeSidebarWhenClickedOutside(sidebarRef, hamburgerRef);

  return (
    <div className="relative">
      <button
        className="flex h-10 w-full justify-end pr-6 items-center group lg:hidden"
        onClick={() => setIsOpen((prevState) => !prevState)}
        ref={hamburgerRef}
      >
        <IoMdMenu size={35} color="#222222" />
      </button>

      <SidebarDynamic
        isOpen={isOpen}
        sidebarRef={sidebarRef}
        setIsOpen={setIsOpen}
      />

      <Navbar />
      <HomePageBanner />
      <CompanyAbout />
      <BoardOfLeaders />
      <CompanyMission />
      <CompanyProcess />

      <CompanyWorks />
      <CompanyFAQ />
      <StudentsRequirements />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
