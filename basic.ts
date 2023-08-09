// 타입 추론
// let animalName = "Tiger";
// animalName = 10;

// 유니온 타입
// let animalName: string | number = "Tiger";
// animalName = 10;

// 타입 별칭 (type alias)
// type Person = {
//   name: string;
//   age: number;
// };
// let person: Person;
// let people: Person[];

// 함수 & 함수 타입
// function add(a: number, b: number) {
//   return a + b;
// }
// add(2, 3);
// function print(value: any) {
//   console.log(value);
// }

// 제네릭
// function insertAtBeginning<T>(array: T[], value: T) {
//   const newArray = [value, ...array];
//   return newArray;
// }
// const demoArray = [1, 2, 3];
// const updateArray = insertAtBeginning(demoArray, -1);
// const stringArray = insertAtBeginning(["a", "b", "c"], "d");
