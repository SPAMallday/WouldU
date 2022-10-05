import { useState } from "react";
import { json } from "react-router-dom";
import { apiClient } from ".";

// 유저 개인 추천

export const userRecom = async () => {
  let user_no = sessionStorage.getItem("no");
  if (user_no === null) {
    user_no = "0";
  }
  try {
    const res = await apiClient.get(`/recommend/user/${user_no}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};