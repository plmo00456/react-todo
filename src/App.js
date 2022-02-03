import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./page/Main/Main";
import Login from "./page/Login/Login";
import LayoutHeader from "./page/layout/Header";
import LayoutLeft from "./page/layout/Left";
import LayoutRight from "./page/layout/Right";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
    document.getElementsByTagName("head")[0].appendChild(meta);
  }, []);
  return (
    <Router>
      <div className="wrap">
        <LayoutHeader />
        <div className="outer-box">
          <LayoutLeft />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <LayoutRight />
        </div>
      </div>
    </Router>
  );
};

export default App;
