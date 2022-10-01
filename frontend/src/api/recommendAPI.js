import { useState } from "react";
import { json } from "react-router-dom";
import { apiClient } from ".";

// 유저 개인 추천
let user_no = sessionStorage.getItem("no");
if (user_no === null) {
  user_no = "0";
}
export const userRecom = async () => {
  try {
    const res = await apiClient.get(`/recommend/user/${user_no}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 술 상세 받아오기
export const alcoholDetail = async al_no => {
  try {
    const res = await apiClient.get(`/alcohol/detail/${al_no}/${user_no}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 술 (신맛,단맛,향,바디감) 리뷰 보내주기
export const alcoholreview = async data => {
  try {
    const res = await apiClient.post(`/alcohol/review`, data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 좋아요~~
export const alcoholLike = async data => {
  try {
    const res = await apiClient.post(`/alcohol/like`, data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 유사주류
export const similaralcohol = async no => {
  try {
    const res = await apiClient.get(`/detail/similar-alcohol/${no}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};