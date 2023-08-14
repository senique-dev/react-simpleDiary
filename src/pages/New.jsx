import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DiaryDispatchContext } from '../App'
import Button  from '../component/Button'
import Header from '../component/Header'
import Editor from '../component/Editor'


const New = () => {  // 헤더 -> 에디터 순서로 구현
  const { onCreate } = useContext(DiaryDispatchContext); //useContext를 호출해 DiaryDispatchContext에서 함수 onCreate를 불러온다
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate (date, content, emotionId);
    navigate("/", {replace : true });
  }

  return (
    <div>
      <Header 
        title={"새 일기 쓰기"}
        leftChild={<Button text={"뒤로 가기"} onClick={goBack}/>}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  )
}

export default New
