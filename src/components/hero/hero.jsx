import heroimage from "../../assets/bookimage.jpeg";
import { HeroWrapper } from "./heroStyles";

const Hero = () => {
   return (
      <HeroWrapper>
         <div className="text-content">
            <h1 className="primary">THIS JESUS </h1>
            <h1 className="secondary">Page</h1>
            <p>
            This Jesus&lsquo;  provides a comprehensive exploration of the life, teachings, and significance of Jesus Christ from a Catholic perspective. The book delves into various aspects of Jesus life, including his birth, ministry, miracles, teachings, death, and resurrection, offering insights into his divine nature and the impact of his teachings on humanity. Tola&lsquo;s work is highly regarded for its eloquence, depth of thought, and ability to resonate with readers seeking to understand the Christian faith through the lens of Jesus&lsquo; life and teachings.
            </p>
            <div className="btn-flex">
               <button>Get Started</button>
               <button className="buttonClear">Discover Now</button>
            </div>
         </div>
         <img src={heroimage} />
      </HeroWrapper>
   );
};

export default Hero;
