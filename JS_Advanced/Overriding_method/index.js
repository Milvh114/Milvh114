// Overriding
// ghi đè 1 cái method

class CoffeeMachine {
    makeCoffee() {
        console.log('making coffee...')
    }
}

class SpecialCoffeeMachine extends CoffeeMachine {
    // giả sử bây giờ muốn 1 cái method makeCoffee trong class SpecialCoffeeMachine không phải của class nó kế thừa-CoffeeMachine
    makeCoffee(cb) {
        console.log('making coffee and do something...'),
        cb()
    }
}

const coffeeMachine = new SpecialCoffeeMachine();
coffeeMachine.makeCoffee(() => console.log('call the bosss')); 

//khi bạn gọi makeCoffee thì nó sẽ gọi makeCoffee ở trong class SpecialCoffeeMachine không phải class CoffeeMachine(class nó kế thừa) => Overriding 
// bạn có thể thay đổi bằng cách truyền tham số hoặc callback()...