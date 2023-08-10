import React from 'react'
import './EmotionItem.css';

// id : 감정 이미지의 아이디
// img : 감정 이미지의 주소
// name : 감정 이미지의 이름
// onClick : 감정이미지를 클릭하면 동작하는 이벤트핸들러
// isSelected : 감정이미지의 선택 여부 (선택된 이미지에 별도의 스타일을 적용하기 위함)

const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
    const handleOnClick = () => {
        onClick(id);
    };

  return (
    <div className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,
        ].join(" ")}
        onClick={handleOnClick}
    >
      <img alt={`emotion${id}`} src={img} />
      <span>{name}</span>
    </div>
  )
}

export default EmotionItem
