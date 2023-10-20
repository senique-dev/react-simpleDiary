import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import { getFormattedDate } from "../util";
import Button from "../component/Button";
import Viewer from "../component/Viewer";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id); //커스텀 훅 useDiary를 호출하고 인수로 URL파라미터로 받은 일기id를 전달
  // console.log(data);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!data) {
    // useDiary가 아직 undefined일 때 : 프로퍼티에 접근하지 못하도록 막도록 예외처리 함
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data; //useDiary를 이용해 불러운 객체 형태의 일기 데이터를 구조분해할당. 이때 일기 id는 페이지에 렌더링하지 않음
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`; // 템플릿 리터럴과 함수 getFormatted를 이용해 헤더의 정중앙에 위치할 'yyyy-mm-dd' 형식의 제목 문자열을 생성
    return (
      <div>
        <Header
          title={title}
          leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />

        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
};

export default Diary;
