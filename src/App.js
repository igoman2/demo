import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import logo from "./logo.svg";
import "./App.css";
import Search from "./pages/Search";
import Market from "./pages/Market";
import Introduction from "./pages/Introduction";
import Competitiveness from "./pages/Competitiveness";
import UserReport from "./pages/UserReport";
import Layout from "./layouts/Layout";
import { useState, useEffect } from "react";

function App() {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";
  return (
    <div className="root">
      <Header className={cls} />
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
