/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../App";
import Loading from "../../components/Loading/Loading";
import { CoursesWrapper } from "./CoursesStyles";

const CoursesPage = () => {
  const { id } = useParams();

  const [coursesData, setCoursesData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    setLoading(true);

    const getData = () => {
      axios
        .get(`${BASE_URL}/courses/${id}`, {
          cancelToken: cancelToken.token,
        })
        .then((response) => {
          setCoursesData(response.data?.courses);
          console.log(coursesData);
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

  // const { title, imageUrl, date, details, _id } = coursesData;

  return (
    <CoursesWrapper>
      {loading && <Loading />}
      {coursesData && (
        <div>
          <div className="header">
            <div className="imgWrapper">
              <img src={coursesData.imageUrl} alt={coursesData.title} />
            </div>
            <h1>{coursesData.title}</h1>
          </div>
          <br />
          <span>{coursesData.date}</span>
          <br />
          <p>{coursesData.details}</p>
        </div>
      )}
      {error && <h2 id="error">{error}</h2>}
    </CoursesWrapper>
  );
};

export default CoursesPage;
