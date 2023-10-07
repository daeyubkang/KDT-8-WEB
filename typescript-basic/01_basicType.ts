let num: number = 1;
let str: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

//array, object
// array : 길이를 미리 명시해둘 필요는 X, elements의 타입은 명시 필요
let arr: string[];
const numArr: number[] = [1, 2, 3];
let strArr: Array<string> = ["apple", "banana"];

//배열에 여러 가지 타입 넣기
// 1. number or string 배열 arr1
let arr1: (number | string)[] = [1, 2, 3, "one", "two"];

//2. boolean or null number 배열 arr2
let arr2: Array<boolean | number[] | null> = [false, null, [1, 2, 3]];

//3. 어떤 자료형이든 상관업이 들어갈 수 있는 배열 arrAny
// any type은 타입을 정확하게 명시하기 어려울 때 사용, 과다하게 사용은 지양
let arrAny: any[] = [1, 2, "qwe", true];

//object
let object: object = {
  name: "hi",
  age: 12,
};

console.log(object);
