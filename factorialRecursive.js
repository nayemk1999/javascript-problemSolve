function factorialRecursive(num){
 
    if (num == 0){
        return 1;
    }
    else if (num == 1){
        return 1;
    }
    else{
        return factorialRecursive(num-1) * num;
    }
}
var result = factorialRecursive(5);
console.log(result);