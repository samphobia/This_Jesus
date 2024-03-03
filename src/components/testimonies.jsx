import { useState } from "react";
import styled from "styled-components";

const TestimoniesContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

const TestimoniesWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   img{
      margin-right: 7rem;
   }

   p {
      color: ${({ theme }) => theme.colors?.primary};
   }


`;

const TestimoniesTitle = styled.h3`
   margin-bottom: 20px;
`;

const Testimonial = styled.div`
   padding: 3rem;
   background: #f7f7f7;
   border-radius: 10px;
   max-width: 900px;
  
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

   span {
      display: inline-block;
      width: 90%;
      margin: 2rem 0;
      font-size: 1.2rem;
      opacity: 0.85;
   }

   .Top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .infoData {
         display: flex;
         align-items: center;

         img {
            height: 60px;
            width: 60px;
            border-radius: 50%;
            border: 2px solid ${({ theme }) => theme.colors?.secondary};
            padding: 3px;
            margin-right: 1rem;
            object-fit: cover;
         }
      }
   }

   .buttons {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: flex-end;
   }

   #button {
      background: #efefef;
      border: 1px solid ${({ theme }) => theme.colors?.secondary};
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 2rem;
      color: ${({ theme }) => theme.colors?.secondary};
      font-weight: 700;
      cursor: pointer;

      &:hover {
         color: ${({ theme }) => theme.colors?.primary};
         border: 1px solid ${({ theme }) => theme.colors?.primary};
      }
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
