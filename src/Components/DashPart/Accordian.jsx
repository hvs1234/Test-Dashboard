import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { FaClipboardUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineMenuBook } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

export function DefaultAccordion() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} className="w-[100%] mb-[2rem]">
        <AccordionHeader
          className="bg-[#ecf8ff] px-[2rem] py-[2rem] rounded-t-xl text-[1.8rem] font-medium flex items-center justify-between mb-auto w-[100%]  max-md:items-center max-md:flex-col max-md:justify-start max-md:gap-[3rem]"
          onClick={() => handleOpen(1)}
        >
          <div className="flex items-center text-start leading-[1.8] gap-[2rem] w-[100%] max-md:flex-col max-md:items-center">
            <FaUpRightFromSquare
              size={40}
              className="bg-[#ffc226] rounded-3xl text-[#093454] px-[1rem] py-[1rem]"
            />
            <p className="text-[1.5rem] font-medium text-center">
              Apply For Whatsapp Business API
            </p>
          </div>
          <div className="text-[2rem] flex justify-end w-[100%] max-md:justify-center">
            <IoChevronDownCircleOutline size={26} />
          </div>
        </AccordionHeader>
        <AccordionBody className="px-[3rem] py-[3rem] bg-[#ecf8ff] rounded-b-xl text-[1.5rem] font-normal leading-[1.5] flex flex-col gap-[2rem] max-md:justify-start max-md:gap-[3rem] max-md:text-center max-md:items-center max-sm:leading-[1.6]">
          <p className="font-normal">
            Click on Continue With Facebook to apply for WhatsApp Business API
          </p>
          <p className="font-normal">
            Requirements to apply for WhatsApp Business API
          </p>
          <p className="font-normal">
            A Registered Business & Working Website.
          </p>
          <Link
            to={"/"}
            className="hover:underline tracking-[0] font-medium text-[1.5rem]"
          >
            <div className="flex items-center gap-[0.2rem] font-normal max-md:flex-col">
              <MdOutlineMenuBook size={20} />
              &nbsp;How to apply for Whatsapp Business API?
            </div>
          </Link>
          <div className="flex items-center justify-end gap-[2rem] max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center max-md:leading-[1.6]">
            <Link
              to={"/"}
              className="text-[1.5rem] tracking-[1px] border-[1px] border-[grey] rounded-xl px-[1rem] py-[1rem]"
            >
              <div className="flex items-center justify-center gap-[1rem] max-md:flex-col">
                <SlCalender />
                &nbsp;Schedule Meeting
              </div>
            </Link>
            <Link
              to={"/"}
              className="text-[1.5rem] tracking-[1px] bg-[#4453f2] px-[1rem] py-[1rem] text-[white] rounded-xl"
            >
              &nbsp;Countinue With Facebook
            </Link>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="w-[100%] mb-[2rem]">
        <AccordionHeader
          className="bg-[white] border-[1px] border-[grey] px-[2rem] py-[2rem] rounded-t-xl text-[1.8rem] font-medium flex items-center justify-between w-[100%] max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[2rem]"
          onClick={() => handleOpen(2)}
        >
          <div className="flex items-center gap-[2rem] w-[100%] max-md:flex-col max-md:text-center max-md:items-center">
            <FaClipboardUser size={26} className="text-[grey]" />
            <p className="text-[1.5rem] font-medium text-start leading-[1.8] max-md:text-center">
              Increase Your Messaging limit & get your display name verified
            </p>
          </div>
          <div className="text-[2rem] flex justify-end w-[100%] max-md:justify-center">
            <IoChevronDownCircleOutline size={26} />
          </div>
        </AccordionHeader>
        <AccordionBody className="px-[3rem] py-[3rem] bg-[white] border-[grey] border-[1px] border-t-0 rounded-b-xl text-[1.5rem] font-normal leading-[1.5] flex flex-col gap-[2rem] max-md:text-center max-md:items-center max-md:leading-[1.6]">
          <p className="font-normal">
            Complete your KYC to boost your messaging limit to 1000 and verify
            your display name
          </p>
          <p className="font-normal">
            • Firstly, ensure you have an active website prior to applying for
            KYC
          </p>
          <p className="font-normal">
            • Ensure to use director`s Aadhaar card listed on your GST document
          </p>
          <div className="mt-[1rem]">
            <Link
              to={"/"}
              className="bg-[#dedede] font-normal text-[grey] text-[1.5rem] tracking-[1px] px-[1rem] py-[0.5rem] rounded-xl"
            >
              Start KYC
            </Link>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="w-[100%] mb-[2rem]">
        <AccordionHeader
          className="bg-[white] border-[1px] border-[grey] px-[2rem] py-[2rem] rounded-t-xl text-[1.8rem] font-medium flex items-center justify-between w-[100%] max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center max-md:gap-[2rem]"
          onClick={() => handleOpen(3)}
        >
          <div className="flex items-center gap-[2rem] w-[100%] max-md:flex-col">
            <FaUserCircle size={26} className="text-[grey]" />
            <p className="text-[1.5rem] font-medium">Setup Your Profile</p>
          </div>
          <div className="text-[2rem] flex justify-end w-[100%] max-md:justify-center">
            <IoChevronDownCircleOutline size={26} />
          </div>
        </AccordionHeader>
        <AccordionBody className="px-[3rem] py-[3rem] bg-[white] border-[grey] border-[1px] border-t-0 rounded-b-xl text-[1.5rem] font-normal leading-[1.5] flex flex-col gap-[2rem] max-md:text-center max-md:leading-[1.6] max-md:items-center">
          <p className="text-[1.5rem] font-normal">
            Customize your WhatsApp profile, to help understand your customers
            well.
          </p>
          <Link className="flex items-center gap-[0.2rem] text-[1.5rem] hover:underline font-normal tracking-[0] max-md:flex-col">
            <MdOutlineMenuBook size={20} />
            &nbsp;How to Edit Business Profile?
          </Link>
          <div className="mt-[1rem]">
            <Link
              to={"/"}
              className="bg-[#dedede] font-normal text-[grey] text-[1.5rem] tracking-[1px] px-[1rem] py-[0.5rem] rounded-xl"
            >
              Edit Profile
            </Link>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} className="w-[100%] mb-[2rem]">
        <AccordionHeader
          className="bg-[white] border-[1px] border-[grey] px-[2rem] py-[2rem] rounded-t-xl text-[1.8rem] font-medium flex items-center justify-between w-[100%] max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center max-md:gap-[2rem]"
          onClick={() => handleOpen(4)}
        >
          <div className="flex items-center gap-[2rem] w-[100%] max-md:flex-col max-md:items-center">
            <FaCheckCircle size={26} className="text-[#05e505]" />
            <p className="text-[1.5rem] font-medium">Apply For Green Tick</p>
          </div>
          <div className="text-[2rem] flex justify-end w-[100%] max-md:justify-center">
            <IoChevronDownCircleOutline size={26} />
          </div>
        </AccordionHeader>
        <AccordionBody className="px-[3rem] py-[3rem] bg-[white] border-[grey] border-[1px] border-t-0 rounded-b-xl text-[1.5rem] font-normal leading-[1.5] flex flex-col gap-[2rem] max-md:text-center max-md:leading-[1.6] max-md:items-center">
          <p className="font-normal text-[1.5rem]">
            Get Verified Green Tick on your Whatsapp.
          </p>
          <p className="font-normal text-[1.5rem]">
            • Complete your Facebook manager verification to proceed with green
            tick for your business.
          </p>
          <p className="font-normal text-[1.5rem]">
            • For any help contact AiSensy Support
          </p>
          <div className="flex flex-col gap-[2rem] mt-[3rem] max-md:items-center">
            <Link className="flex items-center gap-[0.2rem] text-[1.5rem] hover:underline font-normal tracking-[0] max-md:flex-col max-md:items-center max-md:text-center">
              <MdOutlineMenuBook size={20} />
              &nbsp;How to Apply For FB Verification?
            </Link>
            <Link className="flex items-center gap-[0.2rem] text-[1.5rem] hover:underline font-normal tracking-[0] max-md:flex-col max-md:items-center max-md:text-center">
              <MdOutlineMenuBook size={20} />
              &nbsp;FB Verification button grayed out?
            </Link>
            <Link className="flex items-center gap-[0.2rem] text-[1.5rem] hover:underline font-normal tracking-[0] max-md:flex-col max-md:items-center max-md:text-center">
              <MdOutlineMenuBook size={20} />
              &nbsp;Whatsapp Green Tick
            </Link>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
}
