// Enhanced object literals: giúp cho các bạn khai báo 1 cách ngắn gọn hơn các thuộc tính của các object;

// // Constructor function
// function Mouse(name) {
//     this.name = name;
// }

// Mouse.prototype.run = function() { // prototype cũng có context nên không dùng arrow_func được
//     console.log(`${this.name} is running`)
// };

// const mickey = new Mouse('Mickey');
// mickey.run();


// //Object literals
// const jerry = {
//     name: 'Jerry',
//     run: function() {
//         console.log(`${this.name} is running`);
//     }
// }
// jerry.run();


//Enhanced object literals
const name = 'Tom';
const cat = {
    name, // nó sẽ tự hiểu là name: name,
    run() {
        console.log(`${this.name} is running`);
    }
}
cat.run();