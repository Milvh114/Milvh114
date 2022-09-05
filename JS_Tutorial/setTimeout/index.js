// setTimeout
// clearTimeout
// setTimeout (function, ms); // ms = millisecond
//timer

var done = () => console.log('Finish') ;

console.log('Start')
setTimeout(done, 1000) // tức sau 1000 millisecond(thường không chính xác)
console.log('Done')
