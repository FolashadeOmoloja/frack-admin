"use client";

import { formatTimeDifference } from "@/utilities/constants";
import { useState } from "react";
import { ImNotification } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
type IsActiveState = {
  [key: number]: boolean;
};
type Notification = {
  message: string;
  timestamp: string;
};
const Notifications = ({
  notifications,
  paymentHistoryBool,
}: {
  notifications: Notification[];
  paymentHistoryBool?: boolean;
}) => {
  const filterArr = ["Notifications", "Payment History"];
  const arr = ["Notifications"];
  const [active, setActive] = useState<IsActiveState>({ [0]: true });
  const [notificationArr, setNotificationArr] = useState(notifications);
  const paymentHistory: any[] = [];
  const activeFunc = (idx: number) => {
    const newState: IsActiveState = {};
    filterArr.forEach((_, i) => (newState[i] = i === idx));
    setActive(newState);
  };
  return (
    <section className="dashboard-container min-h-svh">
      <h2 className="text-2xl font-bold mb-1">
        Ditimi, Keep track of your notifications and payment history
      </h2>
      <div className="flex w-full text-[#626263] md:text-lg font-bold mt-16 border-b border-[#CCD2D9]">
        {paymentHistoryBool
          ? arr.map((item, idx) => (
              <span
                className={`tab ${active[idx] ? "active" : ""} max-sm:h-[50px]`}
                key={idx}
                onClick={() => activeFunc(idx)}
              >
                {item}
              </span>
            ))
          : filterArr.map((item, idx) => (
              <span
                className={`tab ${active[idx] ? "active" : ""} max-sm:h-[50px]`}
                key={idx}
                onClick={() => activeFunc(idx)}
              >
                {item}
              </span>
            ))}
      </div>
      <section className="mt-10">
        {active[0] && (
          <section>
            {notificationArr.length > 0 ? (
              <ul className="gap-5 flex flex-col">
                {notificationArr.map((item, idx) => (
                  <li
                    key={idx}
                    className="border-[#CCD2D9] border rounded-md p-6 max-sm:p-3 shadow-lg"
                  >
                    <div className="flex gap-14 max-sm:gap-4">
                      <div className="bg-[#000080] text-[#00B5E8] centered rounded-full min-w-12 h-12">
                        <IoMdNotifications className="text-2xl" />
                      </div>
                      <div className="max-sm:text-sm">
                        <span>Hello, Ditimi</span>
                        <br />
                        <span>{item.message}</span>
                      </div>
                    </div>
                    <p className="text-sm mt-4">
                      {formatTimeDifference(item.timestamp)}
                    </p>
                  </li>
                ))}
                <button
                  onClick={() => {
                    setNotificationArr([]);
                  }}
                  className="py-4 px-6 max-w-[300px] mt-10 bg-[#000080] text-white rounded-md font-semibold btn-hover"
                >
                  Clear Notification
                </button>
              </ul>
            ) : (
              <div className="font-semibold text-2xl text-gray-800  flex gap-6 items-center italic">
                <ImNotification className="text-red-600 xsm:text-3xl text-base" />
                <span>No new notification</span>
              </div>
            )}
          </section>
        )}
        {active[1] && (
          <section>
            {paymentHistory.length > 0 ? (
              <ul className="gap-5 flex flex-col">
                {paymentHistory.map((item, idx) => (
                  <li
                    key={idx}
                    className="border-[#CCD2D9] border rounded-md p-6 max-sm:p-3 shadow-lg"
                  ></li>
                ))}
                <button
                  onClick={() => {}}
                  className="py-4 px-6 max-w-[300px] mt-10 bg-[#000080] text-white rounded-md font-semibold btn-hover"
                >
                  Clear history
                </button>
              </ul>
            ) : (
              <div className="font-semibold text-2xl text-gray-800  flex gap-6 items-center italic">
                <ImNotification className="text-red-600 xsm:text-3xl text-base" />
                <span>No new payment history</span>
              </div>
            )}
          </section>
        )}
      </section>
    </section>
  );
};

export default Notifications;
