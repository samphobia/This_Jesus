import { Link } from "react-router-dom";
import BlogCard from "../blogCard";
import Testimonies from "../testimonies";
import axios from "axios";
import {
  CardsAndTestimoniesWrapper,
  CardGrid,
} from "./cardsAndTestimoniesStyles";
import { blogData, blogData2, blogData3 } from "./cardsData";
import { BASE_URL } from "../../App";
import { useEffect, useReducer } from "react";
import Loading from "../Loading/Loading";

const INITIAL_STATE = {
  loading: false,
  courses: [],
  error: "",
};

const FETCH_COURSES_START = "FETCH_COURSES_START";
const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";
const FETCH_COURSES_ERROR = "FETCH_COURSES_ERROR";

const coursesReducer = (state, action) => {
  switch (action.type) {
    case FETCH_COURSES_START:
      return {
        loading: true,
        courses: [],
        error: "",
      };
    case FETCH_COURSES_SUCCESS:
      return {
        error: "",
        loading: false,
        courses: action.payload,
      };
    case FETCH_COURSES_ERROR:
      return { error: action.payload, loading: false, courses: [] };
    default:
      return state;
  }
};

const CardsAndTestimonies = () => {
  const [coursesState, dispatch] = useReducer(coursesReducer, INITIAL_STATE);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: "FETCH_COURSES_START" });
    const options = {
      method: "GET",
      url: `${BASE_URL}/api/book/books`,
    };
    axios
      .request(options, cancelToken)
      .then(function (response) {
        console.log(response);
        dispatch({
          type: "FETCH_COURSES_SUCCESS",
          payload: response.data?.courses,
        });
      })
      .catch(function (error) {
        if (axios.isCancel(error)) {
          console.log("you canceled the request");
        } else {
          dispatch({ type: "FETCH_COURSES_ERROR", payload: error.message });
          console.log(error);
        }
      });

    return () => {
      cancelToken.cancel();
    };
  }, []);

  return (
    <CardsAndTestimoniesWrapper>
      <h3>Featured Courses</h3>
      <CardGrid>
        {coursesState.loading && <Loading />}
        {coursesState.courses?.length == 0 && (
          <>
            {blogData.slice(0, 4).map((blog) => (
              <Link to={`courses/${blog.id}`} key={blog.id}>
                <BlogCard
                  image={blog.image}
                  title={blog.title}
                  text={blog.text}
                  rating={blog.rating}
                />
              </Link>
            ))}
          </>
        )}
      </CardGrid>
      <h3>Our Blog</h3>
      <CardGrid>
        {blogData2.slice(0, 4).map((blog) => (
          <Link to={`blog/${blog.id}`} key={blog.id}>
            <BlogCard image={blog.image} title={blog.title} text={blog.text} />
          </Link>
        ))}
      </CardGrid>
      <h3>Donation</h3>
      <CardGrid>
        {blogData3.slice(0, 4).map((blog) => (
          <Link to={`donations/${blog.id}`} key={blog.id}>
            <BlogCard image={blog.image} title={blog.title} text={blog.text} />
          </Link>
        ))}
      </CardGrid>
      <Testimonies />
    </CardsAndTestimoniesWrapper>
  );
};

export default CardsAndTestimonies;
