"use client";

import React, { useState } from "react";
import SingleDashboardMetrics from "./Metrics";
import SingleDetailStats from "./Stats";
import Form from "./FormPreview";
import Link from "next/link";
import Image from "next/image";
import {
  useDeactivateCustomerMutation,
  useGetUserQuery,
} from "@/redux/services/userApiSlice";
import FormPreview from "./FormPreview";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const SingleDashboard = ({ userid }: any) => {
  const { isLoading, data } = useGetUserQuery({ userid });
  const [deactiveCustomer] = useDeactivateCustomerMutation();

  const handleDeactive = async () => {
    const formdata = {
      deactive_activate: true,
    };
    try {
      await deactiveCustomer({ formdata, userid }).unwrap();
    } catch (error) {}
    // console.log("Hey");
  };

  const handleActive = async () => {
    const formdata = {
      deactive_activate: false,
    };
    try {
      await deactiveCustomer({ formdata, userid }).unwrap();
    } catch (error) {}
    // console.log("Hey");
  };
  return (
    <div className="lg:mx-5">
      <div className="flex justify-between items-center mx-6 lg:mb-10 mb-6">
        <Link href={"/account/users"}>
          <div className="flex gap-x-2 items-center">
            <Image src={"/icon/Back.svg"} width={7.7} height={13.4} alt={""} />
            <p className="font-medium text-base">Back</p>
          </div>
        </Link>

        <AlertDialog>
          <AlertDialogTrigger>
            {data?.data?.details?.status?.toLowerCase() === "active" ? (
              <button className="bg-[#E44E4E] text-white w-[120px] lg:w-[200px] h-[40px] lg:h-[50px] rounded-[10px] lg:text-base text-sm">
                Deactivate
              </button>
            ) : (
              <button className="bg-[--primary] text-white w-[120px] lg:w-[200px] h-[40px] lg:h-[50px] rounded-[10px] lg:text-base text-sm">
                Activate
              </button>
            )}
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white text-center">
            <AlertDialogHeader className="text-center">
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              {data?.data?.details?.status?.toLowerCase() === "active" ? (
                <AlertDialogAction
                  onClick={handleDeactive}
                  className="bg-red-500 hover:bg-red-600">
                  Continue
                </AlertDialogAction>
              ) : (
                <AlertDialogAction
                  onClick={handleActive}
                  className="bg-red-500 hover:bg-red-600">
                  Continue
                </AlertDialogAction>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="w-full mb-3">
        <p className="text-[#02579E] ms-6 lg:text-xl text-lg font-bold leading-8 mb-4">
          Overview
        </p>
        <div className="grid grid-cols-2 mx-5 lg:grid-rows-1 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-y-0 lg:gap-[6%] ">
          <SingleDashboardMetrics
            icon={"/icon/Capital.svg"}
            progress="increasing"
            amount={data?.data?.overview?.capital}
            title="Capital"
            percentage={9}
          />
          <SingleDashboardMetrics
            icon={"/icon/NetProfit.svg"}
            progress="decreasing"
            amount={data?.data?.overview?.net_profit}
            title="Net Profit"
            percentage={80}
          />
          <SingleDashboardMetrics
            icon={"/icon/Expenses.svg"}
            progress="increasing"
            amount={data?.data?.overview?.total_expenses}
            title="Total Expenses"
            percentage={87}
          />
        </div>
      </div>
      <SingleDetailStats data={data?.data?.farm_statistics} />
      <FormPreview data={data?.data?.details} />
    </div>
  );
};

export default SingleDashboard;
