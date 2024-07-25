import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiMoneyRupeeCircleLine, RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GrCubes } from "react-icons/gr";
import { FaTag } from "react-icons/fa6";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Live Chat", link: "/test", icon: AiOutlineUser },
    { name: "history", link: "/", icon: FiMessageSquare },
    { name: "contacts", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "campaigns", link: "/", icon: FiFolder },
    { name: "ads manager", link: "/", icon: FiShoppingCart },
    { name: "flows", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "WA Pay", link: "/", icon: RiMoneyRupeeCircleLine },
    { name: "Manage", link: "/", icon: RiSettings4Line },
    { name: "Integrations", link: "/", icon: GrCubes },
    { name: "EComm+", link: "/", icon: FaTag },
  ];

  return (
    <div
      className={`bg-[#113841] min-h-screen ${
        open ? `w-80 max-lg:w-[30%] max-md:min-w-[100%] z-[1001]` : "w-24 z-[1001]"
      } duration-300 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-start fixed max-md:justify-center">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-[8rem] flex flex-col gap-4 fixed justify-center">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && "mt-[2rem]"
            } group flex items-center justify-start gap-3.5 font-thin tracking-[1px] p-2 hover:bg-gray-800 rounded-md capitalize text-[1.5rem] max-md:text-[2rem]`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
