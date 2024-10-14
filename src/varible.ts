let nama: string = "Adisalam"
console.log("nama: ", nama);

let umur: number = 18
console.log("umur: ", umur);

let mahasiswa : boolean = true;
console.log("ini mahasiswa: ", mahasiswa);

let matrix: number[][]
matrix = [
    [1,2],
    [3,4],
    [5,6]
]
console.log(matrix);


// type inference
let result = 123;
let result1 = "123"
console.log(typeof result)
console.log(typeof result1)

// generic Array
let matrix2: Array<number>;
matrix2 = [
    123,
    123
]
console.log(matrix2);

// generic Array dalam Array
let matrix1: Array<Array<number>>;
matrix1 = [
    [1,2],
    [3,4],
    [5,6],
];
console.log(matrix1);

//object
let person: { name: string; age: number } = {
    name: "adi",
    age: 19
};
console.log("person:", person)

// any
let randomValue : any = 10;
console.log("Random nilai (number): ", randomValue);
randomValue = "Hello"
console.log("Random nilai (number): ", randomValue);
randomValue = true
console.log("Random nilai (number): ", randomValue);

// Enum
enum Color{
    red,
    green,
    blue
}
let favouriteColor: Color = Color.red;
console.log(favouriteColor)

// Tuple
let myTuple: [number, string] = [10, "Hello"]
console.log(myTuple[0]);
console.log(myTuple[1]);

// Union
let typeUnion: string | number | boolean
typeUnion = 101
console.log("identifier (number): ", typeUnion);
console.log("identifier (string): ", typeUnion);
console.log("identifier (boolean): ", typeUnion);