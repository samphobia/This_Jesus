import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100vw;
  display: flex;
  background: #9FC3E7;
  color: #3a3847;


  .right {
    display: flex;
    align-items: center; /* Center align content horizontally on smaller screens */
    margin-top: 2rem; /* Adjusted margin for spacing on smaller screens */
  }

  .first,
  .second,
  .third {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align content horizontally on smaller screens */
    margin-bottom: 2rem; /* Adjusted margin for spacing on smaller screens */
  }

  .first {
    p {
      width: 100%; /* Adjusted width for full width on smaller screens */
      text-align: center; /* Center align text on smaller screens */
      margin-top: 2rem; /* Adjusted margin for spacing on smaller screens */
    }
  }

  .second {
    width: 100%; /* Adjusted width for full width on smaller screens */
    text-align: center; /* Center align text on smaller screens */
    margin-top: 2rem; /* Adjusted margin for spacing on smaller screens */
  }

  .third {
    width: 100%; /* Adjusted width for full width on smaller screens */
    text-align: center; /* Center align text on smaller screens */
    margin-top: 2rem; /* Adjusted margin for spacing on smaller screens */

    img {
      height: 20px; /* Adjusted image height for smaller screens */
      margin-right: 0.5rem; /* Adjusted margin for spacing on smaller screens */
    }
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

export default FooterWrapper;
