import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100vw;
  padding: 8rem 2rem; /* Adjusted padding for smaller screens */
  display: flex;
  flex-direction: column; /* Change to column layout on smaller screens */
  justify-content: center; /* Center content vertically */
  align-items: center;

  .text-content {
    width: 100%; /* Adjusted width for full width on smaller screens */
    text-align: center; /* Center text on smaller screens */

    h1 {
      font-size: clamp(2rem, 10vw, 5rem); /* Adjusted font size for smaller screens */
    }

    .primary {
      color: ${({ theme }) => theme.colors?.primary};
    }
    .secondary {
      color: ${({ theme }) => theme.colors?.secondary};
    }

    .btn-flex {
      display: flex;
      justify-content: center; /* Center buttons horizontally */
      margin-top: 2rem; /* Adjusted margin for spacing on smaller screens */
      
      .buttonClear {
        margin: 0 1rem; /* Adjusted margin for button spacing on smaller screens */
      }
    }
  }

  img {
    width: 100%; /* Adjusted width for full width on smaller screens */
    max-width: 300px; /* Limit image width on smaller screens */
    margin-top: 2rem; /* Adjusted margin for spacing on smaller screens */
  }
`;

export default HeroWrapper;
