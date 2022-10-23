// Array-like Object & Arguments


// Array-like Object:

// Ví dụ: cho 1 array gồm các cái tên
/** Cách 1:
*/

// const names = ['thanh', 'trang', 'thuy'];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// /** Cách 2:
//  */

// const obj = {
//     0: 'thanh',
//     1: 'trang',
//     2: 'thuy',
//     length: 3 
// };
// for (let i = 0; i < obj.length; i++) {
//     console.log(obj[i]);
// }

/** Kết luận:
 * Array-like object tức là 1 cái object giống như cái array nhưng nó khác array là không có các method của array
 * Note!!!: Array-like object phải đảm bảo có thuộc tính length
 */


// Arguments:

// Giả sử viết 1 sum nhận vào 2 tham số. bây giờ mình muốn hàm chạy được với 3 tham số hoặc n tham số mà vẫn tính tổng
//

function sum(a, b) {
    console.log(arguments); // thử in thằng arguments ra xem có gì 
    console.log(arguments.length); // thử kiểm tra xem có thuộc tính length không
// => nó là 1 object có các cái key:value, nhưng khi gọi nó lên lại ở dạng mảng (arguments[index]) :DDDD⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎⚠︎
// => biến này tuy không khai báo nhưng nó tồn tại trong scope của hàm ấy.
    return a + b;
}
sum(1, 2, 3, 4, 10)
// có 2 cách nhưng ta không cần truyền đầu vào nữa vì ta đã biết đầu vào là thằng arguments.

/** Cách 1:
 */
// function sum() {
//     let result = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// }
// sum(1, 2, 3, 4, 10)

/** Cách 2:
 */

function sum() {
    const numbers = Array.from(arguments);
    console.log(Array.from(arguments));
    // return numbers.reduce(function(sum, num) {
    //     return sum + num;
    // }, 0);
    return numbers.reduce((sum, num) =>sum + num,0);
}

//sum(1, 2, 3, 4, 10, 20);
console.log(sum(1, 2, 3, 4, 10, 20))
// console.log(sum())
