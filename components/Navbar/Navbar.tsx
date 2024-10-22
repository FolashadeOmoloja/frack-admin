import DashboardMainNavbar from "./MainNav";
import DashboardMobileNav from "./MobileNav";

const NavLinks = [
  {
    navItem: "Dashboard",
    href: "/hire-talent/dashboard",
  },
  {
    navItem: "Jobs",
    href: "/hire-talent/dashboard/my-jobs",
  },
];

const DropDown = [
  {
    navItem: "Notifications",
    icon: "/images/dashboard/icon1.svg",
    href: "/control-room/notifications",
  },
  {
    navItem: "Sign Out",
    icon: "/images/dashboard/icon2.svg",
    href: "/hire-talent/sign-out",
  },
];

const DashboardNavbar = ({ activeItem }: { activeItem?: number }) => {
  return (
    <>
      <DashboardMainNavbar
        activeItem={activeItem}
        NavLinks={NavLinks}
        buttonLink="/hire-talent/dashboard/add-job"
        buttonCta="Add Job"
        DropDown={DropDown}
      />
      <DashboardMobileNav
        NavLinks={NavLinks}
        buttonLink="/hire-talent/dashboard/add-job"
        buttonCta="Add Job"
        DropDown={DropDown}
      />
    </>
  );
};

export default DashboardNavbar;
