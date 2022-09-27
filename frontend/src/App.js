import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "views/main/MainPage";
import SearchPage from "views/search/SearchPage";
import DetailPage from "views/detail/DetailPage";
import Login from "views/login/Login";
import Join from "views/login/joinID";
import Join2 from "views/login/joinQ";
import MyPage from "views/mypage/MyPage";
import SearchOnce from "views/search/SearchoncePage";
import ReviewBefore from "views/rating/ReviewBefore";
import ReviewSul from "views/rating/ReviewSul";
import RecommendPage from "views/recommend/RecommendPage";
import BasedOnEvaluationPage from "views/recommend/BasedOnEvaluationPage";
import BasedOnFilteringPage from "views/recommend/BasedOnFilteringPage";
import SearchForRecommendPage from "views/recommend/SearchForRecommendPage";

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
              <Route path="mypage" element={<MyPage />}></Route>
              {/* BasedOnFilteringPage와 동일하므로 주석처리
              <Route path="once" element={<SearchOnce />}></Route> */}
              <Route path="before" element={<ReviewBefore />}></Route>
              <Route path="rating" element={<ReviewSul />}></Route>
              <Route path="detail/:detail_id" element={<DetailPage />} />
              <Route path="recommend">
                <Route index element={<RecommendPage />} />
                <Route
                  path="based_on_evaluation"
                  element={<BasedOnEvaluationPage />}
                />
                <Route
                  path="search_for_recommend"
                  element={<SearchForRecommendPage />}
                />
                <Route
                  path="based_on_filtering"
                  element={<BasedOnFilteringPage />}
                />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
