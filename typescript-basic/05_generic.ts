function getValue(str: string): string {
  // 모든 값이 들어올 수 있는 함수다 ->  제네릭 타입 사용
  return str;
}

function arrLength(arr: any[]): number {
  //any 사용이 좋지 않다
  return arr.length;
}

//제네릭 사용해서 바꾸기
function getValue2<T>(val: T): T {
  return val;
}

function arrLength2<T>(arr: T[]): number {
  return arr.length;
}

// console.log(getValue2<string>("string"));
// console.log(arrLength2<number>([1, 2, 4, 4, 5, 6, 9]));

function printSome<T>(x: T, y: T): T {
  console.log(x);
  console.log(y);
  return x;
}

// printSome<number | string>("hello", 1);

function printSome2<T, K>(x: T, y: K) {
  console.log(x);
  console.log(y);
}

// printSome2<string, number>("1", 1);

function arrElement<T>(x: T[], y: number): any {
  if (x.length < y + 1) {
    return false;
  }
  return x[y];
}

console.log(arrElement<string>(["a"], 1));
console.log(arrElement<string>(["a", "b"], 1));
