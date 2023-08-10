import emotion1 from './img/emotion1.png'
import emotion2 from './img/emotion2.png'
import emotion3 from './img/emotion3.png'
import emotion4 from './img/emotion4.png'
import emotion5 from './img/emotion5.png'
//1. 함수 getEmotionImgById 의 매개변수 emotionId에는 페이지나 컴포넌트에서 전달된 감정 이미지 번호가 저장됨
//2. emotionId가 문자열이 아닌 숫자로 제공될 수도 있기 때문에 String메소드를 이용해 명시적으로 형변환
//3. switch문으로 번호와 일치하는 이미지를 찾아 반환
export const getEmotionImgById = (emotionId) => { 
    
    const targetEmotionId = String(emotionId);
    
    
    switch (targetEmotionId) {
        case "1":
            return emotion1;
        case "2":
            return emotion2;
        case "3":
            return emotion3;
        case "4":
            return emotion4;
        case "5":
            return emotion5;
       default :
            return null;
    };
};

export const getFormattedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() +1;
    let date = targetDate.getDate();

    if (month < 10) {
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`;
    }
    return `${year}-${month}-${date}`;
};

export const emotionList = [
    {
        id : 1,
        name : "완전 좋음",
        img : getEmotionImgById(1),
    },
    {
        id : 2,
        name : "좋음",
        img : getEmotionImgById(2),
    },
    {
        id : 3,
        name : "그럭저럭",
        img : getEmotionImgById(3),
    },
    {
        id : 4,
        name : "나쁨",
        img : getEmotionImgById(4),
    },
    {
        id : 5,
        name : "끔찍함",
        img : getEmotionImgById(5),
    },

];