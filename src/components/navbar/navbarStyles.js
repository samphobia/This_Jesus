import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 9999;
  padding: 2rem 2rem; /* Adjusted padding for smaller screens */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  span {
    margin: 0 1rem; /* Adjusted margin for smaller screens */
    cursor: pointer;
    font-weight: bolder;
    font-size: 1rem; /* Adjusted font size for smaller screens */

    &:hover {
      color: ${({ theme }) => theme.colors?.primary};
      font-weight: bolder;
    }
  }

  /* Mobile responsiveness */
  @media screen and (max-width: 768px) {
    padding: 1rem 1rem; /* Further adjusted padding for smaller screens */
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem 0.5rem; /* Further adjusted padding for smaller screens */
    
    span {
      font-size: 0.8rem; /* Further adjusted font size for smaller screens */
    }
  }
`;

