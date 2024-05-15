"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DashboardTable } from "./Table/Tables";
import { useGetCurrentUserQuery } from "@/redux/services/userApiSlice";
import PaginationTable from "./PaginationTable";

const MainScreen = () => {
  const { isLoading: loading, data } = useGetCurrentUserQuery(null);
  console.log(data?.data?.users);
  return (
    <div className=" min-h-full w-full lg:px-5">
      {/* <div>
        <ul className="lg:mx-6 mx-4 cursor-pointer flex gap-x-5 text-xs md:text-base mt-4 border-b-2">
          <li
            className={`${
              selectedItem === "today"
                ? "border-b-4 pb-3 border-[#02579E] text-[#02579E]"
                : ""
            } transition duration-300`}
            onClick={() => setSelectedItem("today")}>
            Today
          </li>
          <li
            className={`${
              selectedItem === "yesterday"
                ? "border-b-4 pb-3 border-[#02579E] text-[#02579E]"
                : ""
            } transition duration-300`}
            onClick={() => setSelectedItem("yesterday")}>
            Yesterday
          </li>
          <li
            className={`${
              selectedItem === "last7days"
                ? "border-b-4 pb-3 border-[#02579E] text-[#02579E]"
                : ""
            } transition duration-300`}
            onClick={() => setSelectedItem("last7days")}>
            Last 7 days
          </li>
          <li
            className={`${
              selectedItem === "last30days"
                ? "border-b-4 pb-3 border-[#02579E] text-[#02579E]"
                : ""
            } transition duration-300`}
            onClick={() => setSelectedItem("last30days")}>
            Last 30 days
          </li>
        </ul>
      </div> */}
      <main className="p-4 lg:p-6 w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full lg:hidden flex  mb-10">
          <AccordionItem className="border-b w-full" value="item-1">
            <AccordionTrigger className="py-4">
              <span className="font-bold text-lg ps-1">Activites</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 grid-cols-2 pt-1 w-full">
                <Card className="bg-[#FFFFFF]">
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-semibold text-left w-full">
                      Total signups
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-base font-bold">
                      {data?.data?.card_data?.total_signups}
                    </div>
                    {/* <p className="text-xs pt-2 font-bold text-[#088738]">
                      +15%
                    </p> */}
                  </CardContent>
                </Card>
                <Card className="bg-[#FFFFFF]">
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-semibold text-left w-full">
                      Paid Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-base font-bold">
                      {data?.data?.card_data?.paid_users}
                    </div>
                    {/* <p className="text-xs pt-2 font-bold text-[#088738]">
                      +10%
                    </p> */}
                  </CardContent>
                </Card>
                <Card className="bg-[#FFFFFF]">
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-semibold text-left w-full">
                      Free Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-base font-bold">
                      {" "}
                      {data?.data?.card_data?.free_users}
                    </div>
                    {/* <p className="text-xs pt-2 font-bold text-[#088738]">
                      +20%
                    </p> */}
                  </CardContent>
                </Card>
                <Card className="bg-[#FFFFFF]">
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-semibold text-left w-full">
                      Active
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-base font-bold">
                      {" "}
                      {data?.data?.card_data?.active_users}
                    </div>
                    {/* <p className="text-xs pt-2 font-bold text-[#088738]">+5%</p> */}
                  </CardContent>
                </Card>
                <Card className="bg-[#FFFFFF]">
                  <CardHeader className="items-center text-left space-y-0 pb-2">
                    <CardTitle className="text-sm font-semibold text-left w-full">
                      Inactive users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-base font-bold">
                      {data?.data?.card_data?.inactive_users}
                    </div>
                    {/* <p className="text-xs pt-2 font-bold text-[#088738]">
                      +15%
                    </p> */}
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="lg:flex hidden w-full mb-10">
          <div className="grid gap-6 md:grid-cols-2 pt-1 lg:grid-cols-5 w-full">
            <Card className="bg-[#FFFFFF]">
              <CardHeader className="items-center text-left space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-left w-full">
                  Total signups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {data?.data?.card_data?.total_signups}
                </div>
                {/* <p className="text-xs pt-2 font-bold text-[#088738]">
                      +15%
                    </p> */}
              </CardContent>
            </Card>
            <Card className="bg-[#FFFFFF]">
              <CardHeader className="items-center text-left space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-left w-full">
                  Paid Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {data?.data?.card_data?.paid_users}
                </div>
                {/* <p className="text-xs pt-2 font-bold text-[#088738]">
                      +10%
                    </p> */}
              </CardContent>
            </Card>
            <Card className="bg-[#FFFFFF]">
              <CardHeader className="items-center text-left space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-left w-full">
                  Free Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {" "}
                  {data?.data?.card_data?.free_users}
                </div>
                {/* <p className="text-xs pt-2 font-bold text-[#088738]">
                      +20%
                    </p> */}
              </CardContent>
            </Card>
            <Card className="bg-[#FFFFFF]">
              <CardHeader className="items-center text-left space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-left w-full">
                  Active
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {" "}
                  {data?.data?.card_data?.active_users}
                </div>
                {/* <p className="text-xs pt-2 font-bold text-[#088738]">+5%</p> */}
              </CardContent>
            </Card>
            <Card className="bg-[#FFFFFF]">
              <CardHeader className="items-center text-left space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-left w-full">
                  Inactive users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {data?.data?.card_data?.inactive_users}
                </div>
                {/* <p className="text-xs pt-2 font-bold text-[#088738]">
                      +15%
                    </p> */}
              </CardContent>
            </Card>
          </div>
        </div>

        <PaginationTable />
      </main>
    </div>
  );
};

export default MainScreen;
