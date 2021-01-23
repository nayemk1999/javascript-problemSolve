/* Below HotelCost Part */

function hotelCost(num) {
    var sum = 0;
    if (num <= 10 && num >= 1) {
        sum = num * 100;
    }
    else if (num <= 20 && num >= 1) {
        var firstOffer = 10 * 100;
        var remainingDays = num - 10;
        var secondOffer = remainingDays * 80;
        sum = firstOffer + secondOffer;
    }
    else {
        if (num >= 21 && num >= 1) {
            var firstOffer = 10 * 100;
            var secondOffer = 10 * 80;
            var remainingDays = num - 20;
            var thirdOffer = remainingDays * 50;
            sum = firstOffer + secondOffer + thirdOffer;
        }
        else {
            return 'Please remove your negative number or remove (-) negative sign.'
        }
    }
    return sum;
}
var totalHotelCost = hotelCost(25);
console.log(totalHotelCost);