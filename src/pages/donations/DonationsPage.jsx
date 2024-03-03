/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../App";
import Loading from "../../components/Loading/Loading";
import { DonationsWrapper } from "./DonationsStyle";

const DonationsPage = () => {
  const { id } = useParams();

  const [donationsData, setDonationsData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    setLoading(true);

    const getData = () => {
      axios
        .get(`${BASE_URL}/donations/${id}`, {
          cancelToken: cancelToken.token,
        })
        .then((response) => {
          setDonationsData(response.data?.donations);
          console.log(donationsData);
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

  // const { title, imageUrl, date, details, _id } = donationsData;

  return (
    <DonationsWrapper>
      {loading && <Loading />}
      {donationsData && (
        <div>
          <div className="header">
            <div className="imgWrapper">
              <img src={donationsData.imageUrl} alt={donationsData.title} />
            </div>
            <h1>{donationsData.title}</h1>
          </div>
          <br />
          <span>{donationsData.date}</span>
          <br />
          <p>{donationsData.details}</p>
        </div>
      )}
      {error && <h2 id="error">{error}</h2>}
    </DonationsWrapper>
  );
};

export default DonationsPage;
