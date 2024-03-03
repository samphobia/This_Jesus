import { LoaderWrapper } from "./LoaderStyles";
import loader from "../../assets/loader.gif";

const Loading = () => {
  return (
    <LoaderWrapper>
      <div id="holder">
        <img src={loader} alt="loader" />
      </div>
    </LoaderWrapper>
  );
};

export default Loading;
