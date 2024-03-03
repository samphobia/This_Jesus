import styled from "styled-components";

export const LogsWrapper = styled.div`
   width: 100vw;
   height: 120px;
   background: #263138;
   margin: 6rem 0rem 0rem;
`;

export const LogsContainer = styled.div`
   width: 100vw;
   padding: 0rem 10rem;
   display: flex;
   justify-content: space-between;
   align-items: center;

   hr {
      width: 1px;
      height: 60px;
      color: white;
   }

   .log {
      background: ${({ theme }) => theme.colors?.secondary};
      color: white;
      padding: 2rem;
      width: 15%;
      min-width: 100px;
      text-align: center;
      height: 120px;
      transform: translateY(-20px);
      border-radius: 10px;
   }
`;
