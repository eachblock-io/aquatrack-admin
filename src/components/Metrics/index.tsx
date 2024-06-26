import React from "react";
import IcDownIcon from "../../../public/icon/ICDownIcon";
import IcUpIcon from "../../../public/icon/ICUpIcon";
import Image from "next/image";
import { formatCurrency } from "@/utils";

interface StatProps {
  amount: number;
  title: string;
  icon: string;
  percentage: number;
  progress: "increasing" | "decreasing";
}

const SingleDashboardMetrics: React.FC<StatProps> = ({
  icon,
  progress = "decreasing",
  amount,
  title,
  percentage = 0.0,
}) => {
  const isNegative = (number: any) => {
    return number < 0;
  };
  return (
    <div>
      <div className="flex rounded-xl lg:p-4 max-w-full  ">
        <div className={`lg:ps-3 pe-1 w-fit h-fit  rounded-xl `}>
          <div className="relative lg:w-[50px] w-[30px] lg:h-[50px] h-[30px] ">
            <Image src={icon} alt="" fill />
          </div>
        </div>
        <div className="lg:ml-3 ml-1">
          <p className="text-[#7C8DB5] text-xs leading-18">{title}</p>
          <span className="text-[#0A2A5E] text-lg lg:text-2xl font-bold leading-30 flex">
            <p className="mr-1 line-through">N</p>
            <p>{isNegative(amount) ? "0.00" : formatCurrency(amount)}</p>
          </span>
          {/* <span className="flex">
            <p
              className={`text-${
                progress === "increasing" ? "[#4CB596]" : "[#F84D4D]"
              } text-sm `}>
              {percentage}%
            </p>
            {progress === "increasing" ? <IcUpIcon /> : <IcDownIcon />}
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default SingleDashboardMetrics;
