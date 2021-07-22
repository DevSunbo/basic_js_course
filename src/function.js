const a = 1;
const b = 2;
const sum = a + b;

function add(a, b) {
  return a + b;
}
console.log(sum);

function hello(name) {
  console.log("안녕 " + name + "아");
  console.log(`안녕 ${name}아`);
}

hello("선보");

console.log("한글확인");

function getGrade(name, score) {
  let grade;
  if (score >= 90) grade = "A";
  else if (score >= 80) grade = "B";
  else if (score >= 70) grade = "C";
  else if (score >= 60) grade = "D";
  else grade = "F";

  console.log(`${name}의 점수는 ${score}이고 학점은 ${grade}이다`);
}

getGrade("태훈", 99);
