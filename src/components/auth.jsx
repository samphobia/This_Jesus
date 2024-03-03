import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser, registerUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 1s forwards;

  h3 {
    color: ${({ theme }) => theme.colors?.primary};
  }
`;

export const LoginForm = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: email,
        password: password,
      })
    );
  };

  useEffect(() => {
    if (auth?.loginStatus == "rejected") {
      console.log(auth);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else if (auth?.loginStatus == "success") {
      setSuccess(true);
    }
    console.log("i ran");

    if (success && auth._id) {
      navigate("/login");
    }
  }, [auth.loginStatus]);

  return (
    <Form>
      <h3>Welcome Back</h3>
      <input
        required
        type="email"
        placeholder="Example@email.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        required
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {error && (
        <span style={{ color: "red" }}>{auth?.loginError?.message}</span>
      )}
      {auth?.loginStatus == "pending" ? (
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Loading...
        </button>
      ) : (
        <button type="submit" onClick={handleSignin}>
          Login
        </button>
      )}
    </Form>
  );
};

export const RegisterForm = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [match, setMatch] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      let user = {
        name: name,
        email: email,
        password: password,
        role: "user",
      };
      dispatch(registerUser(user));
      console.log("fired");
      setMatch(null);
    } else {
      setMatch("unmatch");

      const timer = setTimeout(() => {
        setMatch(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    if (auth?.registerStatus == "rejected") {
      console.log(auth);
      setError(true);
      const timer = setTimeout(() => {
        setError(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (auth?.registerStatus == "success") {
      setSuccess(true);
    }
    console.log("i ran");
  }, [auth.registerStatus]);

  return (
    <Form>
      <h3>Create an Account</h3>
      {success === true ? (
        <div>
          <h4 style={{ color: "green" }}>
            Your Account has been successfully created <br />
            We sent you a mail: Check your mail box
          </h4>
        </div>
      ) : null}
      <input
        required
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        required
        type="email"
        placeholder="Example@email.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        required
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        required
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      {match === "unmatch" && (
        <span style={{ color: "red" }}>password does not match</span>
      )}
      {error && (
        <span style={{ color: "red" }}>{auth?.registerError?.message}</span>
      )}
      {auth?.registerStatus == "pending" ? (
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Loading...
        </button>
      ) : (
        <button type="submit" onClick={handleRegister}>
          Sign Up
        </button>
      )}
    </Form>
  );
};
