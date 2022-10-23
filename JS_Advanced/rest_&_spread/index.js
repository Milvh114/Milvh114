// ...rest - phần còn lại
// ...spread - trải ra


/** ...rest:
 *  Nó gom các giá trị lại thành array
 */


function log(a, ...numbers) {
    console.log(a);
    console.log(numbers); // output: [2, 3, 4]
    // chạy thử để xem numbers là cái gì
    // như bạn thấy numbers là 1 cái mảng
    // mà a được gán cho 1 thì các số còn lại là 2, 3, 4
    // NOTE: thằng rest lúc nào cũng đặt ở cuối
    // Do Not: function log(a, ...numbers, b) => sai
    console.log(arguments);// rest khác với thằng arguments ở chỗ arguments là 1 cái object (array-like object)
}

log(1, 2, 3, 4);

//TH: nếu mình thử bỏ thằng a đi thì numbers lúc này là cả cái mảng đã cho 

function log(...numbers) {
    console.log(numbers); // output: [1, 2, 3, 4]
}
log(1, 2, 3, 4);

/** Ứng dụng:
*/

// Ví dụ 1:
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0)
}
console.log(sum(1, 2, 3, 4, 5))

// Ví dụ 2: có 1 cái hàm nối chuỗi
function concat(separator, ...strings) { //separator: biến phân cách
    return strings.join(separator);
}

console.log(concat(',', 'a', 'b', 'c'))

/**********************************************************************************************************************/

/** ...spread:
 *  Nó trải các phần tử ra
 */

// Ví dụ:
// const a = [1, 2, 3];
// const b = [0, ...a, 4];
// const c = [0, a, 4];
// console.log(b)
// console.log(c)

// Spread an array:
const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log(b);

// Spread an object:

// => Nó trả về 1 bản shallow-cloning
// Shallow-cloning: khi thay đổi giá trị hoặc thuộc tính ở bản shallow-cloning thì các giá trị ở bản chính cũng bị thay đổi
// <=> Deep-cloning thì ngược lại
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: { e: 10}
};
console.log(obj1['b'])

let obj2 = {
    ...obj1, // dòng này nó sẽ trải các key: value của obj1 ra đây
    z: 1000
};
for (let key in obj1) {
    //
    console.log(typeof(key))
    console.log(key)
    console.log(obj1[key])
    obj2[key] = obj1[key];
}

obj2.d.e = 11;
