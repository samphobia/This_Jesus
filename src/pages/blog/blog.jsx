import styled from "styled-components";

const BlogContentWrapper = styled.div`
   width: 100%;
   padding: 1rem 10rem;
   margin: auto;
   display: flex;
   justify-content: space-between;
`

const SearchAndRecents = styled.div`
   width: 45%;

h4{
   color: ${({ theme }) => theme.colors?.button};
   padding-bottom: 1rem;
   border-bottom: 2px dotted ${({ theme }) => theme.colors?.primary};
   margin-top: 2.5rem;
}
`

import  { useState } from "react";
import BlogCard from "../../components/blogCard";
import { DualCardGrid } from "../../components/cardsAndTestimonies/cardsAndTestimoniesStyles";
import { blogData4 } from "../../components/cardsAndTestimonies/cardsData";
import Footer from "../../components/footer/footer";
import PageHero from "../../components/pageHero/pageHero";

const Blog = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const blogsPerPage = 6;

   
  // State for search input
  const [searchInput, setSearchInput] = useState("");

  // State for clicked blog topics
  const [clickedTopics, setClickedTopics] = useState([]);

   const indexOfLastBlog = currentPage * blogsPerPage;
   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
   const currentBlogs = blogData4.slice(indexOfFirstBlog, indexOfLastBlog);

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const handleSearchInputChange = (e) => {
      setSearchInput(e.target.value);
      // Additional logic for search filtering can be implemented here
    };

   const handleBlogCardClick = (title) => {
      setClickedTopics([...clickedTopics, title]);
      console.log(clickedTopics)
    };

   return (
      <div>
         <PageHero
            image="https://img.freepik.com/free-photo/man-playing-badminton-medium-shot_23-2149733055.jpg?w=1380&t=st=1701715798~exp=1701716398~hmac=f701aa7d9e05c636286db61297d559540d55490cd39d9d6f80717d00c34dc652"
            text="Blog"
         />
   <BlogContentWrapper>
        <DualCardGrid>
          {currentBlogs.map((blog) => (
            <div key={blog.id}                  
            onClick={()=>handleBlogCardClick(blog.title)} // Assuming `title` as the topic
            >
               <BlogCard
                 image={blog.image}
                 title={blog.title}
                 text={blog.text}
               />
            </div>
          ))}
        </DualCardGrid>
        <SearchAndRecents>
          {/* Search Bar */}
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchInputChange}
            placeholder="Search..."
          />

          {/* List of clicked topics */}
          <div>
            <h2>Recently Clicked Topics:</h2>
            {clickedTopics.length > 0 ? (
              clickedTopics.slice(0, 10).map((title, index) => (
               <>
                <h4 key={index}>{title}</h4>
           
               </>
              ))
            ) : (
              <p>No content read today.</p>
            )}
          </div>
        </SearchAndRecents>
      </BlogContentWrapper>
         <ul className="pagination">
            {Array.from({ length: Math.ceil(blogData4.length / blogsPerPage) }, (_, index) => (
               <div key={index}>
                  <button
                     className={currentPage === index + 1 ? 'active' : ''}
                     onClick={() => paginate(index + 1)}
                  >
                     {index + 1}
                  </button>
               </div>
            ))}
         </ul>
         <Footer />
      </div>
   );
};

export default Blog;

