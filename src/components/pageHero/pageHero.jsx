/* eslint-disable react/prop-types */

import { PageHeroWrapper } from "./pageHeroStyles";

const PageHero = ({ image, text }) => {
   return (
      <PageHeroWrapper>
         <div className="pageName">
            <h3>{text}</h3>
         </div>
         <img src={image} alt="Description" />
         <div className="overlay-image" />
      </PageHeroWrapper>
   );
};

export default PageHero;
