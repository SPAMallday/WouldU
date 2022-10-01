import { json } from 'react-router-dom';
import { apiClient } from '.';

  // 먹은 술 주종 카테고리 차트
export const category = async () => {
  try {
    const res = await apiClient.get(`/mypage/my-fav-alcohol`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 먹은 술 평균값 차트
export const average = async () => {
  try {
    const res = await apiClient.get(`/mypage/my-alcohol`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};