import './DiaryList.css';
import Button from './Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DiaryItem from './DiaryItem';


//상단부 정렬기능 구현
const sortOptionList = [
  {value : "latest", name: "최신순"},
  {value : "oldest", name: "등록순"}
]

const DiaryList = ({data}) => { //부모인 Home에서 필터링된 일기를 Props로 받음

  const [sortType, setSortType] = useState("latest");
  // 정렬된 일기 데이터를 저장할 State 변수 sortedData를 만든다. 인수로 빈 배열을 전달해 State의 초깃값을 설정한다.
  const [sortedData, setSortedData] = useState([]);

  useEffect(()=>{ // 2) useEffect호출 - 두 번째 인수인 의존성 배열에 data, sortType을 저장. 일기 데이터나 정렬 기준이 바뀌면 첫 번째 인수로 전달한 콜백함수를 다시 실행한다.
    const compare = (a, b) => { // 3) 객체 형태의 배열인 data를 최신순 또는 등록순으로 정렬하기 위해 별도의 비교 함수 만들기. 만약 sortType이 latest라면 최신순으로 정렬해야 하므로 일기 객체의 date를 내림차순으로 정렬. date 값이 문자열이므로 Number메소드를 이용해 명시적으로 형변환 후 정렬.
      if (sortType === "latest"){
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    
    // 4) 배열의 sort메소드는 원본배열을 정렬함. 그러므로 정렬결과를 별도의 배열로 만들어야 함. 
    //JSON.parse, JSON.stringify를 사용해 동일한 요소로 배열을 복사해 copyList에 저장.
    const copyList = JSON.parse(JSON.stringify(data)); 

    // 5) copyList에 저장된 일기 데이터를 정렬한다. 이때 인수로 2)에서 만든 compare함수를 전달.
    copyList.sort(compare);  
      
    // 6) sortedData를 정렬된 일기 데이터로 업데이트한다.
    setSortedData(copyList); 
  }, [data, sortType]);
      /* 
      JSON.stringify : 인수로 전달한 객체를 문자열로 변환하는 함수
      JSON.parse : 문자열로 변환한 값을 다시 객체로 복구하는 함수
      :: 객체를 문자열로 변환한 다음 객체로 복구하면, 값은 같지만 참좃값이 다른 새로운 객채를 만들 수 있음
      */
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const navigate = useNavigate();

  const onClickNew = () => {
    navigate("/new");
  };



  return (
    <div className='DiaryList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className='right_col'>
          <Button 
            type={"positive"} 
            text={"새 일기 쓰기"}
            onClick={onClickNew} 
          />
        </div>
      </div>
      <div className='list_wrapper'>
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  )
}

export default DiaryList
