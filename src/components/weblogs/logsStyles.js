import styled from "styled-components";

export const LogsWrapper = styled.div`
   width: 100vw;
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
      background: #D9B549;
      color: white;
      padding: 2rem;
      width: 15%;
      min-width: 100px;
      text-align: center;
      height: 120px;
      transform: translateY(-20px);
      border-radius: 10px;
   }

   @media (max-width: 768px) {
      flex-direction: column;
      padding: 4rem 2rem; /* Adjusted padding for smaller screens */
      justify-content: center; /* Center content vertically on smaller screens */
  
      span {
        margin-top: 0.5rem; /* Adjusted margin for spacing on smaller screens */
      }
    }
`;
