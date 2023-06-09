const a = [1, 2, 3, 4, 5, 6]
const b = a
const c = [...a, 6]

const user1 = { id: 'yang', pw: '213lkj' }
const user2 = { ...user1, pw: 'sadfkl' }

/*
    [보충설명] - 리액트 배울 때 알아둘 것
    
        1. 리액트에서 객체, 배열을 변경할 때 "불변성의 법칙"을 지켜야하는 이유 >>> 주소가 아니라 값의 불변성을 지킨다.
        배열, 객체가 변경되어도, 주소 참조이기 때문에 변화감지가 불가능하다.
        ★ 리액트는... 배열, 객체의 변화를 감지해야한다.
            Life Cycle Method를 구현하기 때문에 배열, 객체 State의 변화를 감지해야한다.
            Performance을 할 때에도 배열, 객체 State의 변화를 감지해야한다. (변화 감지 후 바뀐 컴포넌트 부분만 캐치해서 재렌더링해서 최적화하기 때문)
        ★ 리액트는... 아래와 같은 방식으로, 배열, 객체의 변화감지를 할 수 있게 한다.
            새로운 객체주소를 만들고 → 거기다 기존의 객체의 값을 넣은 뒤 변경된 부분만 바꿔 넣고 → 기존 객체를 그 "주소"으로 갈아끼운다. → 기존의 주소는 삭제한다.
            리액트는 자동으로 주소를 변경하고, 이와 동시에 기존 주소를 바로 삭제하니까 메모리 문제는 없다.        
        1. 요약 : 리액트는 배열, 객체를 쓸 때, 변화를 감지하기 위해서, 불변성을 지키고 변경시 새 주소로 갈아끼우는 방식을 채용한다.
*/

// 배열 CRUD
const aaa = [1, 2, 3, 4]
const bbb = [...aaa, 3] // create
const ccc = aaa.map((item, index) => { return index === 0 ? 3 : item }) // update
const ddd = aaa.filter((item, index) => { return index !== 0 }) // delete : 0번째 인덱스를 빼라.

console.log('aaa: ', aaa)
console.log('bbb: ', bbb)
console.log('ccc: ', ccc)
console.log('ddd: ', ddd)

// 객체 CRUD
const obj = {id: 'yang', pw: 12345}
const addObj = {...obj, email: 'yang@example.com'} // create
const modObj = {...obj, pw: 11111} // update
const {pw, ...delObj} = obj // delete

console.log('obj: ', obj)
console.log('addObj: ', addObj)
console.log('modObj: ', modObj)
console.log('delObj: ', delObj)
