import { useState } from 'react';
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  let [제목리스트] = useState(['남자코드 추천', '강남 우동 맛집', '파이썬 독학']);

  return (
    <>
      <div className='App'>
        <div className='black-nav'>
          <h4>블로그임</h4>
        </div>


      <div className='list'>
        <h4>{제목리스트[0]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{제목리스트[1]}</h4>
        <p>2월 17일 발행</p>
      </div>  
      
      <div className='list'>  
        <h4>{제목리스트[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
        
      </div>
    </>
  )
}

export default App
