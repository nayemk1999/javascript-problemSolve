// var marks = [5, 2, 5, 8, 10, 45, 30, 70, 50];
// var largestNum = marks[0];

// for(var i = 0; i <= marks.length; i++){
//     var element = marks[i];
//     if(element > largestNum){
//        largestNum = element;
//     }
// }
// console.log('This Is largerest Number:',  largestNum);

var arr = [1,2,3];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});