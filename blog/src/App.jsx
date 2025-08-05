import { useState } from 'react';
import './App.css'

function App() {
  let [select, setSelect] = useState(-1);
  let [제목리스트, 제목리스트변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉수, 따봉수변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(true); 

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
            <div className='list'>
              <h4 onClick={() => {setModal(!modal); setSelect(i);}}>{제목리스트[i]}
                <span onClick={() => {
                  let 뉴따봉수 = [...따봉수];
                  뉴따봉수[i]++;
                  따봉수변경(뉴따봉수);
                }}>👍</span> { 따봉수[i] }
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal ? <Modal i={select} 제목={제목리스트} 제목변경={제목리스트변경}/> : null
      }
        
      </div>
    </>
  )
}


function Modal(props) {

  return (
    <div className='modal'>
      <h4>{ props.제목[props.i] }</h4>
      <p>날짜</p>
      <p>설명</p>

      <button onClick={() => props.제목변경(['여자 코트 추천', '강북 냉면 맛집', '리액트 인강'])}>제목변경2</button>
    </div>
  )
} 



export default App
