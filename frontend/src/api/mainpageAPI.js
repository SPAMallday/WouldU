// eslint-disable-next-line
import { json } from "react-router-dom";
import { apiClient } from ".";

// 유형별 랭킹
export const userRank = async () => {
  let user_no = sessionStorage.getItem("no");
  if (user_no === null) {
    user_no = "0";
  }

  try {
    const res = await apiClient.get(`/alcohol/rank-type/${user_no}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
