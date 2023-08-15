import { useNavigate } from "react-router-dom";
import { getEmotionImgById } from "../util";
import "./DiaryItem.css";
import Button from "./Button";
import React from "react";



//DiaryItem 컴포넌트는 부모인 DiaryList에서 Props로 일기 객체를 받는다. 일기 객체를 구조 분해 할당한다.
const DiaryItem = ({id, emotionId, content, date}) => { 
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/diary/${id}`);
    };
    const goEdit = () => {
        navigate(`/edit/${id}`);
    };

  return (
    <div className="DiaryItem">
        <div
            onClick={goDetail}
            className={["img_section", `img_section_${emotionId}`].join(" ")}
        >
            <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)} />
        </div>
        <div onClick={goDetail} className="info_section">
            <div className="date_wrapper">
                {new Date(parseInt(date)).toLocaleDateString()}
                {/* 문자열로 된 타임 스탬프 형식의 date를 숫자형으로 형변환한 다음 Date객체로 변환,
                Date의 toLocalDateString 메소드를 호출해 사람이 알아볼 수 있는 날짜 문자열로 변환한다 */}
            </div>
            <div className="content_wrapper">{content.slice(0,25)}</div>
        </div>
        <div className="button_section">
            <Button onClick={goEdit} text={"수정하기"} />
        </div>
    </div>
  )
}

export default React.memo(DiaryItem); 
