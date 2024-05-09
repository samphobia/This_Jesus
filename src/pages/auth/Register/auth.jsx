// import { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import logo from "../../assets/logo.png";
// import { LoginForm, RegisterForm } from "../../components/auth";

// const AuthPage = () => {
//   const [isLoginForm, setIsLoginForm] = useState(false);

//   const toggleForm = () => {
//     setIsLoginForm((prevState) => !prevState);
//   };

//   return (
//     <Container>
//       <ImageSection isLoginForm={isLoginForm}>
//         {isLoginForm ? (
//           <img
//             src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
//             alt="Login"
//           />
//         ) : (
//           <img
//             src="https://media.istockphoto.com/id/1471378406/photo/the-scene-of-the-wellington-point-recreation-reserve-in-the-sunset-in-brisbane.jpg?s=2048x2048&w=is&k=20&c=BAr_FHzwa_AWpXXIaRukQgYZhVeGG0TrhVaolsiM7qk="
//             alt="Register"
//           />
//         )}
//       </ImageSection>
//       <FormSection>
//         <FormContainer isLoginForm={isLoginForm}>
//           {isLoginForm ? (
//             <LoginForm />
//           ) : (
//             <RegisterForm isLoginForm={isLoginForm} setIsLoginForm={setIsLoginForm} />
//           )}

//           <ToggleFormButton onClick={toggleForm}>
//             {isLoginForm ? "Create an account" : "Already have an account?"}
//           </ToggleFormButton>
//         </FormContainer>
//         <Link to="/" className="img">
//           <img src={logo} />
//         </Link>
//       </FormSection>
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 100vw;
//   z-index: 999999999999999;
//   position: fixed;
// `;

// const ImageSection = styled.div`
//   width: 50%;
//   height: 100%;
//   transition: 0.5s ease-in-out;
//   overflow: hidden;
//   background: white;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.5s ease-in-out;
//     transform: ${({ isLoginForm }) =>
//       isLoginForm ? "translateX(0%)" : "translateX(0%)"};
//   }
// `;

// const FormSection = styled.div`
//   position: relative;
//   width: 50%;
//   height: 100%;
//   padding: 5rem;
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   background: white;

//   input {
//     margin-bottom: 1.2rem;
//   }

//   button {
//     margin: 1.4rem 0;
//   }

//   .img {
//     position: absolute;
//     top: 20px;
//   }
// `;

// const FormContainer = styled.div`
//   width: 80%;
//   transition: 0.5s ease-in-out;
//   transform: ${({ isLoginForm }) =>
//     isLoginForm ? "translateX(0%)" : "translateX(0%)"};
// `;

// // Define your RegisterForm and LoginForm components with necessary inputs and buttons

// const ToggleFormButton = styled.span`
//   background: none;
//   cursor: pointer;
//   margin-top: 2rem;
//   color: ${({ theme }) => theme.colors?.button};
// `;

// export default AuthPage;

// RegistrationForm.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../../features/auth/userSlice';
// import { Form, Input, Button } from './authStyles';


// const RegistrationForm = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'user',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(registerUser(formData));
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
//       <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
//       <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
//       <Button type="submit">Register</Button>
//     </Form>
//   );
// };

// export default RegistrationForm;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Assuming you're using Redux
import { Form, Input, Button } from './authStyles';
import { registerUser } from '../../../features/auth/userSlice';// Assuming you have an action creator

const RegistrationForm = () => {
  const dispatch = useDispatch();
  // const registrationError = useSelector((state) => state.user.error);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });
  const [errors, setErrors] = useState({});

  // Assuming you have a Redux state slice for errors
  const registrationError = useSelector((state) => state.user.error)

  useEffect(() => {
    // Clear form data on component mount (refresh)
    setFormData({
      name: '',
      email: '',
      password: '',
      role: 'user',
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(errors).length === 0) {
      // If there are no errors, dispatch the action
      dispatch(registerUser(formData));
    } else {
      // Set errors state if there are validation errors
      setErrors(errors);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        // Display error message if exists
        error={errors.name}
      />
      {errors.name && <span>{errors.name}</span>}
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        // Display error message if exists
        error={errors.email}
      />
      {errors.email && <span>{errors.email}</span>}
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        // Display error message if exists
        error={errors.password}
      />
      {errors.password && <span>{errors.password}</span>}
      {registrationError && <span>{registrationError}</span>}
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegistrationForm;

