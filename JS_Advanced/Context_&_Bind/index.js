// global context
// function context
// bind


// 1. Global context
// thực ra global context chỉ là 1 cái biến có các giá trị khác nhau tuỳ vào môi trường các bạn chạy.

var mouse = {
    name: 'Mickey',
    sayHi: () => {
        console.log('hi, my name is', this.name);
    }
};
mouse.sayHi(); // context của thằng sayHi này là mouse, biến this trong hàm sayHi lúc này sẽ trỏ đến mouse
var say = mouse.sayHi; 
// đồng nghĩa với: say = function() { console.log...}
say(); // nó không có context (như là mouse,...) chúng ta sẽ gọi hàm này là 1 global context

/*************************************************************************************************************/


// 2. Bind

// var mouse = {
//     name: 'Mickey',
//     sayHi: () => {
//         console.log('hi, my name is', this.name);
//     }
// };
// var say = mouse.sayHi.bind(mouse);
// say(); 

// function run(cb) {
//     console.log('run...');
//     cb();
// }

// var mouse = {
//     name: 'Mickey',
//     sayHi: () => {
//         console.log(this.name)
//     }
// };
// run(mouse.sayHi); //---> nó sẽ ra undefined
// run(mouse.sayHi.bind(mouse));