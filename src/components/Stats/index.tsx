"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SingleDetailStats = ({ data }: any) => {
  return (
    <div>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 mt-5 lg:p-6">
        <span className="font-bold text-lg ps-1">Farm Statistics</span>
        <div className="grid gap-4 grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card className="bg-[#FFFFFF]">
            <CardHeader className="items-center text-left space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-left w-full">
                Total Batch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">{data?.total_batches}</div>
            </CardContent>
          </Card>
          <Card className="bg-[#FFFFFF]">
            <CardHeader className="items-center text-left space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-left w-full">
                Total Harvests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">{data?.total_harvests}</div>
            </CardContent>
          </Card>
          <Card className="bg-[#FFFFFF]">
            <CardHeader className="items-center text-left space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-left w-full">
                No. of Ponds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">{data?.total_ponds}</div>
            </CardContent>
          </Card>
          <Card className="bg-[#FFFFFF]">
            <CardHeader className="items-center text-left space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-left w-full">
                Total farms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">{data?.total_farms}</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SingleDetailStats;
