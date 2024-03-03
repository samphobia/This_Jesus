/* eslint-disable react/prop-types */
import styled from "styled-components";

const Card = ({ children, backgroundcolor, textColor }) => {
   return (
      <CardWrapper backgroundcolor={backgroundcolor}>
         <CardContent textColor={textColor}>{children}</CardContent>
      </CardWrapper>
   );
};

export default Card;

//styles
const CardWrapper = styled.div`
   background-color: ${({ backgroundcolor, theme }) =>
      backgroundcolor || theme.colors?.button};
   padding: 3rem 2rem;
   display: flex;
   flex-direction: column;
   align-items: start;
   width: 100%;
   max-width: 300px;
   min-height: 150px;
   border-radius: 5px;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const CardContent = styled.div`
   color: ${({ textColor, theme }) => textColor || theme.colors?.white};
`;
