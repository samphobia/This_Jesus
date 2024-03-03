import styled from "styled-components";

export const LoaderWrapper = styled.div`
  background: ${({ theme }) => theme.colors?.grey};
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  #holder {
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
