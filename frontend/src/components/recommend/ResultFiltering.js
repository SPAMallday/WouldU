import testinput from "components/search/testinput";
import Element from "components/search/Element";
import { Link } from "react-router-dom";

export default function ResultFiltering(props) {
  const { setGoToResult, sweet, sour, body, smell, value } = props;

  const filterResult = testinput
  .filter(k => Number(k.sweet) === Number(sweet)
  && Number(k.sour) === Number(sour)
  && Number(k.body) === Number(body)
  && Number(k.scent) === Number(smell)
  && Number(value[0]) <= Number(k.alcohol) <= Number(value[1]))

  const listItems = filterResult.map(e => (
    <Link to={"/detail/" + e.id} key={`detail + ${e.id}`}>
      <Element
        id={e.id}
        img_link={e.img_link}
        name={e.name}
        brewery={e.brewery}
        ingredients={e.ingredients}
        size={e.size}
        alcohol={e.alcohol}
        desc={e.desc}
        key={`${e.id}`}
      />
    </Link>
  ));
  
  return(
    <div>
      <button onClick={()=>{setGoToResult(false)}}>
        다시 검색하기
      </button>
      <h2>필터링 결과페이지 입니다.</h2>
      <div>
        {listItems}
      </div>
    </div>
  )
}