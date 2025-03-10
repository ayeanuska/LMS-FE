import React from "react";
import { Stack } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { FaListUl, FaUsers } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { TbStarsFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const sidelinks = [
  {
    icon: <FaBookBookmark />,
    title: "Books",
    to: "/admin/books",
    isAdminOnly: false,
  },
  {
    icon: <FaUsers />,
    title: "Students",
    to: "/admin/students",
    isAdminOnly: false,
  },
  {
    icon: <FaListUl />,
    title: "All Burrows",
    to: "/admin/all-burrows",
    isAdminOnly: false,
  },
  {
    icon: <TbStarsFilled />,
    title: "All Reviews",
    to: "/admin/reviews",
    isAdminOnly: false,
  },
  {
    icon: <IoLibrary />,
    title: "My Books",
    to: "/my-books",
    isAdminOnly: false,
  },
  {
    icon: <CgProfile />,
    title: "Profile",
    to: "/profile",
    isAdminOnly: false,
  },
];

const UserSidebar = () => {
  const { user, menu } = useSelector((state) => state.userInfo);
  const list =
    user.role === "admin"
      ? sidelinks
      : sidelinks.filter((item) => !item.isAdminOnly);
  return (
    <Stack gap={1}>
      {list.map(({ title, to, icon }) => (
        <Link
          key={title}
          to={to}
          className={`p-2 nav-link ${
            title === menu ? "bg-white text-dark rounded" : ""
          } `}
        >
          {icon} {title}
        </Link>
      ))}
    </Stack>
  );
};

export default UserSidebar;
