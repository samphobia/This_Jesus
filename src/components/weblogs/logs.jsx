import { LogsContainer, LogsWrapper } from "./logsStyles";

const Logs = () => {
   return (
      <LogsWrapper>
         <LogsContainer>
            <div className="log">
               <h3>
                  45
                  <br />
                  Users
               </h3>
            </div>
            <hr />
            <div className="log">
               <h3>
                  563
                  <br />
                  Visitors
               </h3>
            </div>
            <hr />
            <div className="log">
               <h3>
                  101
                  <br />
                  Donations
               </h3>
            </div>
            <hr />
            <div className="log">
               <h3>
                  40+
                  <br />
                  Videos
               </h3>
            </div>
         </LogsContainer>
      </LogsWrapper>
   );
};

export default Logs;
