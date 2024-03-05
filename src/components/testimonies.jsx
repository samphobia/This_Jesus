import { useState } from "react";
import styled from "styled-components";

const TestimoniesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center align content horizontally on smaller screens */
  padding: 2rem; /* Added padding for spacing on smaller screens */
`;

const TestimoniesWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Change to column layout on smaller screens */
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 1rem; /* Adjusted margin for spacing on smaller screens */
  }

  p {
    color: ${({ theme }) => theme.colors?.primary};
    text-align: center; /* Center align text on smaller screens */
    margin-bottom: 1rem; /* Adjusted margin for spacing on smaller screens */
  }
`;

const TestimoniesTitle = styled.h3`
  margin-bottom: 1rem; /* Adjusted margin for spacing on smaller screens */
  text-align: center; /* Center align text on smaller screens */
`;

const Testimonial = styled.div`
  padding: 1.5rem;
  background: #f7f7f7;
  border-radius: 10px;
  max-width: 90vw; /* Adjusted maximum width for smaller screens */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem; /* Adjusted margin for spacing on smaller screens */

  span {
    display: block; /* Changed to block element for better spacing */
    margin: 1rem 0; /* Adjusted margin for spacing on smaller screens */
    font-size: 1rem; /* Adjusted font size for smaller screens */
    opacity: 0.85;
    text-align: center; /* Center align text on smaller screens */
  }

  .Top {
    display: flex;
    flex-direction: column; /* Change to column layout on smaller screens */
    align-items: center; /* Center align content horizontally on smaller screens */

    .infoData {
      display: flex;
      align-items: center;

      img {
        height: 50px; /* Adjusted image height for smaller screens */
        width: 50px; /* Adjusted image width for smaller screens */
        margin-right: 1rem;
      }
    }
  }

  .buttons {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center; /* Center align buttons horizontally on smaller screens */
    margin-top: 1rem; /* Adjusted margin for spacing on smaller screens */
  }

  #button {
    width: 40px; /* Adjusted button width for smaller screens */
    height: 40px; /* Adjusted button height for smaller screens */
    margin: 0 0.5rem; /* Adjusted margin for spacing on smaller screens */
  }
`;

const StarRating = styled.div`
   font-size: 18px;
   color: gold;
   display: flex;
`;

const Star = styled.span`
   font-size: 18px;
   color: gold;
`;

const Testimonies = () => {
   const testimonials = [
      {
         client: "Client 1",
         comment:
            "Great service! Highly recommended Anim elit elit consectetur consequat dolore est eiusmod culpa Cillum quis cupidatat nisi tempLorem excepteur ad incididunt nulla qui proident quis mollit culpa cupidatat eu incididunt officVelit id elit nulla mollit exercitation eiusmod nostrud voluptate ex.Nisi reprehenderit aute enim minim velit amet.Qui irure in consequat cupidatat id culpa sunt ullamco laborum proident.ia culpa.Excepteur eu qui commodo quis consectetur labore sint ut veniam non nisi quis.Laborum proident aliqua pariatur consectetur.or culpa sint duis nostrud ea id...",
         rating: 4,
         img: "https://immigrationspecialists.co.za/wp-content/uploads/2018/03/black-businessman-happy-expression_1194-2639.jpg",
         role: "founder",
      },
      {
         client: "Client 2",
         comment:
            "Excellent experience with this company Cillum id ipsum qui irure eiEt proident sunt excepteur nulla aliquip Lorem voluptate est culpa labore.Reprehenderit laboris sunt voluptate sint commodo aute.Proident deserunt occaecAd dolor mollit anim dolore velit do aliquip mollit minim occaecat duis deserunt sunt et.Tempor duis magna ex veniam in dolore non.Do ut veniam pariatur sint cupidatat eu et ea cupidatat.at pariatur anim.usmod in duis eiusmodIrure qui dolore minim mollit Lorem id fugiat deserunt irure sit anim aliquip quis magna...",
         rating: 5,
         img: "https://rawakalong.desa.id/wp-content/uploads/2019/02/person2.jpg",
         role: "co-founder",
      },
      {
         client: "Client 3",
         comment:
            "Another positive testimonial Veniam in id laborum ipsum sunt Lorem sunt duisIrure voluptate non reprehenderit aliqua id est duis non commodo.Enim commodo aliquip mollit eu magna eu commodo ea eu.Aute velit dolore officia nisi irure cillum et.Ullamco nisi velit nulla elit minim ipsum est elit est culpa do amet.Adipisicing officia aliqua enim incididunt laboris Lorem occaecat ipsum magna minim mollit do.Laboris commodo esse fugiat incididunt magna adipisicing. enim consectetur Exercitation nisi in consequat id eiusmod minim sunt magna in incididunt..",
         rating: 4,
         img: "https://www.shusterman.com/images/ann-s.jpg",
         role: "client",
      },
      {
         client: "Client 4",
         comment:
            "Yet another satisfied client Excepteur incididunt enim cupidatat commodo non non esse ea dolore  Duis irure labore dolor velit ea occaecaEx fugiat deserunt nostrud ipsum fugiat in nisi elit irure.Nulla ad deserunt irure fugiat est.Pariatur dolore proident pariatur quis sunt fugiat excepteur occaecat in tempor.Qui exercitation exercitation dolore deserunt non anim dolor ipsum id et do dolore laboris.t eiusmod est et irure reprehenderit pariatur temporveniam sint cupidatat..",
         rating: 5,
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoUISb1WgmbdS7j-SJ72J_BVBjhW_CD0OydGwH1dL4sRdZnPB1n3s6kOVj4ZtfxGsPXI&usqp=CAU",
         role: "student",
      },
   ];

   const [activeIndex, setActiveIndex] = useState(0);

   const nextSlide = () => {
      setActiveIndex((prevIndex) =>
         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
   };

   const prevSlide = () => {
      setActiveIndex((prevIndex) =>
         prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
   };

   const renderStars = (rating) => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
         if (i < rating) {
            stars.push(<Star key={i}>★</Star>);
         } else {
            stars.push(<Star key={i}>&#9734;</Star>); //
         }
      }
      return stars;
   };

   return (
      <TestimoniesContainer>
         <TestimoniesTitle>Testimonies</TestimoniesTitle>
         <TestimoniesWrapper>
            <img
               src="https://images.unsplash.com/photo-1655401435739-4ece10974bcf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlc3RpbW9ueXxlbnwwfHwwfHx8MA%3D%3D"
               alt="testimonial"
            />
            <div>
               <p>Eu laborum consectetur excepteur excepteur ad dolore enim.</p>
               <Testimonial>
                  <div className="Top">
                     <div className="infoData">
                        <img
                           src={testimonials[activeIndex].img}
                           alt="testimonial"
                        />
                        <h4>{testimonials[activeIndex].client}</h4>
                     </div>
                     <StarRating>
                        {renderStars(testimonials[activeIndex].rating)}
                     </StarRating>
                  </div>
                  <span>
                     {testimonials[activeIndex].comment.length > 250
                        ? `${testimonials[activeIndex].comment.slice(
                             0,
                             350
                          )}...`
                        : testimonials[activeIndex].comment}
                  </span>
                  <div className="buttons">
                     <div onClick={prevSlide} id="button">
                        &lt;
                     </div>
                     <div onClick={nextSlide} id="button">
                        &gt;
                     </div>
                  </div>
               </Testimonial>
            </div>
         </TestimoniesWrapper>
      </TestimoniesContainer>
   );
};

export default Testimonies;
