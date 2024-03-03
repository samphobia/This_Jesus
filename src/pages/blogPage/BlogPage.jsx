/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../App";
import Loading from "../../components/Loading/Loading";
import { BlogWrapper } from "./BlogStyles";

const BlogPage = () => {
  const { id } = useParams();

  const [blogData, setBlogData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    setLoading(true);

    const getData = () => {
      axios
        .get(`${BASE_URL}/blog/${id}`, {
          cancelToken: cancelToken.token,
        })
        .then((response) => {
          setBlogData(response.data?.blog);
          console.log(blogData);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("request canceled");
          } else {
            setError(error.message);
            console.log(error.message);
          }
        });
    };

    getData();
    setLoading(false);
    return () => {
      cancelToken.cancel();
    };
  }, [id]);

  // const { title, imageUrl, date, details, _id } = blogData;

  return (
    <BlogWrapper>
      {loading && <Loading />}
      {blogData && (
        <div>
          <div className="header">
            <div className="imgWrapper">
              <img src={blogData.imageUrl} alt={blogData.title} />
            </div>
            <h1>{blogData.title}</h1>
          </div>
          <br />
          <span>{blogData.date}</span>
          <br />
          <p>{blogData.details}</p>
        </div>
      )}
      {error && <h2 id="error">{error}</h2>}
    </BlogWrapper>
  );
};

export default BlogPage;
