// global context
// function context
// bind


// 1. Global context
// thực ra global context chỉ là 1 cái biến có các giá trị khác nhau tuỳ vào môi trường các bạn chạy.

// var mouse = {
//     name: 'Mickey',
//     sayHi: function() {
//         console.log('hi, my name is', this.name);
//     }
// };
// mouse.sayHi(); // context của thằng sayHi này là mouse, biến this trong hàm sayHi lúc này sẽ trỏ đến mouse
// var say = mouse.sayHi(); 
// console.log(mouse.sayHi())
// đồng nghĩa với: say = function() { console.log('hi, my name is', this.name)}
// VÌ mouse.sayHi là function chứ không phải mouse.sayHi()
// say(); // nó không có context (như là mouse,...) chúng ta sẽ gọi hàm này là 1 global context
// console.log(say)
/*************************************************************************************************************/


// 2. Bind

// var mouse = {
//     name: 'Mickey',
//     sayHi: function()  { // ko dùng được arrow function vì có context
//         console.log('hi, my name is', this.name);
//     }
// };
// //mouse.sayHi();
// var say = mouse.sayHi.bind(mouse);
// say();  

/******************************************************************/

function run(cb) {
    console.log('run...');
    cb();
}

var mouse = {
    name: 'Mickey',
    sayHi: function() {
        console.log(this.name)
    }
};

console.log(mouse.sayHi())
console.log(run(mouse.sayHi)); //---> nó sẽ ra undefined
run(mouse.sayHi.bind(mouse)); // khi gọi bind thì biến mouse trong bind thì biến this tương ứng với biến được truyền vào là mouse
