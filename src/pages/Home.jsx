import Button from '../component/Button';
import Header from '../component/Header';
import {useContext, useEffect, useState} from 'react';
import { DiaryStateContext } from '../App';
import { getMonthRangeByDate } from '../util';
import DiaryList from '../component/DiaryList';


const Home = () => {
  const data = useContext(DiaryStateContext); //DiaryStateContext :일기데이터공급
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  const headerTitle = `${pivotDate.getFullYear()}년
                        ${pivotDate.getMonth()+1}월`;

  const onIncreaseMonth = ()=> {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
  }
  
  const onDecreaseMonth = ()=> {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
  }

  useEffect(()=> {
    if (data.length>=1){
      const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it)=> { beginTimeStamp <= it.date && it.date <= endTimeStamp }
        )
      )
    }
  },[data, pivotDate]);
  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
        rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home
