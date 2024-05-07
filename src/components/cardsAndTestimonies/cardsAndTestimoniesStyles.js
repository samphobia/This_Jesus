import styled from "styled-components";

export const CardsAndTestimoniesWrapper = styled.div`
   background: linear-gradient(
      293.08deg,
      rgba(200, 255, 218, 0.8) -56.9%,
      rgba(23, 116, 21, 0) 79.56%
   );
   padding: 4rem 2rem 8rem; /* Adjusted padding for smaller screens */

   h3 {
      margin: 3rem 0; /* Adjusted margin for smaller screens */
      text-align: center;
   }
`;

export const CardGrid = styled.div`
   display: flex;
   flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
   justify-content: space-between;
   align-items: center;

   > * {
      // flex: 0 1 calc(45% - 1rem); /* Adjusted card width for smaller screens with margin */
      margin-bottom: 2rem; /* Margin between cards */
   }

   @media(max-width: 768px) {
      > * {
         flex: 0 1 calc(100% - 1rem); /* Full width on smaller screens with margin */
         align-items: center;
      }
   }
`;

export const DualCardGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(1, 1fr); /* Adjusted columns for smaller screens */
   gap: 2rem; /* Adjusted gap for smaller screens */
   margin-bottom: 2rem;

   @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr); /* Two columns on larger screens */
      align-items: center;
   }

   > * {
      margin-bottom: 2rem; /* Margin between cards */
   }
`;

export default { CardsAndTestimoniesWrapper, CardGrid, DualCardGrid };
