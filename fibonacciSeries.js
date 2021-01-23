function fibonacciSeries(num){
    var fibo = [0, 1];
    for ( var i = 2; i <= num; i++){
        var nextElement = fibo[i-1] + fibo[i-2];
        fibo.push(nextElement);
    }
    return fibo;
}
var result = fibonacciSeries(10);
console.log(result);

// function fibonacci (num){
//     if(num == 0){
//         return  0;
//     }
//     if(num == 1){
//         return  1;
//     }
//     else{
//         return fibonacci(num-1) + fibonacci(num-2);
//     }
// }
// var result = fibonacci(10);
// console.log(result);