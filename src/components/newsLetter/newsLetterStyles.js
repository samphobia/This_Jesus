import styled from "styled-components";

export const NewsLetterWrapper = styled.div`
  margin: 2rem auto; /* Adjusted margin for smaller screens */
  text-align: center;
  align-items: center;

  .subscribe {
    display: flex;
    flex-direction: column; /* Change to column layout on smaller screens */
    justify-content: center;
    align-items: center;

    input {
      width: 100%; /* Set input width to 100% for full width on smaller screens */
      max-width: 300px; /* Limit input width on smaller screens */
      border-radius: 0;
      border: none;
      border-bottom: 2px solid black;
      background: none;
      margin: 0 0 1rem; /* Adjusted margin for spacing on smaller screens */
      padding: 0.5rem; /* Added padding for better touch accessibility on smaller screens */
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

export default NewsLetterWrapper;
