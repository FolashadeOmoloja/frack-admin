import DashboardMainNavbar from "./MainNav";
import DashboardMobileNav from "./MobileNav";

const NavLinks = [
  {
    navItem: "Dashboard",
    href: "/control-room",
  },
  {
    navItem: "Blog",
    href: "/control-room/manage-blogs",
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
    href: "/sign-out",
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
