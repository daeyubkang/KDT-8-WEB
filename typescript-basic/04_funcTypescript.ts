// function print(a: number, b: number, c?: number) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// print(1, 2, 3);

function sum1(a: number, b: number): Number {
  return a + b;
}
// console.log(sum1(5, 11));

function sum2(...num: number[]): number {
  let result: number = 0;
  num.map((items) => {
    result += items;
  });
  return result;
}

console.log(sum2(1, 2, 3, 4, 10));

interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const daeyub: Greet = {
  name: "daeyub",
  hi() {
    return "hi my name is " + this.name;
  },
  bye(a: number) {
    return `작별 인사를 ${a}번 했다.`;
  },
};

console.log(daeyub.hi());
console.log(daeyub.bye(3));

//함수 오버로딩
//만들 함수: 숫자가 오면 더하고 문자가 오면 이어주는 함수

// function addSomething(a: string | number, b: number | string): string | number {
//   return a + b; // error: 문자 + 숫자 인 경우가 올 수 있기 때문에
// }

// 오버로딩: 함수의 매개변수의 개수, 타입/반환 타입이 다를 때
//    같은 이름으로 매개변수의 종류와 개수를 달리 선언할 수 있음

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
  return a + b;
}

console.log(add(1, 2));
console.log(add("hello", "world"));
