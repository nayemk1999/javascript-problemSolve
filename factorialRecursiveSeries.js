function fibonacciRecursiveSeries(num){
    if(num == 0){
        return [0];
    }
    if(num == 1){
        return [0, 1];
    }
   
    var fibo = fibonacciRecursiveSeries(num-1);
    var nextElement = fibo[num-1] + fibo[num-2];
    fibo.push(nextElement);
    return fibo;

}
var result = fibonacciRecursiveSeries(10);
console.log(result);
