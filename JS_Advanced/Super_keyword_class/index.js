//super

class Hero {
    constructor(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }

    applyDamage(damage) {
        this.hp -= damage;
    }

    attack(enemy) {
        enemy.applyDamage(this.damage)
    }

}

const heroA = new Hero('A', 100, 10)
const heroB = new Hero('B', 200, 5)
console.log('start:',{ heroA, heroB })

heroA.attack(heroB);
console.log('End:',{ heroA, heroB })

class RangedHero extends Hero { //subclass
    constructor(name, hp, damage, range) {
        // this.name = name;
        // this.hp = hp;
        // this.damage = damage;
        //=> bây giờ mình muốn khai báo lại 3 dòng này
        //note: class này có thêm 1 thuộc tính là range
        //=> sử dụng super: thằng này nó đại diện cho base_class(Class_Hero)
        super(name, hp, damage);// khi các bạn gọi super nó đại diện cho constructor func của base_class
        this.range = range;
    }

    attack(enemy) {
        super.attack(enemy);  // dòng này dùng để gọi các method của thằng base_class
        // tại sao lại làm như vậy
        // mình muốn RangedHero.attack thì nó sẽ làm công việc giống như thằng hero.attack
        this.hp += this.damage // dòng này mình thêm chức năng hút máu cho thằng RangedHero
    }

}

const heroC = new RangedHero('C', 100, 10)
const heroD = new Hero('D', 200, 5)
console.log('start:',{ heroA, heroB })

heroC.attack(heroD);
console.log('End:',{ heroC, heroD }) // chaỵ dòng này máu hero C sẽ tăng lên 110 và heroB giảm còn 190