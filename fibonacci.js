// fobonacci = [0,1,1,2,3,5,8,13,21..];
function fibonacci(num) {
    var fibo = [0, 1];
    for (var i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];

    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);
