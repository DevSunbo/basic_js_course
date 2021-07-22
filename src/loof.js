for (let i = 0; i < 10; i++) {
  console.log(i);
}

const names = ["멍멍이", "야옹이", "짹짹이", "기타"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

const numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}

const dogy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2
};

console.log(Object.entries(dogy));
console.log(Object.keys(dogy));
console.log(Object.values(dogy));

for (let key in dogy) {
  console.log(`${key}: ${dogy[key]}`);
}

const result = sumof([1, 2, 3, 4, 5]);
console.log(result);
function sumof(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

//과제2
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));
//3보다 큰 수를 얻는다.
