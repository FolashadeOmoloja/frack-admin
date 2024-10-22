"use client";
import DashboardNavbar from "@/components/Navbar/Navbar";
import Notifications from "@/components/Notification/NotificationsCont";
import { useGetAdminNotifications } from "@/hooks/notification-hook";
import { useSelector } from "react-redux";

const SettingsPage = () => {
  const { loading } = useGetAdminNotifications();
  const { notification } = useSelector((store: any) => store.notification);
  console.log(notification);
  return (
    <>
      <DashboardNavbar activeItem={0} />
      <Notifications notifications={notification} loading={loading} />
    </>
  );
};

export default SettingsPage;
