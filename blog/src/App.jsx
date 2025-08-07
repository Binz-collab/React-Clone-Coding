import { useState } from 'react';
import './App.css'

function App() {
  let today = new Date();

  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);
  let dateString = year + '년 ' + month  + '월 ' + day + '일 ';

  let hours = ('0' + today.getHours()).slice(-2); 
  let minutes = ('0' + today.getMinutes()).slice(-2);
  let seconds = ('0' + today.getSeconds()).slice(-2); 
  let timeString = hours + ':' + minutes  + ':' + seconds;

  let [select, setSelect] = useState(-1);

  let [제목리스트, 제목리스트변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉수, 따봉수변경] = useState([0, 0, 0]);

  let [생성날짜, 생성날짜변경] = useState([dateString, dateString, dateString]);
  let [생성시간, 생성시간변경] = useState(([timeString, timeString, timeString]));
  let input = '';

  return (
    <>
      <div className='App'>
        <div className='black-nav'>
          <h4>블로그임</h4>
        </div>

      <button onClick={() => 제목리스트변경(['여자 코트 추천', '강북 냉면 맛집', '리액트 인강'])}>제목변경</button>
      <button onClick={() => 제목리스트변경([...제목리스트].sort())}>제목정렬</button>

      {
       제목리스트.map((a, i) => {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                setSelect(select === i ? -1 : i);
                }}> {제목리스트[i]}
                
              {/* if (select === i) {
                    setModal(!modal);           // 같은 제목 두 번 클릭 → 모달 토글
                  }
                  else {
                    setSelect(i);               // 다른 제목 클릭 → select 갱신
                    if (!modal) setModal(true); // 모달이 닫혀있으면 열기
                  }
               }}>  */}

                {/* setSelect(i); select === selectBefore ? setModal(!modal) : setSelectBefore(i); */}

                <span style={ {"marginLeft" : "5px"} } onClick={(e) => {
                  e.stopPropagation();
                  let 뉴따봉수 = [...따봉수];
                  뉴따봉수[i]++;
                  따봉수변경(뉴따봉수);
                }}>👍</span> { 따봉수[i] }
                

                <button style={ {"marginLeft" : "50px"} } onClick={(e) => {
                  e.stopPropagation();
                  let 삭제제목리스트 = [...제목리스트];
                  삭제제목리스트.splice(i, 1);
                  제목리스트변경(삭제제목리스트);

                  let 삭제따봉수 = [...따봉수];
                  삭제따봉수.splice(i, 1);
                  따봉수변경(삭제따봉수);

                  let 삭제날짜 = [...생성날짜];
                  삭제날짜.splice(i, 1);
                  생성날짜변경(삭제날짜);

                  let 삭제시간 = [...생성시간];
                  삭제시간.splice(i, 1);
                  생성시간변경(삭제시간);
                }}>삭제</button>

              </h4>
              <p>{ 생성날짜[i] }</p>
            </div>
          )
        })
      }

      {
        select >= 0 && (제목리스트.length > 0) ? <Modal i={select} 제목={제목리스트} 제목변경={제목리스트변경} 시간={생성시간}/> : null
      }

      <input onChange={(e) => {
        input = e.target.value;
      }}></input>
    
      <button onClick={() => {
        if (input != '') {
          let 뉴제목리스트 = [...제목리스트];
          뉴제목리스트.unshift(input);       //원본을 바로 바꿈
          제목리스트변경(뉴제목리스트);

          let 뉴따봉수 = [...따봉수];
          뉴따봉수.unshift(0);
          따봉수변경(뉴따봉수);

          year = today.getFullYear();
          month = ('0' + (today.getMonth() + 1)).slice(-2);
          day = ('0' + today.getDate()).slice(-2);
          dateString = year + '년 ' + month  + '월 ' + day + '일 ';

          let 뉴생성날짜 = [...생성날짜];
          뉴생성날짜.unshift(dateString);
          생성날짜변경(뉴생성날짜);

          hours = ('0' + today.getHours()).slice(-2); 
          minutes = ('0' + today.getMinutes()).slice(-2);
          seconds = ('0' + today.getSeconds()).slice(-2); 
          timeString = hours + ':' + minutes  + ':' + seconds;

          let 뉴생성시간 = [...생성시간];
          뉴생성시간.unshift(timeString);
          생성시간변경(뉴생성시간);
        }
      }}>글 추가하기</button>
      
        
      </div>
    </>
  )
}


function Modal(props) {

  return (
    <div className='modal'>
      <h4>{ props.i < 0 ? props.제목[0]: props.제목[props.i] }</h4>
      <p>{ props.i < 0 ? props.시간[0] : props.시간[props.i] }</p>
      <p>설명</p>

      <button onClick={() => props.제목변경(['여자 코트 추천', '강북 냉면 맛집', '리액트 인강'])}>제목변경2</button>
    </div>
  )
} 



export default App
