import styled from "styled-components";

export const FooterWrapper = styled.div`
   width: 100vw;
   padding: 7rem 10rem;
   display: flex;
   justify-content: space-between;
   background: #3a3847;
   color: white;

   span{
      margin-top: .8rem;
   }

   .right {
      display: flex;
   }

   .first,
   .second,
   .third {
      display: flex;
      flex-direction: column;
      align-items: start;
   }

   .first {
      p {
         width: 40%;
         margin-top: 4rem;
      }
   }
   .second{
      width: 20%;
      margin-right: 4rem;
   }

   .third {
      width: 40%;

      img {
         height: 30px;
         margin-right: 2rem;
      }
   }
`;
