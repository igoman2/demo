import { Route, Routes } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Market from "./pages/Market";
import Introduction from "./pages/Introduction";
import Competitiveness from "./pages/Competitiveness";
import UserReport from "./pages/UserReport";
import Layout from "./layouts/Layout";

function App() {
  return (
    <div className="root">
      <Layout>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/introduce" element={<Introduction />} />
          <Route path="/compete" element={<Competitiveness />} />
          <Route path="/market" element={<Market />} />
          <Route path="/user-report" element={<UserReport />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
