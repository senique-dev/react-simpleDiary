// import React from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { useContext } from 'react'
// import { DiaryDispatchContext } from '../App'
// import useDiary from '../hooks/useDiary'
// import Header from '../component/Header'
// import Button from '../component/Button'
// import Editor from '../component/Editor'


// const Edit = () => { // URL 파라미터로 데이터 불러오기 -> 헤더구현 -> 에디터 구현
//   const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
//   const {id} = useParams();
//   const data = useDiary(id);
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
  

//   const onSubmit = (data) => {
//     if (window.confirm("일기를 정말 수정할까요?")) {
//       const { date, content, emotionId } = data;
//       onUpdate(id, date, content, emotionId);
//       navigate("/", {replace : true});
//     }
//   };
//   const onClickDelete = () => {  
//     if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
//       onDelete(id);
//       navigate("/", {replace : true});
//     }
//     // window.confirm : 반환값이 참이면 함수 onDelete를 호출, 인수로 일기id를 전달해 현재 수정중인 일기를 삭제
//     //그리고 Home페이지로 이동
//     //window.confirm는 사용자에게 인수로 전달한 텍스트와 함께 경고 대화상자를 출력하는 브라우저 메소드; 
//     //사용자가 <확인> 버튼을 클릭하면 true를 반환한다
//   };

  


//   if(!data) {
//     return <div>일기를 불러오고 있습니다...</div>;
//   } else {
//     return (
//       <div>
//         <Header 
//           title={"일기 수정하기"}
//           leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
//           rightChild={
//             <Button 
//               type={"negative"} 
//               text={"삭제하기"} 
//               onClick={onClickDelete}
//             />
//           }
//         />
//         <Editor initData={data} onSubmit={onSubmit}/>
//       </div>
//     );
//   }
// };

// export default Edit