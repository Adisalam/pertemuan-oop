"use strict";
let nama = "Adisalam";
console.log("nama: ", nama);
let umur = 18;
console.log("umur: ", umur);
let mahasiswa = true;
console.log("ini mahasiswa: ", mahasiswa);
let matrix;
matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix);
// type inference
let result = 123;
let result1 = "123";
console.log(typeof result);
console.log(typeof result1);
// generic Array
let matrix2;
matrix2 = [
    123,
    123
];
console.log(matrix2);
// generic Array dalam Array
let matrix1;
matrix1 = [
    [1, 2],
    [3, 4],
    [5, 6],
];
console.log(matrix1);
//object
let person = {
    name: "adi",
    age: 19
};
console.log("person:", person);
// any
let randomValue = 10;
console.log("Random nilai (number): ", randomValue);
randomValue = "Hello";
console.log("Random nilai (number): ", randomValue);
randomValue = true;
console.log("Random nilai (number): ", randomValue);
// Enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let favouriteColor = Color.red;
console.log(favouriteColor);
// Tuple
let myTuple = [10, "Hello"];
console.log(myTuple[0]);
console.log(myTuple[1]);
// Union
let typeUnion;
typeUnion = 101;
console.log("identifier (number): ", typeUnion);
console.log("identifier (string): ", typeUnion);
console.log("identifier (boolean): ", typeUnion);
