/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavRoutes = ({ link }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (link.children) {
    return (
      <SidebarLink open={open}>
        <Title onClick={() => setOpen(!open)}>
          <span>
            {link.icon && (
              <span className="icon">
                <i className={link.icon} />
              </span>
            )}
            <span
              onClick={() => {
                if (!link.path) {
                  return;
                } else {
                  console.log(link.path);
                  navigate(`/admin${link.path}`);
                }
              }}
            >
              {link.title}
            </span>
          </span>
          {open ? (
            <i className="bi-chevron-right toggle-btn" />
          ) : (
            <i className="bi-chevron-down toggle-btn" />
          )}
        </Title>
        {open && (
          <RouteLink>
            {link.children.map((child, index) => (
              <NavRoutes key={index} link={child} />
            ))}
          </RouteLink>
        )}
      </SidebarLink>
    );
  } else {
    return (
      <SidebarLink>
        <Title>
          <span
            onClick={() => {
              if (!link.path) {
                return;
              } else {
                // history.push(link.path);
                navigate(`/admin${link.path}`);
                console.log(link.path);
              }
            }}
          >
            {link.icon && <i className={link.icon}></i>}
            {link.title}
          </span>
        </Title>
      </SidebarLink>
    );
  }
};

export default NavRoutes;

const SidebarLink = styled.div`
  color: ${({ theme }) => theme.colors?.secondary};

  .toggle-btn {
    font-size: 12px;
    margin-left: 2rem;
  }
`;
const Title = styled.div`
  font-size: 12px;
  margin: 1.7rem 0;
  letter-spacing: 0.03rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;

  i {
    font-size: 16.8px;
    margin-right: 2rem;
  }

  span {
    display: flex;
    align-items: center;
  }
  :hover {
    color: ${({ theme }) => theme.colors?.primary};
  }
`;
const RouteLink = styled.div`
  margin: 0.7rem 1rem 0;
  padding: 0 1rem;
  border-left: 0.1px dashed ${({ theme }) => theme.colors?.secondary};
`;
