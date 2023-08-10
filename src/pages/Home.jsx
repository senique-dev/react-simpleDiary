import React from 'react'
import {useSearchParams} from 'react-router-dom'
import Button from '../component/Button';
import Header from '../component/Header';
import Editor from '../component/Editor';

//useSearchParams 훅을 호출한다. 이 훅은 useState처럼 배열 형태로 값을 반환한다.
    //반환값의 첫 요소는 조회, 수정이 가능한 메소드를 포함한 쿼리스트링 객체,
    //두 번째 요소는 이 객체를 업데이트하는 함수이다.
    //useSearchParams가 반환한 첫 요소에서 sort값을 불러와 콘솔에 출력. 이때 get메소드 사용함.

const Home = () => {
    
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("sort"));
    
  return (
    <div>
      <Editor 
        initData={{
          date : new Date().getTime(),  // new Date().getTime() : 현재날짜를 타임스탬프 값으로 바꿔서 전달(후에 월 단위로 일기를 보여줄 때 날짜 비교 연산을 쉽게 하려고)
          emotionId : 1,
          content : "이전에 작성했던 일기",
        }}
        onSubmit={() => {
          alert("작성완료!");
        }}/>
    </div>
  );
};

export default Home
