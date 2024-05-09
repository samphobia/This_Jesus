import { FooterWrapper } from "./footerStyles";
// import logo from "../../assets/logo.png";
import cards from "../../assets/cards.png";

const Footer = () => {
   return (
      <FooterWrapper>
         <div className="right">
            <div className="first">
               {/* <img src={logo} alt="logo" /> */}
               <h2>This Jesus</h2>
               <p>
                  This Jesus Site is all about the works of Rev.Tola Osinubi on his religious journey in christianity with Jesus
               </p>
            </div>

            <div className="second">
               <span>Quick Links</span>
               <br />
               <br />
               <span>Home</span>
               <span>About Us</span>
               <span> Blog</span>
               <span>Contact</span>
               {/* <span>Courses</span> */}
               <span>Donation</span>
            </div>
         </div>
         <div className="third">
            <span>Contact Us</span>
            <br />
            <br />
            <span>info@thisjesus.com</span>
            <span>+234 816 772 8555</span>
            <span>
               333 Adeboye Road Atikori Ogun State, Nigeria
            </span>
            <br/>
            <img src={cards} alt="cards" />
         </div>
      </FooterWrapper>
   );
};

export default Footer;
