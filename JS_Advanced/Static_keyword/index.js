// Static keyword
// dùng để tạo ra các  static method
// sự khác nhau với basic_method: static method nó không được gọi từ instance của cái class đó mà nó được gọi từ chính class

class Foo {
    static someMethod() {
        console.log('some method')
    }

    anotherMethod() {
        console.log('another method');
    }

}

Foo.someMethod();// bạn có thể gọi Foo.someMethod()
// Foo.anotherMethod();// nhưng bạn không có thể gọi Foo.anotherMethod() => bạn phải tạo 1 cái instance 

// Instance: là 1 cái object được tạo ra từ cái class nào đấy => cái object đấy là instance của cái class đó
// Note: bản chất của instance cũng từ prototype ra

const foo = new Foo(); // instance
// sau khi tạo instance thì bạn có thể gọi Foo.anotherMethod()
// nhưng bạn không thể gọi Foo.someMethod() vì thằng này nó thuộc về cái class rồi

foo.anotherMethod();

/** Cách hoạt động: biểu diễn cách hoạt động dưới dạng constructor_func
 */

// // Instance <=> 
// function Foo{
//     ...
// }
// Foo.prototype.anotherMethod = function() {...};
// // Static <=>
// Foo.someMethod = function() {...};



