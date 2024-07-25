// import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { DefaultAccordion } from "./Accordian";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { BiCalendar } from "react-icons/bi";
import { MdOutlineMenuBook } from "react-icons/md";
import rocket_img from "/Images/rocket.png";
import dash_coin_img from "/Images/dash-coin-img.png";
import whatsapp_link_img from "/Images/whatsapp-link.png";
import website_btn_img from "/Images/website-btn.png";
import ScrollTop from "../ScrollToTop/ScrollTop";

const DashPart = () => {
  return (
    <div className="px-[4rem] py-[4rem]">
      <div className="container max-md:w-[100%]">
        <div className="dash-hero grid grid-cols-3 gap-[1rem] max-2xl:grid-cols-1">
          <div className="left-main col-span-2">
            <div className="bg-[white] flex flex-col justify-between gap-[4rem] rounded-xl col-span-2 w-[100%] px-[4rem] py-[4rem] left">
              <div className="flex items-center justify-between gap-[3rem] max-md:flex-col max-md:justify-center max-md:items-center">
                <div className="flex items-center gap-[2rem] max-md:flex-col max-md:text-center leading-[1.6]">
                  <FaWhatsapp size={40} className="text-[green]" />
                  <p className="text-[2rem] font-normal">
                    Setup FREE Whatsapp Business Account
                  </p>
                </div>
                <p className="text-[1.5rem] font-normal">4 Steps Left</p>
              </div>
              <div className="">
                <DefaultAccordion />
              </div>
            </div>
            <div className="px-0 py-[2rem] bg-transparent mt-[1rem] flex flex-col gap-[1rem] rounded-xl">
              <div className="flex items-center justify-between max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-[3rem]">
                <p className="text-[1.8rem] font-medium">
                  Hey User, Welcome to Phyranx
                </p>
                <div className="flex items-center gap-[2rem] max-md:flex-col max-md:gap-[3rem]">
                  <div className="flex items-center gap-[1rem]">
                    <FaPlay size={15} />
                    <p className="text-[1.5rem] font-normal max-md:text-[2rem]">
                      Onboarding Video
                    </p>
                  </div>
                  <div className="flex items-center gap-[1rem]">
                    <FaBoltLightning size={15} />
                    <p className="text-[1.5rem] font-normal max-md:text-[2rem]">
                      Start Tour
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#411560] text-[white] px-[3rem] py-[3rem] rounded-xl flex justify-between gap-[0rem] mt-[2rem] max-md:flex-col max-md:gap-[4rem]">
                <div className="flex flex-col gap-[2rem] max-w-[70%] justify-center max-md:items-center max-md:text-center max-md:justify-center max-md:max-w-[100%] max-md:gap-[3rem]">
                  <p className="font-medium text-[1.8rem] max-md:leading-[1.6]">
                    Start Whatsapp Business for your Business
                  </p>
                  <p className="font-normal text-[1.5rem] leading-[1.6]">
                    Your account is currently in test mode.You can try &
                    experience a feature like Broadcasting, Live chat with your
                    test Contact via Test Business Number Test Business number :
                    +910101010101
                  </p>
                  <p className="font-medium text-[1.8rem] mt-[2rem] max-md:leading-[1.6]">
                    You`ll need to Apply for WhatsApp Business API to use
                    AiSensy for your Business
                  </p>
                  <div className="flex gap-[1rem] mt-[1rem] max-md:flex-col max-md:justify-center">
                    <div className="flex items-center gap-[1rem] bg-[white] rounded-md px-[2rem] py-[1rem] max-md:flex max-md:text-center max-md:leading-[1.6] max-md:items-center max-md:justify-center">
                      <FaWhatsapp size={20} className="text-[#087108]" />
                      <Link
                        to={"/"}
                        className="text-[purple] font-medium text-[1.5rem] tracking-[0]"
                      >
                        Apply For Whatsapp Business API (Free)
                      </Link>
                    </div>
                    <div className="border-[1px] border-[white] rounded-md px-[2rem] py-[1rem] flex items-center gap-[1rem] max-md:flex max-md:items-center max-md:text-center max-md:justify-center">
                      <BiCalendar size={20} className="text-[white]" />
                      <Link
                        to={"/"}
                        className="text-[white] font-normal text-[1.5rem] tracking-[0]"
                      >
                        Schedule Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={rocket_img}
                    alt="rocket img"
                    className="w-[80%] max-md:w-[50%]"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-xl">
              <img
                src={dash_coin_img}
                alt="img"
                className="rounded-xl w-[100%] h-[100%]"
              />
            </div>
            <div className="flex flex-col gap-[2rem] mt-[1rem] bg-[white] rounded-xl px-[3rem] py-[3rem] max-md:items-center max-md:justify-center max-md:text-center">
              <p className="text-[1.8rem] font-medium leading-[1.6]">
                Platform Walkthrough & Tutorials
              </p>
              <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6]">
                <MdOutlineMenuBook size={20} />
                &nbsp;Read Platform Guide
              </Link>
              <div className="grid grid-cols-2 justify-start gap-[6rem] items-start mt-[3rem] max-md:grid-cols-1">
                <div className="flex flex-col gap-[3rem]">
                  <p className="text-[2rem] font-normal">Template</p>
                  <div className="flex flex-col gap-[2rem]">
                    <div className="flex items-center gap-[1rem] max-md:justify-center">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6]">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;How to create whatsapp template message?
                      </Link>
                    </div>
                    <div className="flex items-center gap-[1rem] max-md:justify-center">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6]">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Use chatbot parameters for leads
                      </Link>
                    </div>
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6]">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Add quick reply to whatsapp template message
                      </Link>
                    </div>
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6]">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Message formatting guideline (Bold, Italic & more)
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[3rem]">
                  <p className="text-[2rem] font-normal">Campaign</p>
                  <div className="flex flex-col gap-[2rem] max-md:items-center max-md:text-center">
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6]">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Audience segregation for whatsapp broadcast
                      </Link>
                    </div>
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6]">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Upgrade whatsapp tier limit
                      </Link>
                    </div>
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6]">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Import upto 2 lakh contacts in one go
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[3rem] max-md:items-center max-md:text-center max-md:justify-center">
                  <p className="text-[2rem] font-normal">
                    Live Chat And Attribute
                  </p>
                  <div className="flex flex-col gap-[2rem] max-md:justify-center max-md:items-center max-md:text-center">
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6] max-md:justify-center">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Add User attributes manually
                      </Link>
                    </div>
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6] max-md:justify-center">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Add/Remove tag & update attribute
                      </Link>
                    </div>
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6] max-md:justify-center">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Send & generate media link
                      </Link>
                    </div>
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6] max-md:justify-center">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Create Live chat without chatbot
                      </Link>
                    </div>
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6] max-md:justify-center">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Add first message tag
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[3rem] max-md:items-center max-md:justify-center max-md:text-center">
                  <p className="text-[2rem] font-normal">Chatbot Integration</p>
                  <div className="flex flex-col gap-[2rem] max-md:items-center max-md:justify-center max-md:text-center">
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6]">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Setup welcome whatsapp chatbot
                      </Link>
                    </div>
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6]">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Create whatsapp button for free
                      </Link>
                    </div>
                    <div className="flex items-center gap-[1rem]">
                      <Link className="flex items-center gap-[0.2rem] font-normal text-[1.8rem] tracking-[0] hover:underline max-md:flex-col max-md:leading-[1.6]">
                        <MdOutlineMenuBook size={20} />
                        &nbsp;Create whatsapp link for free
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-main">
            <div className="bg-[white] rounded-xl w-[100%] mb-auto px-[4rem] py-[4rem] right">
              <div className="flex flex-col gap-[2rem] max-md:items-center max-md:justify-center max-md:text-center max-md:leading-[1.6]">
                <p className="text-[2rem] font-normal ">
                  Account Status:{" "}
                  <span className="text-[1.8rem]">Test Mode</span>
                </p>
                <p className="text-[1.5rem] font-normal max-md:leading-[1.6]">
                  Test mode enables you to explore Broadcasting and Live Chat
                  features of AiSensy before applying for WhatsApp API
                </p>
                <p className="text-[1.6rem] font-normal">
                  Test Business Number: <span>+01010101</span>
                </p>
                <p className="font-normal text-[1.6rem]">Test Contact</p>
                <p className="text-[1.5rem] text-[brown]">
                  Recharge WhatsApp Conversation Credits to get started.
                </p>
                <div className="flex flex-col gap-[2rem] mt-[1rem]">
                  <div className="flex justify-between items-center max-md:flex-col max-md:justify-center max-md:text-center max-md:items-center max-md:gap-[1rem]">
                    <label htmlFor="name" className="font-medium text-[1.5rem]">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Enter Name"
                      required
                      autoComplete="off"
                      className="border-[1px] rounded-md border-[black] px-[2rem] py-[0.5rem] text-[1.5rem] outline-0 max-md:text-center"
                    />
                  </div>
                  <div className="flex justify-between items-center max-md:flex-col max-md:justify-center max-md:text-center max-md:items-center max-md:gap-[1rem]">
                    <label
                      htmlFor="number"
                      className="font-medium text-[1.5rem]"
                    >
                      Whatsapp Number
                    </label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Whatsapp Number"
                      required
                      autoComplete="off"
                      className="border-[1px] rounded-md border-[black] px-[2rem] py-[0.5rem] text-[1.5rem] outline-0 max-md:text-center"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-[1rem] mt-[1rem] max-md:flex-col">
                    <Link
                      to={"/"}
                      className="font-medium text-[1.5rem] tracking-[0] border-[1px] border-[grey] text-[white] bg-[grey] px-[2rem] py-[1rem] w-[100%] text-center rounded-md"
                    >
                      Try Broadcasting
                    </Link>
                    <Link
                      to={"/"}
                      className="font-medium text-[1.5rem] tracking-[0] border-[1px] border-[grey] px-[2rem] py-[1rem] w-[100%] text-center rounded-md text-[grey]"
                    >
                      Try Live Chat
                    </Link>
                  </div>
                  <div className="flex flex-col gap-[1rem] mt-[1rem]">
                    <div className="line h-[1px] w-[100%] bg-[grey]"></div>
                    <p className="font-normal text-[1.5rem] text-center">
                      Wish to setup AiSensy for your Businessz?
                    </p>
                    <Link
                      to={"/"}
                      className="tracking-[0] font-normal text-[1.5rem] text-center w-[100%] flex items-center justify-center bg-[#00ab00] px-[2rem] py-[1rem] text-[white] rounded-xl max-md:leading-[1.6]"
                    >
                      Free Whatsapp Business API
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[white] rounded-xl px-[4rem] py-[4rem] mt-[1rem] flex flex-col gap-[3rem]">
              <div className="flex justify-between items-center max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center max-md:gap-[2rem] max-md:leading-[1.6]">
                <p className="text-[1.8rem] font-normal">
                  Free Service Conversation
                </p>
                <p className="font-medium text-[1.5rem]">0/1000 used</p>
              </div>
              <div className="flex flex-col gap-[0.5rem]">
                <div className="h-[100%] w-[100%] bg-[#3e61ac] rounded-full">
                  <div className="h-full w-[30%]">
                    <p className="text-[white] text-[1.5rem] px-[2rem] py-[0.2rem] bg-[#f3a20b] rounded-l-full">
                      30%
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-[0]">
                  <p className="text-[1.5rem]">0</p>
                  <p className="text-[1.5rem]">1000</p>
                </div>
              </div>
              <p className="text-[1.8rem] font-normal max-md:text-center max-md:leading-[1.6]">
                Whatsapp Conversation Credits (WCC)
              </p>
              <div className="flex justify-between items-center mt-[1rem] max-md:flex-col max-md:gap-[3rem] max-md:items-center max-md:justify-center max-md:text-center">
                <p className="text-[2.5rem] font-medium">₹ 0.00</p>
                <div className="">
                  <Link
                    to={"/"}
                    className="bg-[#0c213b] text-[white] px-[2rem] py-[1rem] rounded-md text-[1.5rem] tracking-[1px]"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[white] rounded-xl px-[4rem] py-[4rem] mt-[1rem] flex flex-col gap-[2rem]">
              <p className="text-[1.8rem] font-normal max-md:text-center max-md:leading-[1.6]">Advertisement Credits</p>
              <div className="flex justify-between items-center mt-[1rem] max-md:flex-col max-md:gap-[3rem] max-md:items-center max-md:justify-center max-md:text-center">
                <p className="text-[2.5rem] font-medium">₹ 0.00</p>
                <div className="">
                  <Link
                    to={"/"}
                    className="text-[black] border-[1px] border-[black] px-[2rem] py-[1rem] rounded-md text-[1.5rem] tracking-[1px]"
                  >
                    Buy Credits
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[white] rounded-xl px-[4rem] py-[4rem] mt-[1rem] flex flex-col gap-[2rem] max-md:items-center max-md:justify-center max-md:text-center">
              <div className="flex flex-col gap-[2rem] max-md:items-center max-md:justify-center max-md:text-center max-md:leading-[1.6]">
                <img src={whatsapp_link_img} alt="img" className="w-[15%]" />
                <div className="">
                  <Link
                    to={"/"}
                    className="text-[1.5rem] font-medium tracking-[0]"
                  >
                    Customize Whatsapp Link
                  </Link>
                </div>
                <p className="font-normal text-[1.5rem]">
                  Create sharable links & QR for your WA business number
                </p>
              </div>
            </div>
            <div className="bg-[white] rounded-xl px-[4rem] py-[4rem] mt-[1rem] flex flex-col gap-[2rem]">
              <div className="flex flex-col gap-[2rem] max-md:items-center max-md:justify-center max-md:text-center max-md:leading-[1.6]">
                <img src={website_btn_img} alt="img" className="w-[15%]" />
                <div className="">
                  <Link
                    to={"/"}
                    className="text-[1.5rem] font-medium tracking-[0]"
                  >
                    Whatsapp Website Button
                  </Link>
                </div>
                <p className="font-normal text-[1.5rem]">
                  Drive Whatsapp sales with personalized CTAs
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-3 gap-[1rem] mt-[2rem]">
          <div className="left px-[2rem] bg-[white] py-[2rem] col-span-2"></div>
          <div className="right px-[2rem] bg-[white] py-[2rem] mt-auto mb-auto"></div>
        </div> */}
        <ScrollTop />
      </div>
    </div>
  );
};

export default DashPart;
