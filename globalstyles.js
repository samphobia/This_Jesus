import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   *,
   *::before,
   *::after {
      box-sizing: border-box;
      font-family: 'Ubuntu', sans-serif;
   }
 
   html {
      font-size: 62.5%;
   }

   body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    width: 100%;
    overscroll-behavior: none;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.5rem;
    background: #fafafc;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: ${({ theme }) => theme.colors?.black};
  }
  
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors?.black};
   }

   button, .button{
    border: 0;
    padding: 0;
    cursor: pointer;
    box-sizing: border-box;
    display: inline-block;
    width: 150px;
    text-align: center;
    padding: 1.2rem 2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.2rem;
    letter-spacing: 0;
    line-height: 1.6rem;
    border-radius: 7px;
    text-transform: capitalize;
    transition: transform 600ms ease-in-out;
    background-color: ${({ theme }) => theme.colors?.button};
    border: 2px solid ${({ theme }) => theme.colors?.button};
    color: ${({ theme }) => theme.colors.white};
   }

   .buttonClear{
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors?.button};
    color: ${({ theme }) => theme.colors?.button};
   }

   button:hover, .button:hover{
    background-color: ${({ theme }) => theme.colors?.buttonhover};
   }

   input, textarea{
    width: 100%;
    max-width: 560px;
    border: 1px solid grey;
    outline: none;
    font-size: 1.5rem;
    appearance: none;
    border-radius: 0;
    padding: 1.08rem;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors?.grey01};
   }

   input:hover, textarea:hover{
    background-color: ${({ theme }) => theme.colors?.inputhover};
   }

  input::placeholder, textarea::placeholder {
    font-weight: 400;
    opacity: .9;
    font-size: 12px;
    text-transform: capitalize !important;
    color: grey;
  }

  .scrolling{
    /* background-image: linear-gradient(to bottom right, #F37D02, #177415); */
    color: #177415;
    transition: opacity 0.5s ease;
    background-color: #efefef;
    transition: background-color 1s ease;
  }

  #abt-cnt{
    margin:0 10rem 2rem;
    p{
      width: 60%;
      margin: 10rem auto;
    }
  }

  .gradient-circles {
    position: relative;
    overflow: hidden;
  }

  .gradient-circles::before,
  .gradient-circles::after {
    content: '';
    position: absolute;
    width: 200px; 
    height: 200px;
    border-radius: 50%;
  }

  .gradient-circles::before {
    background: radial-gradient(circle at top left, #F37D02, #177415);
    opacity: 0.2;
    
  }

  .gradient-circles::after {
    bottom: 0px; 
    right: 0px;
    opacity: 0.1;
    background: radial-gradient(circle at bottom right, #F37D02, #177415);
  }

  .pagination{
    display: flex;
    margin: 0 auto 4rem ;
    align-items:center ;
    justify-content:center ;

  }

  .pagination button{
    width: 40px;
    border-radius:0;
    border: none;
    margin: 0 .32rem;
  }

  .pagination button.active {
    background-color: ${({ theme }) => theme.colors?.primary};
  }
`;

export { GlobalStyles };
