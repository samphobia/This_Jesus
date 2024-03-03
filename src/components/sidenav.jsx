// import { useState } from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import NavLinks from "./sidemenu";

const Sidenav = () => {
  // const [inactive, setInactive] = useState(false);

  // const toggleSideNav = () => {
  //   setInactive(!inactive);
  // };

  return (
    // <SidemenuWrapper inactive={inactive}>
    <SidemenuWrapper>
      <TopSection>
        <img src={logo} alt="logo" />
        {/* <ToggleMenu inactive={inactive}>
          {inactive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-arrow-right-square-fill"
              viewBox="0 0 16 16"
              onClick={toggleSideNav}
            >
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-arrow-left-square-fill"
              viewBox="0 0 16 16"
              onClick={toggleSideNav}
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
          )}
        </ToggleMenu> */}
      </TopSection>
      <SearchController>
        {/* {!inactive && <input placeholder="Search" />} */}
        <input placeholder="Search" />
      </SearchController>
      <hr />
      <NavLinks />
      <p className="footer">&copy; Denukan Network Limited</p>
      {/* {!inactive && <p className="footer">&copy; Denukan Network Limited</p>} */}
    </SidemenuWrapper>
  );
};

export default Sidenav;

export const SidemenuWrapper = styled.div`
  /* width: ${(props) => (props.inactive ? "55px" : "280px")}; */
  width: 280px;
  background: #efefef;
  height: 100vh;
  color: ${({ theme }) => theme.colors?.secondary};
  padding: 2rem 2rem;
  transition: width 0.4s ease-in-out;

  hr {
    height: 1px;
    background-color: ${({ theme }) => theme.colors?.secondary};
    border: none;
    margin: 1rem 0;
    border-radius: 1px;
  }

  .footer {
    position: absolute;
    color: ${({ theme }) => theme.colors?.secondary};
    bottom: 1rem;
    font-size: 12.5px;
  }
`;

export const TopSection = styled.div`
  position: relative;
  margin-top: 4.6rem;

  img {
    width: 150px;
    position: fixed;
    top: 20px;
  }
`;

export const ToggleMenu = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: ${(props) => (props.inactive ? "-60px" : "0")};
  transform: translatey(-50%);
  color: ${({ theme }) => theme.colors?.grey};
`;

export const SearchController = styled.div`
  margin: 6rem 0 2.5rem 0;
  position: relative;

  input {
    width: 100%;
    display: block;
    padding: 1rem;
    padding-left: 3.2rem;
    border: 1px solid ${({ theme }) => theme.colors?.secondary};
    outline: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors?.input};
    color: ${({ theme }) => theme.colors?.primary};

    ::placeholder {
      color: ${({ theme }) => theme.colors?.primary};
      opacity: 0.7;
    }
  }

  button {
    border: none;
    padding: 0;
    margin: 0;
    background: none;
    position: absolute;
    /* font-size: 16px; */
    color: ${({ theme }) => theme.colors?.primary};
    top: 50%;
    left: 1.45rem;
    transform: translatey(-50%);
  }
`;
