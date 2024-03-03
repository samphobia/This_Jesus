import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { GlobalStyles } from "../globalstyles";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Page404 from "./pages/404/404";
import Admin from "./pages/admin/admin";
import Navbar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import AuthPage from "./pages/auth/auth";
import Modal from "./components/modal";
import Book from "./pages/book/book";
import BlogPage from "./pages/blogPage/BlogPage";
import DonationsPage from "./pages/donations/DonationsPage";
import CoursesPage from "./pages/courses/CoursesPage";
import { fetchBooks } from "./features/book/bookSlice";
import { loadUser } from "./features/auth/authSlice";
export const BASE_URL = "https://tiny-fawn-moccasins.cyclic.app";

const theme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    primary: "#F37D02",
    secondary: "#177415",
    button: "#177415",
    buttonHover: "#375425",
    grey01: "#fbfbfb",
    grey02: "#e2e2e2",
    inputhover: "#f3f0f0c3",
    transparent: "transparent",
    red: "#e0515f",
  },
};

function App() {
  //  const [display, setDisplay] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  //  const toggledisplay = () => {
  //     setDisplay(!display);
  //  };

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar isScrolled={isScrolled} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/donations/:id" element={<DonationsPage />} />
        <Route path="/courses/:id" element={<CoursesPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/book-launch" element={<Book />} />
      </Routes>
      <div>
        <Modal />
      </div>
    </ThemeProvider>
  );
}

export default App;
