// Class & class inheritance

/** Class:
 */

//JScripst ban đầu không phải là OOP
// cú pháp class sinh ra để viết constructor function ngắn gọn hơn và giống OOP hơn
// bản chất của class cũng là dùng prototype

// Constructor function
// Cách viết 1:
// function Mouse(name) {
//     this.name = name;
// }
// Mouse.prototype.run = function() {
//     console.log(`${this.name} is running`)
// };

// Cách viết 2:
// class Mouse {
//     constructor(name){
//         this.name = name;
//     }

//     run() {
//         console.log(`${this.name} is running`)
//     }
// }

// const jerry = new Mouse('Mickey');
// jerry.run();


/*********************************************************************************************************/

/** Class inheritance:
 */

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log('Eating...')
    }
}

class Bird extends Animal {
    fly() {
        console.log('Flying...');
    }
}

class Parrot extends Animal {
    speak() {
        console.log('Speaking...')
    }
}

const chim = new Bird('Thông');
chim.fly();
chim.eat();
chim.speak(); // sẽ báo lỗi tại vì chim không nằm trong class kế thừa của parrot

/******************************************************************************************************************************/
//viết cách trên theo dạng constructor function(học cho biết):
// Constructor function:

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log('Eating');
}

function Bird(name) {
    Animal.apply(this, aguments); // dòng lệnh này làm cho thằng bird kế thừa cả constructor function
    // note: argument là 1 array-like object nên nó thoả mãn điều kiện array
    // this lúc này là bird chứ không phải animal
    console.log(aguments)

}

Bird.prototype = new Animal('minh');
console.log(Bird.prototype.eat())
console.log(Bird.prototype.name)


// Q&A: 
// 1. vì sao lại truyền name vào hàm bird
// 2. this ở dòng 78 có tác dụng gì