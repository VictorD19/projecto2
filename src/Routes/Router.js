import {  BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { DetailsGame } from "../Pages/DetailsGame";
import { Home } from "../Pages/Home";
import { News } from "../Pages/News";
import { PageNotFound } from "../Pages/PageNotFound";

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailsGame />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
};
