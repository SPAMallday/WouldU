import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "views/main/MainPage";
import SearchPage from "views/search/SearchPage";
import Login from "views/login/Login";
import Join from "views/login/joinID";
import Join2 from "views/login/joinQ";
import MyPage from "views/mypage/MyPage";

export default function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/">
              <Route index element={<MainPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="login" element={<Login />}></Route>
              <Route path="join" element={<Join />}></Route>
              <Route path="survey" element={<Join2 />}></Route>
              <Route path="/mypage" element={<MyPage />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
