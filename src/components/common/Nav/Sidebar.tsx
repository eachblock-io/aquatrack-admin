"use client";

import Link from "next/link";
import React from "react";
import Logo from "../../../../public/images/Logo";
import Image from "next/image";
import { FaCcMastercard } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import toast from "react-hot-toast";

const Sidebar = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const handleLogout = async () => {
    try {
      const res = await axios.post(`/api/logout`);
      if (res?.status == 200) {
        push("/");
      }
    } catch (error) {
      toast.error("Fail to log out");
    }
  };
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <div className="flex h-16 items-center border-b border-r-0 px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/account"
            className="flex items-center gap-2 font-semibold">
            <Logo classname="mx-auto sm:mx-0 w-36 min-h-8 h-10" />
          </Link>
        </div>

        <div className="flex-1  pt-10">
          <nav className="flex flex-col gap-y-3 pt-3 items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/account"
              className={`${
                pathname === "/account" ? " bg-[#F0F2F5] rounded-[12px]" : ""
              } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}>
              <Image
                src={"/icon/homeIcon.svg"}
                height={16}
                width={16}
                alt={""}
              />
              Dashboard
            </Link>
            <Link
              href="/account/users"
              className={`${
                pathname === "/account/users" || pathname === `/users/`
                  ? "bg-[#F0F2F5] rounded-[12px]"
                  : ""
              } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}>
              <Image
                src={"/icon/userIcon.svg"}
                height={16}
                width={16}
                alt={""}
              />
              Users
            </Link>

            <Link
              href="/account/subscription"
              className={`${
                pathname === "/account/subscription"
                  ? "bg-[#F0F2F5] rounded-[12px]"
                  : ""
              } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}>
              <FaCcMastercard />
              Subscription
            </Link>
            <Link
              href="/account/settings"
              className={`${
                pathname === "/account/settings"
                  ? "bg-[#F0F2F5] rounded-[12px]"
                  : ""
              } transition duration-300 flex items-center w-full gap-3 rounded-lg px-3 py-2`}>
              <Image
                src={"/icon/settingsIcon.svg"}
                height={16}
                width={16}
                alt={""}
              />
              Settings
            </Link>

            <Button
              onClick={handleLogout}
              variant="ghost"
              className="flex items-center justify-between mt-10 space-x-2 text-red-500 hover:text-red-500 focus:bg-[#ea1c0115] focus:text-red-500  rounded-xl transition-all">
              <FiLogOut className="h-4 w-4" />
              <p>Log Out</p>
            </Button>
          </nav>
        </div>
      </div>

      {/* <div className="mt-auto p-4 flex flex-col gap-y-5">
        <Link href={""}>
          <button className="w-full h-[40px] bg-[#02579E] text-white rounded-[10px]">
            New report
          </button>
        </Link>
        <ul className="ms-3 gap-y-3 flex flex-col">
          <Link href={""}>
            <li className="flex gap-x-2 items-center">
              <Image src={"/icon/que.svg"} alt={""} width={24} height={24} />
              <span>Help and feedback</span>
            </li>
          </Link>

          <Link href={""}>
            <li className="flex gap-x-2 items-center">
              <Image
                src={"/icon/reference.svg"}
                alt={""}
                width={24}
                height={24}
              />
              <span>API reference</span>
            </li>
          </Link>

          <Link href={""}>
            <li className="flex gap-x-2 items-center">
              <Image src={"/icon/heart.svg"} alt={""} width={24} height={24} />
              <span>Status</span>
            </li>
          </Link>
        </ul>
      </div> */}
    </div>
  );
};

export default Sidebar;
