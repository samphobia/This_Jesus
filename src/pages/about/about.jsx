import Footer from "../../components/footer/footer";
import PageHero from "../../components/pageHero/pageHero";

const About = () => {
   return (
      <div>
         <PageHero
            image="https://img.freepik.com/free-photo/full-shot-man-holding-badminton-racket_23-2149733054.jpg?w=996&t=st=1701667748~exp=1701668348~hmac=f24d5e7141d40650fad7750c11e834f24b973c3839b2c6fabbeb9858de048b12"
            text="About"
         />
         <div id="abt-cnt" className="gradient-circles">
            <p>
               This Jesus, written by Pastor Tola Osinubi in 2014, to young individuals on their journey towards
               academic and personal success. Our youth mentoring program pairs
               students with experienced mentors who offer support, advice, and
               encouragement as they navigate the challenges of both education
               and career growth.
               <br />
               <br />
               We understand the importance of education and believe that every
               student deserves access to quality learning opportunities.
               That&apos;s why we offer a range of educational resources and
               scholarship opportunities to help students achieve their goals.
               Our mentors and education experts are here to guide students
               through the college and graduate school admission process,
               helping them understand the requirements and select the best-fit
               institution.
               <br />
               <br />
               In addition to mentoring and educational support, we also offer
               general guidance on various aspects of life, from personal growth
               to career development. Our goal is to help young individuals
               build a foundation for success and achieve their full potential.
               Join our community of motivated and driven young individuals and
               experience the power of mentorship and guidance. Start your
               journey towards a bright future with LEAD and MENTOR today.
            </p>
         </div>
         <Footer />
      </div>
   );
};

export default About;
