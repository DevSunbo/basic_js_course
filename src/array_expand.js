const superhero = ["아이언맨", "캡아", "토르", "닥스"];

for (let i = 0; i < superhero.length; i++) {
  console.log(superhero[i]);
}

superhero.forEach((hero) => {
  console.log(hero);
});

// map 활용
console.log("map");
const array = [1, 2, 3, 4, 5, 6, 7, 8];
array.map((e) => {
  return e * e;
});
console.log(array);
let squered = [];
array.forEach((e) => {
  squered.push(e * e);
});

//이렇게도 가능
const squere = (n) => n * n; // 화살표 함수 먼저 선언
const squered_map = array.map(squere);

const squered_map_v2 = array.map((n) => n * n);
console.log(squered_map_v2);
// map 함수 : 배열의 원소가 map 안에 만들어진 함수에 매개변수가 된다

//findindex & find
const todos = [
  {
    id: 1,
    text: "블라블라",
    done: true
  },
  {
    id: 2,
    text: "집구하기",
    done: false
  },
  {
    id: 3,
    text: "졸업하기",
    done: false
  },
  {
    id: 4,
    text: "공부하기",
    done: true
  }
];

const index = todos.findIndex((todo) => todos.id === 3);
console.log(index);
const todo = todos.find((todo) => todo.id === 3);
console.log(todo);

const taskNone = todos.filter((todo) => todo.done === false);
const taskNone2 = todos.filter((todo) => !todo.done);
console.log(taskNone);

//filter

const nums = [10, 20, 30, 40, 50, 60];
const idx = nums.indexOf(30);
nums.splice(idx, 1); // 해당 인덱스부터 1개 잘라내기
//splice 는 기존 배열을 수정한다.

const nums2 = [10, 20, 30, 40];
const sliced = nums2.slice(0, 2); // 0부터 2전까지 0,1 삭제
console.log(sliced);
// slice 는 기존 배열ㄹ을 건들지 않고 새로 만든다.

const value = nums.shift();
console.log(value);
console.log(nums);
// 가장 앞에 있는 원소를 꺼낸다. 기존 배열이 바뀐다.

const value2 = nums.pop();
console.log(value2);
console.log(nums);
// 가장 뒤에 있는 원소를 꺼낸다. 기존 배열이 바뀐다.

nums.unshift(5);
console.log(nums);
// 가장 앞에 원소를 삽입. shift 와 대응대는 함수

// 합체 concat 기존 배열을 건드리지 않고 새로 생성

//join : array를 풀어서 ㄴㅅ갸ㅜㅎ gudxofh qkRndj wnsek.
const arr = [1, 2, 3, 4, 5];
console.log(arr.join());
console.log(arr.join(" "));
console.log(arr.join(", "));

//reduce 콜백함수
// 파라미터를 2개를 받는다 .출력할때 사용하는 고정변수, 현재 배열의 값을 가지는 변수
const number_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

number_arr.forEach((n) => {
  sum += n;
});
console.log(sum);

let sum_reduce = number_arr.reduce(
  (accmulator, current) => accmulator + current,
  0
);
console.log("reduce ", sum_reduce);

let sum_reduce2 = number_arr.reduce((accmulator, current) => {
  console.log({ accmulator, current });
  return accmulator + current;
}, 0);
console.log(sum_reduce2);

let avg = number_arr.reduce((accmulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accmulator + current) / array.length;
  }
  return accmulator + current;
}, 0);
console.log(avg);

// biggerThan10
//[1,2,3,5,10,20,30,40,50,60]
// 10보다 큰 값을 가진 배열출력
// for, foreach, map, filter, reduce 로 각각 만들rl

//trucy falsy
console.log(undefined);
console.log(null);
console.log(0);
console.log("");
console.log(NaN);

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);
