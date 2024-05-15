"use client";
import PaginationTable from "@/components/PaginationTable";
import React from "react";

const UsersPage = () => {
  return (
    <div className="px-10">
      <h1 className="font-bold lg:text-2xl mb-20">Users</h1>
      <PaginationTable />
    </div>
  );
};

export default UsersPage;
