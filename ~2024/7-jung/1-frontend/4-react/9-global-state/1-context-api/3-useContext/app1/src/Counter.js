// 8. 리액트에서 useContext를 임포트
import React, { useContext } from "react"
// 9. context를 임포트
import { CounterContext } from "./App"

// 10. context 글로벌스테이트 사용하기 : state를 프롭으로 넘겨받기
export default function Counter({ state }) {
  // 11. count 스테이트를 CounterContext안의 global state에서 가져오기
  const count = state.counter.count
  // 12. 이벤트리스너 함수 변경 : 액션을 실행하는 dispatch 함수를 통해서 실행되도록 변경
  const dispatch = useContext(CounterContext)
  const onIncrease = () => {
    dispatch({ type: "INCREMENT" })
  }
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" })
  }

  return (
    <div>
      {/* 13. 글로벌 state 변수를 렌더링 */}
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}
