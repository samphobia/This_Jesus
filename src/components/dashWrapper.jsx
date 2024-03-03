/* eslint-disable react/prop-types */

import styled from "styled-components";

const DashWrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 99999999999999999;
  background: white;
  width: 100%;
`;

const DashpageWrapper = ({ children }) => {
  return <DashWrapper>{children}</DashWrapper>;
};

export default DashpageWrapper;
