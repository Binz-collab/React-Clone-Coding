import { useState } from 'react';
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  let [제목리스트, 제목리스트변경] = useState(['남자코드 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉수] = useState([0, 0, 0]);

  return (
    <>
      <div className='App'>
        <div className='black-nav'>
          <h4>블로그임</h4>
        </div>

      <button onClick={() => 제목리스트변경(['여자 코트 추천', '강북 냉면 맛집', '리액트 인강'])}>버튼임</button>


      <div className='list'>
        <h4>{제목리스트[0]} <span>👍</span> { 따봉수[0] } </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{제목리스트[1]} <span>👍</span> { 따봉수[1] } </h4>
        <p>2월 17일 발행</p>
      </div>  
      
      <div className='list'>  
        <h4>{제목리스트[2]} <span>👍</span> { 따봉수[2] } </h4>
        <p>2월 17일 발행</p>
      </div>
        
      </div>
    </>
  )
}

export default App
