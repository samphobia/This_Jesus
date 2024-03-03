// import { useState } from "react";
// import { NewsLetterWrapper } from "./newsLetterStyles";
// import send from "../../assets/send.png";

// const NewsLetter = () => {
//    const [email, setEmail] = useState("");
//    return (
//       <NewsLetterWrapper>
//          <h3>Subscribe to our NewsLetter</h3>
//          <br />
//          <div className="subscribe">
//             <input
//                type="email"
//                id="newsLetter"
//                placeholder="Email Address"
//                onChange={(e) => setEmail(e.target.value)}
//                value={email}
//                required
//             />
//             <div className="send">
//                <img src={send} alt="send " />
//             </div>
//          </div>
//       </NewsLetterWrapper>
//    );
// };

// export default NewsLetter;

import { useState } from "react";
import { NewsLetterWrapper } from "./newsLetterStyles";
import send from "../../assets/send.png";

const NewsLetter = () => {
   const [email, setEmail] = useState("");

   const handleSubscribe = () => {
      if (email) {
         console.log(`Email: ${email}`);
         console.log("Message: hello, entered email subscribed to your newsletter");
         alert("Subscription successful!");
      } else {
         alert("Please enter an email address");
      }
   };

   return (
      <NewsLetterWrapper>
         <h3>Subscribe to our Newsletter</h3>
         <br />
         <div className="subscribe">
            <input
               type="email"
               id="newsLetter"
               placeholder="Email Address"
               onChange={(e) => setEmail(e.target.value)}
               value={email}
               required
            />
            <div className="send" onClick={handleSubscribe}>
               <img src={send} alt="send" />
            </div>
         </div>
      </NewsLetterWrapper>
   );
};

export default NewsLetter;
