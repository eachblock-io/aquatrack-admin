"use client";
import EditSubscriptionModal from "@/components/EditSubscriptionModal";
import SubscriptionModal from "@/components/SubscriptionModal";
import { Button } from "@/components/ui/button";
import {
  useDeleteSubMutation,
  useGetSubsQuery,
} from "@/redux/services/subApiSlice";
import { formatCurrency } from "@/utils";
import { useState } from "react";
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

// const seatdata = [
//   {
//     id: "48744",
//     name: "seat1",
//     headers: ["A", "B", "C"],
//     seats: [
//       {
//         id: "232",
//         amount: 45,
//         status: "cancle",
//       },
//       {
//         id: "232",
//         amount: 45,
//         status: "cancle",
//       },
//       {
//         id: "232",
//         amount: 45,
//         status: "cancle",
//       },
//     ],
//   },
//   {
//     id: "48744",
//     name: "seat1",
//     headers: ["D", "E", "F", "G"],
//     seats: [
//       {
//         id: "232",
//         amount: 45,
//         status: "cancle",
//       },
//       {
//         id: "232",
//         amount: 45,
//         status: "cancle",
//       },
//       {
//         id: "232",
//         amount: 45,
//         status: "cancle",
//       },
//       {
//         id: "232",
//         amount: 45,
//         status: "cancle",
//       },
//     ],
//   },
//   {
//     id: "48744",
//     name: "seat1",
//     headers: ["H", "J", "K"],
//     seats: [
//       {
//         id: "232",
//         amount: 45,
//         status: "cancle",
//       },
//       {
//         id: "232",
//         amount: 45,
//         status: "cancle",
//       },
//       {
//         id: "232",
//         amount: 45,
//         status: "cancle",
//       },
//     ],
//   },
// ];

const SubscriptionPage = () => {
  const [deleteSub] = useDeleteSubMutation();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState();
  const [delID, setDelID] = useState();
  const { data } = useGetSubsQuery(null);

  const handleEdit = (value: any) => {
    setOpenEdit(true);
    setEditData(value);
  };

  const handleDelete = async () => {
    try {
      await deleteSub({ subid: delID }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold lg:text-2xl">Subscription Plans</h1>
        <SubscriptionModal open={open} setOpen={setOpen} />
        <EditSubscriptionModal
          editdata={editData}
          open={openEdit}
          setOpen={setOpenEdit}
        />
        <Button
          onClick={() => setOpen(true)}
          className=" px-8 py-4 bg-[--primary] hover:bg-[--primary]">
          Create Plan
        </Button>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10">
        {data?.data?.map((plan: any) => (
          <div
            key={plan?.id}
            className="p-6 rounded-lg border bg-white space-y-2">
            <h2 className="font-semibold mb-6">{plan?.attributes?.title}</h2>
            <div className="flex items-center justify-between">
              <p className="text-sm">Discount:.............</p>
              <p>{plan?.attributes?.discount}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">Duration:.................</p>
              <p>
                {plan?.attributes?.duration}{" "}
                <span className="text-xs">Month</span>{" "}
              </p>
            </div>
            <div className="flex items-center justify-between pb-8">
              <p className="text-sm">Monthly Price:......</p>
              <p>{formatCurrency(plan?.attributes?.monthly_price)}</p>
            </div>

            <div className="grid grid-cols-2 gap-x-6">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button
                    onClick={() => setDelID(plan?.id)}
                    className="w-full bg-white border border-red-600 text-red-600 hover:bg-red-100">
                    Delete plan
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white text-center">
                  <AlertDialogHeader className="text-center">
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDelete}
                      className="bg-red-500 hover:bg-red-600">
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Button
                onClick={() => handleEdit(plan)}
                className="w-full bg-[--primary] hover:bg-[--primary]">
                Edit plan
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-10 grid grid-cols-3">
        {seatdata?.map((rows) => (
          <div key={rows?.id} className="wrapper">
            <div className="grid grid-cols-3">
              {rows?.headers?.map((latter, index) => (
                <p key={index}>{latter}</p>
              ))}
            </div>
            <div className="grid grid-cols-3">
              {rows?.seats?.map((seat) => (
                <div
                  key={seat?.id}
                  className="seat h-8 w-8 text-red-500 border border-red-300 flex items-center justify-center">
                  $56
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SubscriptionPage;
