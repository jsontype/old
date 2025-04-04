/*
  [콜백 함수]

  1. 콜백 함수
    다른 함수에서 호출되어 실행되는 함수를 말한다. 
    함수를 만들때, parameter나 return값을 함수로 받아서 쓸 수도 있는데, 그 함수도 callback 함수이다. 
    * 잘 알아두면 이후 리액트할 때 프롭으로 함수를 넘겨주는 부분을 이해할 때 편해진다.

  1. ★ 콜백 함수가 필요한 이유
    비동기 방식으로 작성된 함수를 동기처럼 처리하기 위해 콜백이 필요하다.
*/

// 1. 동기처리에서 콜백 함수 사용 예시
function introduce(lastName, firstName, callback) {
  // callback 함수사용법 1: callback을 인자에 넣는다.
  let fullName = lastName + firstName
  callback(fullName) // callback 함수사용법 2: callback을 마지막에 놓는다.
}
introduce("홍", "길동", print) // callback 함수사용법 3: 콜백을 사용하는 함수를 호출할 때는 () => {} 이렇게 "★★ 함수형 업데이트"를 통해서 호출해야 한다.

// 2. 비동기처리에서 콜백 함수 사용 예시
function work(callback) {
  setTimeout(() => {
    callback("비동기처리")
  }, 1000)
}

function print(name) {
  console.log(name)
}

work(print)
