import styled from "styled-components";
// import { useEffect } from "react";
import {
  Route,
  Routes,
  //  useNavigate
} from "react-router-dom";
// import Onboarding from "../../Dashboard/Pages/Onboarding/Onboarding";
// import Staffs from "../../Dashboard/Pages/Staffs/Staffs";
// import Ratings from "../../Dashboard/Pages/Ratings/Ratings";
// import CandidateReview from "../../Dashboard/Pages/Review/CandidateReview";
// import TimeOff from "../../Dashboard/Pages/TimeOff/TimeOff";
// import Procurements from "../../Dashboard/Pages/Procurements/Procurements";
// import DashTop from "../../Dashboard/Components/Others/Dashtop/DashTop";
// import Employee from "../../Dashboard/Pages/Employee/Employee";
import Blogpost from "./blogpost";
import Sidenav from "../../components/sidenav";
import DashpageWrapper from "../../components/dashWrapper";
// import { useSelector } from "react-redux";

const Admin = () => {
  //  const auth = useSelector((state) => state.auth);
  //  const navigate = useNavigate();

  // useEffect(() => {
  //    if (!auth._id) {
  //       navigate("/login");
  //    }
  // }, [auth._id, navigate, URL]);

  return (
    <DashpageWrapper>
      <Sidenav />
      <MainPageWrapper>
        <DashContent>
          <Routes>
            <Route path="/" element={<Blogpost />} />
            {/* <Route path="/review" element={<CandidateReview />} />
                  <Route path="/onboard" element={<Onboarding />} />
                  <Route path="/employees" element={<Staffs />} />
                  <Route path="/employees/:id" element={<Employee />} />

                  <Route path="/ratings" element={<Ratings />} />
                  <Route path="/timeoff" element={<TimeOff />} />
                  <Route path="/procurements" element={<Procurements />} /> */}
          </Routes>
        </DashContent>
      </MainPageWrapper>
    </DashpageWrapper>
  );
};

export default Admin;

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  position: relative;
  height: 100vh;
`;

const DashContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  padding: 2rem;
  width: 100%;
`;
