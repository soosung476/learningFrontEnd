import TopNavi from "./TopNavi";
import { Route, Routes } from "react-router-dom";
import LifeCycle from "./LifeCycle";
import LocalJsonFetcher from "./LocalJsonFetcher";
import ExternalApiFetcher from "./ExternalApiFetcher";
import BookJsonFetcher from "./BookJsonFetcher";

const App = () => {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<LifeCycle />} />
        <Route path="/local" element={<LocalJsonFetcher />} />
        <Route path="/external" element={<ExternalApiFetcher />} />
        <Route path="/book" element={<BookJsonFetcher />} />
      </Routes>
    </>
  );
};

export default App;
