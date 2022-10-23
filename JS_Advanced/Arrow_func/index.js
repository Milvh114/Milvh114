// Arrow function expression
// alias: fat_arrow
/*************************************************************************************/
var a = {
    name: 'AAA',
    run: function() {
        console.log(this.name); // Output: AAA
        // thằng this.name lúc này là thằng a.name
    }
};
console.log("======================");
a.run();

/*************************************************************************************/

var a = {
    name: 'AAA',
    run: function() {
        var run2 = function() { // run2 không phải method nó chỉ là hàm bình thường vì không có object hay x.run2 hay y.run2 cả
            console.log(this.name); // Output: Undefined
            // vì run2 không phải method => this.name là global context => do global context không có thằng name nào cả nên sẽ in ra undefined
            // thằng this.name lúc này không còn là thằng a.name vì nó là this.name của hàm run2 chứ không phải của hàm run
            // hiểu nôm na là run là method còn run2 là function
        }
        run2();
    }
};
console.log("======================");
a.run();

/*************************************************************************************/
// Khắc phục: 
console.log("============khắc phục==========");

// dùng bind()

// Cách 1: dùng bind(a)
var a = {
    name: 'AAA',
    run: function() { // thằng này không dùng được arrow_func vì nó đã có context rồi
        var run2 = function() { 
            console.log(this.name); // Output: Undefined
        }
        // }.bind(a)
        // run2();
        run2.bind(a)(); // có thể chuyển bind(a) lên dòng trên như comment ở dòng 39-40
    }
};
console.log("==========cách_1============");
a.run();

// Cách 2: dùng bind(this)
var a = {
    name: 'AAA',
    run: function() { // thằng này không dùng được arrow_func vì nó đã có context rồi
        var run2 = function() {
            this; //nếu gọi this ở đây thì this lúc này của thằng a => mình có thể dùng this ở chỗ bind(a)
            console.log(this.name); 
        }
        // }.bind(this)
        // run2();
        run2.bind(this)(); // có thể chuyển bind(this) lên dòng trên như comment ở dòng 39-40
    }
};
console.log("==========cách_2============");
a.run();

// Cách 3: khai báo that = this ở ngoài hàm run2
var a = {
    name: 'AAA',
    run: function() { // thằng này không dùng được arrow_func vì nó đã có context rồi
        var that = this;
        var run2 = function() {
            console.log(that.name); 
        }
        run2();
    }
};
console.log("===========cách_3===========");
a.run();

// Cách 4: dùng arrow_func
var a = {
    name: 'AAA',
    run: function() {
        var run2 = () => { //tóm lại nếu là method của object hay còn gọi là có context không có thể dùng arrow_func 
            console.log(this.name); // cứ global context có thể dùng arrow_func => biến this chính là context của hàm gần nhất của 'cái hàm mà nó nằm trong'(hàm run2 nằm trong hàm run=>this nằm trong hàm run2=> hàm gần nhát là hàm run) là hàm run không phải run2
        }
        run2();
    }
};
console.log("===========cách_4===========");
a.run();


/*************************************************************************************/
