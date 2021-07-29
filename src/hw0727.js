// biggerThan10
//[1,2,3,5,10,20,30,40,50,60]
// 10보다 큰 값을 가진 배열출력
// for, foreach, map, filter, reduce 로 각각 만들rl

function biggerThan10(numbers) {
  let resultFor = [];
  let resultForOf = [];
  let resultForeach = [];
  let resultmap;
  let resultFilter;
  let resultReduce = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      resultFor.push(numbers[i]);
    }
  }
  console.log("resultFor ", resultFor);

  for (let num of numbers) {
    if (num > 10) {
      resultForOf.push(num);
    }
  }
  console.log("resultForOf ", resultForOf);

  numbers.forEach((n) => {
    if (n > 10) {
      resultForeach.push(n);
    }
  });
  console.log("resultForeach ", resultForeach);

  resultmap = numbers
    .map((n) => {
      if (n > 10) {
        return n;
      }
    })
    .filter((n) => n !== undefined);
  console.log("resultmap ", resultmap);

  resultFilter = numbers.filter((n) => n > 10);
  console.log("resultFilter ", resultFilter);
  numbers.reduce((accmulator, current) => {
    if (current > 10) {
      return resultReduce.push(current);
    }
    return accmulator;
  }, []);
  console.log("resultReduce ", resultReduce);
}

const numbers = [1, 2, 3, 5, 10, 20, 30, 40, 50, 60];
biggerThan10(numbers);
