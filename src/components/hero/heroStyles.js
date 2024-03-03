import styled from "styled-components";

export const HeroWrapper = styled.div`
   width: 100vw;
   padding: 12rem 10rem 6rem;
   display: flex;
   justify-content: space-between;
   align-items: center;

   .text-content {
      width: 40%;

      h1 {
         font-size: clamp(2rem, 5vw, 5rem);
      }

      .primary {
         color: ${({ theme }) => theme.colors?.primary};
      }
      .secondary {
         color: ${({ theme }) => theme.colors?.secondary};
      }

      .btn-flex {
         .buttonClear {
            margin-left: 4rem;
         }
      }
   }

   img {
      width: 50%;
   }
`;
