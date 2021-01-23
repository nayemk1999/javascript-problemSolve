var randomMath = 5.4452;
//  var result = Math.round(number);
function randomMath(number) {
    return number;
}
// var result = Math.round(randomMath);
// console.log(result);
// var result = Math.ceil(randomMath);
// console.log(result);
// var result = Math.floor(randomMath);
// console.log(result);
var result = Math.random(randomMath) * 5;
var nextrandom = Math.round(result);
console.log(nextrandom);

for (var i = 0; i <= 5; i++) {
    var result = Math.random(randomMath) * 5;
    var nextrandom = Math.round(result);
    console.log(nextrandom);
}