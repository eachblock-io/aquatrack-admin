"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "./ui/input";
import { useEditSubMutation } from "@/redux/services/subApiSlice";

const EditSubscriptionModal = ({ open, setOpen, editdata }: any) => {
  const [editSub] = useEditSubMutation();
  const cancelButtonRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    monthly_price: "",
    duration: "1",
    type: "free",
    discount: "",
    limited_to: ["enjoy all features for few days"],
  });

  useEffect(() => {
    setFormData({
      title: editdata?.attributes?.title || "",
      description: editdata?.attributes?.description || "",
      monthly_price: editdata?.attributes?.monthly_price || "",
      duration: editdata?.attributes?.duration || "",
      type: editdata?.attributes?.type || "free",
      discount: editdata?.attributes?.disscount || "",
      limited_to: editdata?.attributes?.limited_to || [
        "enjoy all features for few days",
      ],
    });
  }, [editdata]);

  console.log(editdata);

  // Function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle radio button changes
  const handleRadioChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await editSub({ formdata: formData, subid: editdata?.id }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-11/12 lg:w-4/12">
                <div className="flex items-center justify-center border border-gray-600 rounded-full absolute top-8 right-8 h-8 w-8 cursor-pointer">
                  <IoClose
                    onClick={() => setOpen(false)}
                    className=" h-5 w-5 text-gray-600"
                  />
                </div>
                <div className="">
                  <div className="left-side bg-gray-200 rounded-lg px-10 py-14">
                    <h2 className="lg:text-2xl text-lg font-semibold text-gray-700 pt-6">
                      Create Subscription Plan
                    </h2>
                    <form
                      onSubmit={handleSubmit}
                      className="form mt-6 space-y-6">
                      <Input
                        type="text"
                        placeholder="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                      />
                      <Input
                        type="text"
                        placeholder="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                      />
                      <Input
                        type="text"
                        placeholder="Price"
                        name="monthly_price"
                        value={formData.monthly_price}
                        onChange={handleInputChange}
                      />
                      <RadioGroup
                        defaultValue="comfortable"
                        className=" flex"
                        onValueChange={(value: any) =>
                          handleRadioChange(value, "duration")
                        }>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="1"
                            id="r1"
                            checked={formData.duration == "1"}
                            className=""
                          />
                          <label htmlFor="r1" className="text-xs">
                            1 month
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="3"
                            id="r3"
                            checked={formData.duration == "3"}
                            className=""
                          />
                          <label htmlFor="r3" className="text-xs">
                            3 month
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="6"
                            id="r6"
                            checked={formData.duration == "6"}
                            className=""
                          />
                          <label htmlFor="r6" className="text-xs">
                            6 month
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="12"
                            id="r12"
                            checked={formData.duration == "12"}
                            className=""
                          />
                          <label htmlFor="r12" className="text-xs">
                            12 month
                          </label>
                        </div>
                      </RadioGroup>
                      <RadioGroup
                        defaultValue="option-one"
                        className="flex items-center space-x-4"
                        onValueChange={(value: any) =>
                          handleRadioChange(value, "type")
                        }>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="free"
                            id="option-one"
                            checked={formData.type == "free"}
                          />
                          <label htmlFor="option-one" className="text-xs">
                            Free
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="premium"
                            id="option-one"
                            checked={formData.type == "premium"}
                          />
                          <label htmlFor="option-one" className="text-xs">
                            Paid
                          </label>
                        </div>
                      </RadioGroup>

                      <div className="flex relative">
                        <Input
                          type="text"
                          placeholder="Discount"
                          name="discount"
                          value={formData.discount}
                          onChange={handleInputChange}
                        />
                        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-4 border border-gray-900 bg-gray-200">
                          <p>%</p>
                        </div>
                      </div>

                      <Button className="w-full bg-[--primary] hover:bg-[--primary] py-6 font-semibold mt-8">
                        Save changes
                      </Button>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditSubscriptionModal;
