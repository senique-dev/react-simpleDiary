import './Editor.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList, getFormattedDate } from '../util';
import Button from './Button';
import EmotionItem from './EmotionItem';


const Editor = ({ initData, onSubmit }) => {

    // useNavigate를 호출하면 클라이언트 사이드 렌더링 방식으로 페이지를 이동하는 함수를 반환
    // 이때 인수로는 아무것도 전달하지 않아도 됨. useNavigate를 호출해 함수 navigate를 생성하면 페이지 간 이동을 간편하게 구현 가능
    // 인수로 '/new' 같은 경로를 문자열로 전달하면 마치 동일한 경로의 Link 컴포넌트를 클릭한 것처럼 해당 페이지로 이동함.
    // 인수로 경로가 아닌 -1 을 전달하면 브라우저의 뒤로가기 이벤트가 1회 동작함.
    const navigate = useNavigate();


    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId : 3,
        content : "",
    });


    // 날짜 입력 섹션 구현하기 (state.date 프로퍼티의 초깃값 -> 오늘날짜로 자동설정)
    const handleChangeDate = (e) => {
        //이벤트 핸들러 handleChangeDate는 사용자가 입력한 날짜를 변경하면 호출되어 State를 업데이트한다.
        setState({
            ...state,
            date : e.target.value,
        });
        //이게 무슨 뜻인지 모르겠어...//이제 알 것 같기도 하고?
    };

    // 일기 입력 섹션 구현하기
    const handleChangeContent = (e) => {
        setState({
            ...state,
            content : e.target.value,
        });
    };

    // <작성 완료> 버튼 기능 구현하기
    const handleSubmit = () => {
        onSubmit(state);
    };

    // <취소하기> 버튼 기능 구현하기
    const handleOnGoBack = () => {
        navigate(-1);
    }

    const handleChangeEmotion = (emotionId) => {
        setState({
            ...state,
            emotionId,
        });
    };


  return (
    <div className="Editor">
        <div className="editor_section">
            {/* 날짜 */}
            <h4>오늘의 날짜</h4>
            <div className="input_wrapper">
                <input type="date" value={state.date}
                        onChange={handleChangeDate} />
            </div>
        </div>
        <div className="editor_section">
            {/* emotion */}
            <h4>오늘의 감정</h4>
            <div className="input_wrapper emotion_list_wrapper">
                {emotionList.map((it) => (
                    <EmotionItem
                        key={it.id}  //감정이미지의 id 전달
                        {...it}  //현재 순회중인 배열 요소의 모든 프로퍼티 전달
                        onClick = { handleChangeEmotion }  //함수 전달
                        isSelected = { state.emotionId === it.id } //현재 순회중인 배열 요소의 id와 state.emotionId의 동일성을 판단하는 isSelected 전달
                    />
                    //<img key={it.id} alt={`emotion${it.id}`} src={it.img} />
                ))}
            </div>
        </div>
        <div className="editor_section">
            {/* 일기 */}
            <h4>오늘의 일기</h4>
            <div className="input_wrapper">
                <textarea
                    placeholder="오늘은 어땠나요?"
                    value={state.content}
                    onChange={handleChangeContent}
                />
            </div>
        </div>
        <div className="editor_section bottom_section">
            {/* 작성완료, 취소 */}
            <Button text={"취소하기"} onClick={handleOnGoBack} />
            <Button text={"작성완료"} type={"positive"} onClick={handleSubmit} />
        </div>
    </div>
  )
}

export default Editor
