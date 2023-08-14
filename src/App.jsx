import './App.css'
import {Routes, Route, Link} from 'react-router-dom';
import React, { useReducer, useRef, useEffect, useState } from 'react';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
export const DiaryStateContext = React.createContext(); // 391p
export const DiaryDispatchContext = React.createContext(); // 400~402p


// mockData - 홈/다이어리/뉴/에딧
const mockData = [
  {
    id : "mock1",
    date : new Date().getTime() -1,
    content : "mock1",
    emotionId : 1,
  },
  {
    id : "mock2",
    date : new Date().getTime() -2,
    content : "mock2",
    emotionId : 2,
  },
  {
    id : "mock3",
    date : new Date().getTime() -3,
    content : "mock3",
    emotionId : 3,
  },
]



function reducer(state, action) {
  switch (action.type) {
    case "INIT" : {
      return action.data;
    }
    case "CREATE" : {
      return [action.data, ...state];
    }
    case "UPDATE" : {
      return state.map((it) => {
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      })
    }
    case "DELETE" : {
      return state.filter((it) => {String(it.id) !== String(action.targetId)}); // 삭제할 일기 id와 일치하는거 빼고 새 일기 데이터 배열을 만들어 반환
    }
    default : {
      return state;
    }
  }
}




function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  // useReducer를 호출해 일기 데이터를 관리할 State 변수 data를 만든다. 두 번째 인수로 빈 배열을 전달하여 일기 데이터의 초깃값을 설정.

  const idRef = useRef(0); //인수로 0을 전달해 초깃값 설정

  useEffect(()=> { //481p
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);



  const onCreate = (date, content, emotionId) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current,
        date : new Date(date).getTime(),
        content,
        emotionId,
      }
    });
    idRef.current += 1; // idRef의 현재값을 1늘려 다음 일기 생성시 아이디가 중복되지 않도록 함.
  }

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type : "UPDATE",
      data : {
        id : targetId,
        date : new Date(date).getTime(),
        content,
        emotionId,
      },
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type : "DELETE",
      targetId,
    })
  }

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>
  } else {
    return (
      <DiaryStateContext.Provider value={data}>   {/*data : 일기 state값*/}
        <DiaryDispatchContext.Provider
          value={{
            onCreate, onUpdate, onDelete,
          }}
        >
          <div className="App">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/new" element={<New/>} />
              <Route path="/diary/:id" element={<Diary/>} />
              <Route path="/edit/:id" element={<Edit/>} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App
