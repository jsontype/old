import React, { useState, useEffect } from 'react'

// 내부에서 로컬스테이트를 선언하는 경우
export default function Counter() {
  const [number, setNumber] = useState(0)

  // Lifecycle Method
  // Mount : 컴포넌트가 렌더링된 시점
  useEffect(() => {
    console.log('mounted')
  }, []) // DEPS가 비어있으면 Mount 시점에만 실행됨

  // Update : 컴포넌트가 업데이트된 시점
  useEffect(() => {
    console.log('updated')
    if (number < 0) { 
      setNumber(0)
      alert('카트가 비어있어요!')
    }
  }, [number, setNumber]) // DEPS에 number가 있으면 number가 업데이트될 때마다 실행됨

  // Unmount : 컴포넌트가 사라진 시점
  useEffect(() => {
    return () => {
      console.log('unmounted')
    }
  }, []) // DEPS가 비어있는데, return안에 함수가 있으면, 그 함수를 Unmount 시점에만 실행됨

  const increase = () => setNumber(number + 1)
  const decrease = () => setNumber(number - 1)

  // XML
  return (
    <>
      <div className="App">
        { number }
        <button onClick={increase}>+</button> 
        <button onClick={decrease}>-</button>
      </div>
      <div></div>
    </>
  );
}