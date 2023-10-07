//튜플 타입 선언
let drink: [string, number];

// 튜플 초기화
drink = ["drink", 2000];

//튜플 선언, 초기화
let drink2: [string, number] = ["cola", 2000];

//js 배열과 동일하게 인덱스 접근 가능, 메세드 사용 가능
console.log(drink[0]);
//spread 연산자도 사용 가능
console.log([...drink2, ["cider", 1200]]);

//readonly: 데이터 변경 불가능
let drink3: readonly [string, number] = ["cola", 1200];
// drink3.push("qwe"); //error

//Enum
enum Cake {
  chocolate,
  vanilla,
  strawberry,
  kiwi = "kiwi", //숫자와 문자열 가이 쓸 수 있음 (이왕이면 통일하는게 좋다)
}

//사용자 정의 타입
// 1. interface

interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "daeyub",
  isPassed: false,
};

// 2. type
type Score = "A+" | "A" | "B" | "C" | "D";

const score1: Score = "A+";

// interface 상속도 가능
interface 야구부 extends Student {
  position: string;
  weight: number;
  height: number;
  //key - value 타입이 여러개 올 수 있을 때
  //grade라는 이름이 key가 되는 건 아니고 의미를 부여해주는 역할
  [grade: number]: Score;
  readonly backNumber?: number;
}

const tiger: 야구부 = {
  name: "tiger",
  isPassed: true,
  position: "pitcher",
  weight: 90,
  height: 180,
  1: "A",
  2: "A+",
  3: "B",
};

console.log(tiger);

//점 접근법 또는 대괄호 접근법으로 value 변경 가능
tiger["1"] = "C";
tiger.weight = 12;

//함수의 타입을 정하는 인터페이스
interface add {
  (a: number, b: number): number;
}

const sum: add = function (num1, num2) {
  return num1 + num2;
};

//교차 타입
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: "tayobus",
  start() {
    console.log(this.name);
  },
  color: "blue",
  price: 20000,
};

toyCar.start();

// type도 interface처럼 object로 선언가능
type Person = {
  name: string;
  age?: number;
  like?: string[];
};

let person1: Person = {
  name: "person1",
  age: 20,
  like: ["blue", "apple"],
};
