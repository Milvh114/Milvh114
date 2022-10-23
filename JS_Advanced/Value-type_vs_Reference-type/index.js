// Value types VS Reference types

// Value types: 
let a1 = 1;
let a2 = 1;
console.log(a1 === a2);

// Reference types: kiểu tham chiếu
// *Object 
// *Array 

let obj1 = { a: 1}; // khi bạn khai báo obj1 thì nó sẽ tạo 1 địa chỉ ở bộ nhớ heap sau đó lưu các giá trị key: value vào
let obj2 = { a: 2}; // tương tự như thằng obj1 nhưng 2 thằng này không chung 1 địa chỉ ở bộ nhớ heap mặc dù giá trị key: value giống nhau
console.log(obj1 === obj2);

/**************************************************************************************/

// Value types:
let a3 = a2; // nên hiểu là thằng a3 nó được gắn lại chứ không thay đổi giá trị của a2
a3 = 2;
console.log(a2);


// Reference types:
let obj3 = obj2; // hiểu nôm na 2 thằng dùng cùng 1 địa chỉ nên obj2 thay đổi giá trị thì giá trị của obj3 thay đổi theo
// hiểu theo chuyên nghành thì khi bạn gán 1 biến bằng 1 object hoặc array thì các bạn đang tham chiếu đến object đấy
console.log(obj2)

/** Note: Nếu bạn truyền vào hàm 1 cái object nào đấy để thay đổi thuộc tính trong object thì object bên ngoài lúc ta truyền vào nó cũng bị thay đổi theo
 *  Khắc phục: có thể dùng deep-cloning(bản copy sâu)
 */
function log(x) {
    x.b = 5;
}
log(obj1);

console.log(obj1);
