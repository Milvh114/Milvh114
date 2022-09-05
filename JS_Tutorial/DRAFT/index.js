array = [1,2,3,4,5,6,7,6,3,1]
sort = {
    odd: [],
    even: []
}
var a = array.reduce((curr,items) => {
    var result = (items % 2 === 0) ? curr.even.push(items) : curr.odd.push(items);
    return curr
},sort)
console.log(a)
console.log(sort)