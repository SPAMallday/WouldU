import Element from "components/recommend/Element";
import { Link } from "react-router-dom";
import { onceRecom } from "api/recommendAPI";
import { useState } from "react";
import { useEffect } from "react";

export default function ResultFiltering(props) {
  const [recomResults, setRecomResults] = useState({});
  const { setGoToResult, sweet, sour, body, smell, value } = props;

  const convertRange = num => {
    let res;

    if (num < 6) {
      res = 1;
    } else if (num < 11) {
      res = 2;
    } else if (num < 16) {
      res = 3;
    } else if (num < 21) {
      res = 4;
    } else if (num < 31) {
      res = 5;
    } else if (num < 41) {
      res = 6;
    } else {
      res = 7;
    }

    return res;
  };

  useEffect(() => {
    const low = convertRange(value[0]);
    const high = convertRange(value[1]);
    let convValue = Array(high - low + 1)
      .fill()
      .map((v, i) => i + low);

    console.log(convValue);

    onceRecom({
      sweet: Number(sweet),
      sour: Number(sour),
      body: Number(body),
      scent: Number(smell),
      abv_level: convValue,
    }).then(res => {
      setRecomResults(res);
    });
  }, []);

  const setElement = e => {
    return (
      <Link to={"/detail/" + e.alcohol_no} key={`detail + ${e.alcohol_no}`}>
        <Element
          id={e.alcohol_no}
          img_link={e.alcohol_image}
          name={e.alcohol_name}
          brewery={e.brewery}
          ingredients={e.material}
          size={e.size}
          alcohol={e.abv}
          desc={e.detail}
          key={`${e.alcohol_no}`}
        />
      </Link>
    );
  };

  const inListItems = recomResults["in_alcohol_list"]?.map(item =>
    setElement(item),
  );
  const outListItems = recomResults["out_alcohol_list"]?.map(item =>
    setElement(item),
  );

  return (
    <div>
      {inListItems?.length > 0 ? (
        <>
          <h3> 🍶추천하는 전통주에요 </h3>
          <div>{inListItems}</div>
        </>
      ) : null}

      {outListItems?.length > 0 ? (
        <>
          <h3> 🍶원하시는 도수는 아니지만 이런 전통주는 어때요?</h3>
          <div>{outListItems}</div>
        </>
      ) : null}
      <button
        onClick={() => {
          setGoToResult(false);
        }}
      >
        다시 검색하기
      </button>
    </div>
  );
}
