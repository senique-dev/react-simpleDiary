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