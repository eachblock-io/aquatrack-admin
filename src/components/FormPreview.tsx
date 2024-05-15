import React from "react";

const FormPreview = ({ data }: any) => {
  // console.log(data);
  return (
    <div className="m-6 ">
      <form>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 lg:w-[75%]">
          <div className="mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Name">
              First Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white"
              id="Name"
              type="text"
              name="firstname"
              value={data?.first_name}
              disabled
            />
          </div>
          <div className="mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Name">
              First Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white"
              id="Name"
              type="text"
              name="firstname"
              value={data?.last_name}
              disabled
            />
          </div>
          <div className="mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              name="email"
              value={data?.email}
              disabled
            />
          </div>
          <div className="mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="PhoneNumber">
              Phone Number
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white"
              id="PhoneNumber"
              type="tel"
              name="PhoneNumber"
              value={data?.phone_number}
              disabled
            />
          </div>
          <div className="mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="FarmName">
              Organization Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white"
              id="FarmName"
              type="text"
              name="FarmName"
              value={data?.organization_name}
              disabled
            />
          </div>
          <div className="mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="SubscriptionPlan">
              Subscription plan
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white"
              id="SubscriptionPlan"
              type="text"
              name="SubscriptionPlan"
              value={data?.subscription_plan}
              disabled
            />
          </div>
          <div className="mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="SubscriptionStatus">
              Subscription status
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="SubscriptionStatus"
              type="text"
              name="SubscriptionStatus"
              value={data?.subscription_status}
              disabled
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormPreview;
