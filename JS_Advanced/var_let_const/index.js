// var let const
// 1. Declaration (khai báo biến)
// 2. Hoisting 
// 3. Block scope (if, for, )
// 4. Redeclaration (khai báo lại)

// 1.
var a = 1; // có thể khai báo 1 biến nhiều lần
let b = 2; // chỉ có thể khai báo 1 lần nếu không nó sẽ báo lỗi trước khi chương trình chaỵ và khi khai báo có thể không cần gán giá trị
//
const c = 3; // khi khai báo bằng const thì phải gán giá trị cho nó ko thì sẽ bị lỗi
console.log(a, b, c)

//let b = 3; ---> ở trên đã khai báo  nếu chạy code nó sẽ báo lỗi trước khi chạy
// const c; ---> ở trên đã khai báo 1 lần khai báo lại sẽ báo lỗi và cả lỗi không gán giá trị cho nó

// 2.Hoisting
// 3.

/* IF */
// Dùng let const khai báo trong if/for nó sẽ block scope lại nhưng var thì lại không
// Example:
if(true) {
    var x = 5;
    const y = 10;
    let z = 15;
}
console.log(x) // ---> in ra 5
console.log(y) // ---> báo lỗi không tồn tại
console.log(z) // ---> báo lỗi không tồn tại

/* FOR */

// for(var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i); ---> in ra i = 5
// nếu khai báo bằng let hoặc const nó sẽ báo lỗi


// khai báo bằng let trong vòng lặp for có thể khai báo 2 lần
// Example: 
// for(let i = 0; i < 5; i++) {  | bthg thường chỉ khai báo i được 1 lần duy nhất bằng let
//     console.log(i);           |
// }                             |
// for(let i = 0; i < 5; i++) {  | nhưng trong for nó có thể khai báo 2 lần 
//     console.log(i);           |
// }                             |

/** NOTE */
//không được dùng const trong vòng lặp for vì thằng const chỉ được gọi 1 lần và nếu thay đổi giá trị nó sẽ báo lỗi

