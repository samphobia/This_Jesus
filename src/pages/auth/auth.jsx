import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { LoginForm, RegisterForm } from "../../components/auth";

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleForm = () => {
    setIsLoginForm((prevState) => !prevState);
  };

  return (
    <Container>
      <ImageSection isLoginForm={isLoginForm}>
        {isLoginForm ? (
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="Login"
          />
        ) : (
          <img
            src="https://media.istockphoto.com/id/1471378406/photo/the-scene-of-the-wellington-point-recreation-reserve-in-the-sunset-in-brisbane.jpg?s=2048x2048&w=is&k=20&c=BAr_FHzwa_AWpXXIaRukQgYZhVeGG0TrhVaolsiM7qk="
            alt="Register"
          />
        )}
      </ImageSection>
      <FormSection>
        <FormContainer isLoginForm={isLoginForm}>
          {isLoginForm ? (
            <LoginForm />
          ) : (
            <RegisterForm isLoginForm={isLoginForm} setIsLoginForm={setIsLoginForm} />
          )}

          <ToggleFormButton onClick={toggleForm}>
            {isLoginForm ? "Create an account" : "Already have an account?"}
          </ToggleFormButton>
        </FormContainer>
        <Link to="/" className="img">
          <img src={logo} />
        </Link>
      </FormSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  z-index: 999999999999999;
  position: fixed;
`;

const ImageSection = styled.div`
  width: 50%;
  height: 100%;
  transition: 0.5s ease-in-out;
  overflow: hidden;
  background: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
    transform: ${({ isLoginForm }) =>
      isLoginForm ? "translateX(0%)" : "translateX(0%)"};
  }
`;

const FormSection = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding: 5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  background: white;

  input {
    margin-bottom: 1.2rem;
  }

  button {
    margin: 1.4rem 0;
  }

  .img {
    position: absolute;
    top: 20px;
  }
`;

const FormContainer = styled.div`
  width: 80%;
  transition: 0.5s ease-in-out;
  transform: ${({ isLoginForm }) =>
    isLoginForm ? "translateX(0%)" : "translateX(0%)"};
`;

// Define your RegisterForm and LoginForm components with necessary inputs and buttons

const ToggleFormButton = styled.span`
  background: none;
  cursor: pointer;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors?.button};
`;

export default AuthPage;
