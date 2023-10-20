import { useContext, useEffect, useState } from 'react'
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

const useDiary = (id) => {
    const data = useContext(DiaryStateContext); //반환된 일기 데이터는 변수 data에 저장함
    //console.log("useBItem data : ", data);
    const [diary, setDiary] = useState(); //매개변수로 저장한 id와 일치하는 일기를 저장할 State를 생성, State변수 이름은 diary

    const navigate = useNavigate();

    useEffect(() => { //id나 data의 값이 변경될 때마다 일기 데이터에서 매개변수 id와 일치하는 일기를 찾아 State값 diary를 업데이트함
        const matchDiary = data.find((it) => String(it.id) === String(id));
        if (matchDiary) {
            setDiary(matchDiary);
        } else {
            alert ("일기가 존재하지 않습니다");
            navigate("/", {replace: true }); 
            //navigate의 2번째 인수로 전달하는 옵션 객체에서 replace속성을 true로 하면 : 
            //페이지를 이동한 후 다시 돌아올 수 없도록 뒤로가기 아이콘이 비활성화됨
        }
    }, [id, data]);
    return diary; // 일기 데이터가 저장되어 있는 data를 반환함// useDiary 훅에서 diary값을 반환한다
};

export default useDiary
