import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailsGame } from "../Pages/DetailsGame";
import { Home } from "../Pages/Home";
import { News } from "../Pages/News";
import { PageNotFound } from "../Pages/PageNotFound";
import { TemplatePage } from "../Template";

export const Routers = () => {
  return (
    <Router>
      <TemplatePage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<DetailsGame />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </TemplatePage>
    </Router>
  );
};