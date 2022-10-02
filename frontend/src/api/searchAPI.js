import { json } from "react-router-dom";
import { apiClient } from ".";

// 검색
export const search = async (params) => {
  try {
    const res = await apiClient.get(`/search`, {params});
    return res.data;
  } catch (err) {
    console.log(err);
  }
};