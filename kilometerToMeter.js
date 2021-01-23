/* Below Kilometer To Meter Convert Part */

function kilometerToMeter(num) {
    if (num >= 1) {
        var meter = num * 1000;
        return meter;
    }
    else {
        return 'Sorry ! Please input your exact Number.'
    }
}
var result = kilometerToMeter(10);
console.log(result);