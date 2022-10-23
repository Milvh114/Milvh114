// Destructuring - gỡ bỏ cấu trúc
// Áp dụng cho array, object


/** ARRAY:
*/


// TH1:
// const arr1 = [10, 20, 30, 40, 50]
// const [a, b, c, d, e] = arr1; // Lúc này a sẽ được gán với 10, b gán với 20, c = 30,...
// console.log(a, e);
// console.log(a, b, c, d, e);


// TH2: bỏ e
// const arr2 = [10, 20, 30, 40, 50]
// const [a, b, c, d] = arr2;  // nếu bỏ c đi thì d sẽ là 30
// console.log(a, b, c, d );


// TH3: bỏ b và c nhưng giữ dấu phẩy 
// const arr3 = [10, 20, 30, 40, 50]
// const [a, , , d] = arr3;  // TH này thì d vẫn là 40
// console.log(a, d);


// TH4: dùng ...rest
//C1:
// const arr3 = [10, 20, 30, 40, 50]
// const [a, ...d] = arr3;
// console.log(a, d);

//C2:
// const arr3 = [10]
// const [a, ...d] = arr3; // d sẽ là 1 mảng trống
// console.log(a, d);

//C3:dùng default parameter
// const arr3 = [10]
// const [a, d = 20] = arr3;
// console.log(a, d);



/** OBJECT:
 */


// TH1:
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// const { a: x, b: y, c: z } = obj 
// console.log(x, y, z); //output: 1 2 3


// TH2: dùng enhanced object literals
//C1: cách viết dài
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// const { a: a, b: b, c: c } = obj 
// console.log(x, y, z); //output: 1 2 3

//C2: cách viết ngắn 
//theo ta thấy key: value giống nhau => có thể dùng enhanced object literals
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// const { a, b, c } = obj 
// console.log(a, b, c); //output: 1 2 3


// TH3: dùng ...rest
const obj = {
    a: 1,
    b: 2,
    c: 3,
};
const { a, ...c } = obj 
console.log(a, c); //output: 1 2 3
const { ...b } = obj 
console.log(b); //output: 1 2 3
