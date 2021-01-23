/* Below budgetCalculator Part */

function budgetCalculator(watch, phone, laptop) {
    var watch = watch * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
    var sum = watch + phone + laptop;
    return sum;
}
var totalCost = budgetCalculator(6, 2, 3);
console.log(totalCost);