import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100vw;
  padding: 4rem 2rem; /* Adjusted padding for smaller screens */
  display: flex;
  flex-direction: column; /* Change to column layout on smaller screens */
  justify-content: center; /* Center content vertically on smaller screens */
  background: #3a3847;
  color: white;

  span {
    margin-top: 0.5rem; /* Adjusted margin for spacing on smaller screens */
  }

  .right {
    display: flex;
    flex-direction: column; /* Change to column layout on smaller screens */
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
`;

export default FooterWrapper;
