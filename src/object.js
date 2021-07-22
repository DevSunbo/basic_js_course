const dog = {
  name: "멍멍이",
  age: 2
};

function print(hero) {}

function new_print(hero) {
  //객체 분해
  const { alias, name, actor } = hero;
}

function new2_print({ alias, name, actor }) {
  //객체 비구조화 할당
  const text = `${alias} 의 ${name}은 ${actor}`;
  console.log(text);
}
const iron_man = {
  alias: "아이언맨",
  name: "토니 스타크",
  actor: "로버트 다우니 주니어"
};
new2_print(iron_man);

const cat = {
  name: "야옹이",
  sound: "냐오오오옹",
  say: function () {
    console.log(this.sound);
  }
};
cat.say();

const number = {
  a: 1,
  b: 2,
  sum: 3,
  calculate() {
    console.log("calc");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log("a가 바뀝니다");
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log("b가 바뀝니다");
    this._b = value;
    this.calculate();
  }
};

number.a = 5;
