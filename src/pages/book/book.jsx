import Plx from "react-plx";
import styled from "styled-components";
import Home from "../home/home";
import bg from "../../assets/bg.png";

const BookWrapper = styled.div`
  font-family: Arial Black, sans-serif;
  background: transparent;
  height: 300vh;
  z-index: 9999999999999999999999999999;

  h1{
    text-align: center;
  }
`;

const Header = styled.div`
  height: 100vh;
  width: 100%;

  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    background: linear-gradient(to right, #f37d02, #177415);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 21px rgba(243, 125, 2, 0.1),
      0 0 20px rgba(23, 116, 21, 0.1);
    opacity: 1;
    line-height: 110%;
    text-transform: capitalize;
  }
`;

const Book = () => {
  return (
    <div>
      <BookWrapper>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 900,
              easing: "ease-in",
              properties: [
                {
                  startValue: 1,
                  endValue: 3,
                  property: "scale",
                },
              ],
            },
          ]}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: "100",
          }}
        >
          <img style={{ width: "100%" }} src={bg} alt="foreground" />
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 400,
              properties: [
                {
                  startValue: 0.01,
                  endValue: 1,
                  property: "scale",
                },
              ],
            },
          ]}
          style={{
            left: 0,
            top: 0,
            width: "100%",
            margin: "auto",
          }}
        >
          <Home />
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 400,
              properties: [
                {
                  startValue: 1,
                  endValue: 0,
                  property: "opacity",
                },
              ],
            },
          ]}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            fontSize: "clamp(3rem, 2vw, 7rem)",
          }}
        >
          <Header>
            <h1>
              Welcome to our <br />
              book Launch
            </h1>
          </Header>
        </Plx>
      </BookWrapper>
    </div>
  );
};

export default Book;
