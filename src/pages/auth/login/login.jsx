import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../features/auth/autheSlice';
import { Form, Input, ErrorMessage, Button } from './loginStyles';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const loginError = useSelector((state) => state.auth.loginError);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    dispatch(loginUser(formData))
      .then((response) => {
        if (response.payload && response.payload.token) {
          // Save the token to localStorage
          localStorage.setItem('token', response.payload.token);
          // Optionally, you can also save user data to localStorage
          localStorage.setItem('user', JSON.stringify(response.payload.user));
          setFormData({ email: '', password: '' }); // Clear form data
          navigateTo('/') // Redirect to homepage
        }
      })
      .finally(() => {
        setLoading(false); // Set loading to false after request completes
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
      <Button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</Button>
      <Link to="/register">Click here to Register</Link>
    </Form>
  );
};

export default LoginForm;
