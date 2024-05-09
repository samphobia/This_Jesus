import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9FC3E7;
  // color: #9FC3E7;
  width: 100vw;
  margin-bottom; 20px;
  position: fixed;
  z-index: 9999;
  padding: 1rem 1rem; /* Adjusted padding for smaller screens */
  // box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
  //   rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  @media (max-width: 768px) {
    margin-bottom; 40px;
  }


  span {
    margin: 0 1rem; /* Adjusted margin for smaller screens */
    cursor: pointer;
    font-weight: bolder;
    font-size: 1rem; /* Adjusted font size for smaller screens */

    // &:hover {
    //   color: ${({ theme }) => theme.colors?.primary};
    //   font-weight: bolder;
    }
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
`;
export const Hed2 = styled.div`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    margin-left: 3rem;
  }
`;

export const MenuIcon = styled.div`
  position: absolute;
  left: 1rem; /* Adjust this value as needed */
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    z-index: 1; /* Ensure it's above other content */

    span {
      height: 2px;
      width: 25px;
      background-color: #000000;
      margin: 4px 0;
      display: block;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  padding: 2rem 2rem; /* Adjusted padding for smaller screens */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    background-color: #333;
    width: 100%;
    transition: left 0.3s ease-in-out;
  }
`;

export const MenuItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

export const Navbutton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40vw;

  // @media (max-width: 768px) {
  //   flex-direction: column;
  // }

  
`;


export const Button2 = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  align-items: center;
  border-radius: 5px;
  flex-direction: column;
  cursor: pointer;
  width: 70px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;