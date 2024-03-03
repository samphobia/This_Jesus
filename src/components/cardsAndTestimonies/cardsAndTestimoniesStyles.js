import styled from "styled-components";

export const CardsAndTestimoniesWrapper = styled.div`
   background: linear-gradient(
      293.08deg,
      rgba(200, 255, 218, 0.8) -56.9%,
      rgba(23, 116, 21, 0) 79.56%
   );
   padding: 4rem 10rem 8rem;

   h3 {
      margin: 7rem 0 3rem;
      text-align: center;
   }
`;

export const CardGrid = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const DualCardGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   width: 45%;
   gap: 4rem 2rem;
   margin-bottom: 2rem;
`;
