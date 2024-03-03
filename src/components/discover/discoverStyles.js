import styled from "styled-components";

export const DiscoverWrapper = styled.div`
   width: 100vw;
   text-align: center;
   padding: 4rem 0rem;
`;

export const DiscoverImages = styled.div`
   width: 100vw;
   padding: 4rem 10rem;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 4rem;

   .grid-item {
      width: 100%;
      background: #efeefe;
      padding: 5rem;
      border-radius: 10px;

      h3 {
         width: 40%;
         margin: 3rem auto 0;
      }
   }

   @media screen and (max-width(600px)) {
      display: block;
   }
`;
