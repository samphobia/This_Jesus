import styled from "styled-components";
import NavRoutes from "./navroutes";

export const SidebarRoutes = styled.div`
  height: 76.5vh;
  overflow: auto;
  overflow-x: hidden;
  /* background: ${({ theme }) => theme.colors?.grey}; */

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }
`;
const links = [
  {
    title: "Blog post",
    icon: "bi bi-speedometer",
    path: "/",
  },
  {
    title: "Hire",
    icon: "bi-person-fill-add",
    children: [
      {
        title: "Applicants",
        icon: "bi-door-open-fill",
        path: "/review",
      },
    ],
  },
  {
    title: "Manage Team",
    icon: "bi-kanban-fill",
    children: [
      {
        title: "Onboard Employee",
        icon: "bi-person-fill",
        path: "/onboard",
      },
      {
        title: "Staffs",
        icon: "bi-person-vcard-fill",
        path: "/employees",
      },
      {
        title: "Employee ratings",
        icon: "bi-star-half",
        path: "/ratings",
      },
    ],
  },
  {
    title: "Timeoff/Leave",
    icon: "bi-calendar-week",
    path: "/timeoff",
  },
  {
    title: "Books Manager",
    icon: "bi-bag-fill",
    path: "/procurements",
  },
];

const NavLinks = () => {
  return (
    <SidebarRoutes>
      {links.map((link, index) => (
        <NavRoutes key={index} link={link} />
      ))}
    </SidebarRoutes>
  );
};

export default NavLinks;
