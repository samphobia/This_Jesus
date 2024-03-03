import styled from "styled-components";

export const NavWrapper = styled.div`
   width: 100vw;
   position: fixed;
   z-index: 9999;
   padding: 2rem 10rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

   span {
      margin: 0 3rem;
      cursor: pointer;
      font-weight: bolder;
      font-size: 1.2rem;


      &:hover {
         color: ${({ theme }) => theme.colors?.primary};
         font-weight: bolder;
      }
   }
`;
