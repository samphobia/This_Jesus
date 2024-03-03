import { DiscoverImages, DiscoverWrapper } from "./discoverStyles";
import dis1 from "../../assets/dis1.png";
import dis2 from "../../assets/dis2.png";
import dis3 from "../../assets/dis3.png";
import dis4 from "../../assets/dis4.png";
import dis5 from "../../assets/dis5.png";
import dis6 from "../../assets/dis6.png";

const data = [
   {
      image: dis1,
      text: "Educational  Consulting",
   },
   {
      image: dis2,
      text: "Career & Lifestyle  Counselling",
   },
   {
      image: dis3,
      text: "Job Connect",
   },
   {
      image: dis4,
      text: "Study Abroad",
   },
   {
      image: dis5,
      text: "Statement of Purpose & CV Review",
   },
   {
      image: dis6,
      text: "Motivational Statement",
   },
];

const Discover = () => {
   return (
      <DiscoverWrapper>
         <h2>Discover Top Offer</h2>
         <DiscoverImages>
            {data.map((item, index) => (
               <div className="grid-item" key={index}>
                  <img src={item.image} alt={`Image ${index + 1}`} />
                  <h3 className="text">{item.text}</h3>
               </div>
            ))}
         </DiscoverImages>
      </DiscoverWrapper>
   );
};

export default Discover;
