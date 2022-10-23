

// Call & Apply
// call: function.call(this, param1, param2, ...); // nhận vào 1 loạt tham số
// apply: function.apply(this, [param1, param2, ...]); // nhận vào array

/** Call:
 */

// function greeting(name) {
//     console.log(`Hi! ${name}. I am ${age}`);
// }

// greeting.call(null,'Tom', 10) 
// khi hàm này chạy thì tham số đầu tiên truyền vào nó sẽ đại diện cho THIS. nếu hàm có THIS. <=> nếu không dùng không truyền gì vào cũng được.
// Từ tham số thứ 2 trở đi là tham số của hàm này

/***************************************************************************************************************/

function greeting(name) {
    console.log(`Hi! ${this.name}. I am ${this.age}`);
}

const cat = {
    name: 'Tom',
    age: '100'
}

greeting.call(null)
// greeting.call(null, 'Tom', 10) 

//=====================================================The_End===============================================//

/** Apply:
 */

/** Ví dụ 1:
 */
// function greeting(name) {
//     console.log(`Hi! ${this.name}. I am ${this.age}`);
// }

// const cat = {
//     name: 'Tom',
//     age: '100'
// }

// greeting.apply(cat) 

/** Ví dụ 2:
 */
function sum() {
    const numbers = Array.from(arguments);
    console.log(Array.from(arguments)); //không gọi hàm dòng lệnh này vẫn chạy
    return numbers.reduce((sum, num) => sum + num, 0)
}

function average() {
    //sum
    const x = sum.apply(null, arguments); // aguments là 1 array
    //sum / arguments.lenght;
    return x / arguments.length;
}
// console.log(sum(1, 2, 3, 5))
console.log(average(1, 2, 3, 6));
