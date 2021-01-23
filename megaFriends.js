/* Below MegaFridens Part */

function megaFriend(friends) {
    var largestWord = friends[0];
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > largestWord.length) {
            largestWord = friends[i];
        }     
    }
    return largestWord;
}
console.log(megaFriend(["Rahim", "Fardous", "Sagor", "Tamjid", "NayemKhan", "Akash", "Korim"]));