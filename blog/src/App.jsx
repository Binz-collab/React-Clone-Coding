import { useState } from 'react';
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  let [제목리스트, 제목리스트변경] = useState(['남자코드 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉수] = useState([0, 0, 0]);
  let [modal, setModal] = useState(true); 

  return (
    <>
      <div className='App'>
        <div className='black-nav'>
          <h4>블로그임</h4>
        </div>

      <button onClick={() => 제목리스트변경(['여자 코트 추천', '강북 냉면 맛집', '리액트 인강'])}>제목변경</button>
      <button onClick={() => 제목리스트변경([...제목리스트].sort())}>제목정렬</button>


      <div className='list'>
        <h4 onClick={() => setModal(!modal)}>{제목리스트[0]} <span>👍</span> { 따봉수[0] } </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={() => setModal(!modal)}>{제목리스트[1]} <span>👍</span> { 따봉수[1] } </h4>
        <p>2월 17일 발행</p>
      </div>  
      
      <div className='list'>  
        <h4 onClick={() => setModal(!modal)}>{제목리스트[2]} <span>👍</span> { 따봉수[2] } </h4>
        <p>2월 17일 발행</p>
      </div>

      {
        modal ? <Modal /> : null
      }
        
      </div>
    </>
  )
}


function Modal() {

  return (
    <div className='modal'>
      <h4>상품명</h4>
      <p>날짜</p>
      <p>설명</p>
    </div>
  )
} 



export default App
