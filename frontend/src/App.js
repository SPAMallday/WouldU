import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from "views/main/MainPage";
import SearchPage from "views/search/SearchPage";

export default function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/">
              <Route index element={<MainPage />} />
              <Route
                path="search"
                element={<SearchPage />}
              />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};