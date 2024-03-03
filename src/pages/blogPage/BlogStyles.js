import styled from "styled-components";

export const BlogWrapper = styled.div`
  width: 90%;
  max-width: 1470px;
  margin: 6rem auto;
  padding: 8rem 0 0 0;
  position: relative;

  .header {
    position: relative;

    .imgWrapper {
      width: 100%;
      height: 60vh;
      overflow: hidden;
      object-fit: cover;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(50%);
      }

      img:hover {
        -webkit-transform: scale3d(1.2, 1.2, 1);
        transform: scale3d(1.2, 1.2, 1);
        transition: all 1s linear;
      }
    }
    h1 {
      position: absolute;
      width: 90%;
      text-align: center;
      line-height: 1.4;
      top: 50%;
      left: 50%;
      color: #fff;
      transform: translate(-50%, -50%);
    }
  }

  @media screen and (max-width: 790px) {
    width: 98%;
    margin: auto;

    .imgWrapper {
      margin: auto;
      width: 100%;
      text-align: center;
      object-fit: cover;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      img:hover {
        -webkit-transform: scale3d(1.2, 1.2, 1);
        transform: scale3d(1.2, 1.2, 1);
        transition: all 1s linear;
      }
    }
  }
`;
