// import logo from "../../assets/logo.png";
// import BlogCard from "../../components/blogCard";
// import Card from "../../components/card";
import CardsAndTestimonies from "../../components/cardsAndTestimonies/cardsAndTestimonies";
// import { blogData } from "../../components/cardsAndTestimonies/cardsData";
import Discover from "../../components/discover/discover";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import NewsLetter from "../../components/newsLetter/newsLetter";
import Logs from "../../components/weblogs/logs";



const Home = () => {
   return (
      <div>
         <Hero />
         <Logs />
         <Discover />
         <CardsAndTestimonies />
         <NewsLetter />
         <Footer />
         {/* <h2>Home</h2>
         <img src={logo} />
         <br />
         <button>button type</button>
         <br />
         <br />
         <button className="buttonClear">button type 2</button>
         <br />
         <br />
         <Card>
            <h2>Header</h2>
            <p>
               Aliqua dolore nostrud tempor sunt reprehenderit commodo eiusmod
               laboris ullamco.
            </p>
         </Card>
         <br />
         <Card backgroundcolor={"f8f8f8"} textColor={"black"}>
            <h2>Header</h2>
            <p>
               Aliqua dolore nostrud tempor sunt reprehenderit commodo eiusmod
               laboris ullamco.
            </p>
         </Card>
         <br />
         <br />
         {blogData.map((blog) => (
            <BlogCard
               key={blog.id}
               image={blog.image}
               title={blog.title}
               text={blog.text}
               rating={blog.rating}
            />
         ))} */}
      </div>
   );
};

export default Home;



// import { useState } from "react";
// import "animate.css";
// import { GlobalStyles } from "./globalstyles";
// import { ThemeProvider } from "styled-components";
// import { Routes, Route, Link } from "react-router-dom";
// import { RiMenuUnfoldFill } from "react-icons/ri";
// import Logo from "../src/assets/images/logo (1).png";
// import Home from "./Pages/Home/Home";
// import Memo from "./Pages/Memo/Memo";

// import Events from "./Pages/Events/Events";
// import About from "./Pages/About/About";
// import People from "./Pages/People/People";
// import Solutions from "./Pages/Solutions/Solutions";
// import ContactUS from "./Pages/Contact/Contact";
// import News from "./Pages/News/News";
// import Page404 from "./Pages/404/Page404";
// import Modal from "./Components/Modal/Modal";

// const theme = {
//   colors: {
//     white: "#ffffff",
//     black: "#000000",
//     primary: "#173361",
//     button: "#2299fe",
//     buttonhover: "#3f75cc",
//     grey01: "#fbfbfb",
//     grey02: "#e2e2e2",
//     inputhover: "#f3f0f0c3",
//     transparent: "transparent",
//     green: "#02b35a",
//     side: "#092240",
//     //  side: "#0a4f72",
//     red: "#e0515f",
//   },
// };

// export const BASE_URL = "https://dkndevweb.cyclic.app";

// function App() {
//   const [display, setDisplay] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggledisplay = () => {
//     setDisplay(!display);
//   };

//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyles />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/admin" element={<Admin />} /> */}
//         <Route path="/memo" element={<Memo />} />
//         <Route path="/events" element={<Events />} />
//         {/* <Route path="/career" element={<Career />} /> */}
//         <Route path="/contact_us" element={<ContactUS />} />
//         <Route path="/about_us" element={<About />} />
//         <Route path="/our_people" element={<People />} />
//         <Route path="/our_solutions" element={<Solutions />} />
//         <Route path="/news/:id" element={<News />} />
//         <Route path="*" element={<Page404 />} />
//       </Routes>

//       <div>
//         {" "}
//         <Modal />
//       </div>
//       <div className="navv">
//         <div className="menu" onClick={toggledisplay}>
//           <h1>
//             <RiMenuUnfoldFill />
//           </h1>
//         </div>
//         {!display ? (
//           <div
//             className="navcontents animate__animated animate__rubberBand"
//             onClick={toggledisplay}
//           >
//             <h4>
//               <Link to="/">Home</Link>
//             </h4>
//             {/* <h4>
//                      <Link to="/about_us">About us</Link>
//                   </h4> */}
//             <h4>
//               <Link to="/events">Events</Link>
//             </h4>
//             <h4>
//               <Link to="/our_solutions">Our solutions</Link>
//             </h4>
//             <h4>
//               <Link to="/our_people">Our people</Link>
//             </h4>
//             <h4>
//               <Link to="/contact_us">Contact us</Link>
//             </h4>
//             <h4>
//               <Link to="/memo">Memo</Link>
//             </h4>
//             {/* <h4>
//                      <Link to="/career">Career</Link>
//                   </h4> */}
//           </div>
//         ) : null}
//       </div>

//       <div className={isScrolled ? "navBar scrolling" : "navBar"}>
//         <div className="width">
//           <span>
//             <Link to="/">
//               <img src={Logo} className="logo-img" alt="Denukan Logo " />
//               {/* <h1>Denukan</h1> */}
//               {/* <p>NETWORK LIMITED</p> */}
//             </Link>
//           </span>
//           <div className="links">
//             <h4>
//               <Link to="/">Home</Link>
//             </h4>
//             {/* <h4>
//                      <Link to="/about_us">About us</Link>
//                   </h4> */}
//             <h4>
//               <Link to="/events">Events</Link>
//             </h4>
//             <h4>
//               <Link to="/our_solutions">Our solutions</Link>
//             </h4>
//             <h4>
//               <Link to="/our_people">Our people</Link>
//             </h4>
//             <h4>
//               <Link to="/contact_us">Contact us</Link>
//             </h4>
//             <h4>
//               <Link to="/memo">Memo</Link>
//             </h4>
//             {/* <h4>
//                      <Link to="/career">Career</Link>
//                   </h4> */}
//           </div>
//         </div>
//       </div>

//       <div className="footer">
//         <h4>
//           Copyright &copy; 2022 Denukan Network Limited All Rights Reserved
//         </h4>
//         <p>
//           Denukan Network Limited is duly registered under the law of the
//           Federal Republic of Nigeria.
//         </p>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;