import styled from "styled-components";

export const NewsLetterWrapper = styled.div`
   margin: 4rem auto;
   text-align: center;
   align-items: center;

   .subscribe {
      display: flex;
      margin: auto;
      justify-content: center;

      input {
         border-radius: 0;
         border: none;
         border-bottom: 2px solid black;
         background: none;
         margin: 0 2rem 0 0;
      }

      .send {
         background: #c70039;
         width: 70px;
         display: flex;
         justify-content: center;
         align-items: center;

         img {
            width: 14px;
         }
      }
   }
`;
