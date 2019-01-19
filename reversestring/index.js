// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var deconst = str.split('');
    var res = '';
    for (var i = deconst.length - 1; i > -1; i--) {
        res = res.concat(deconst[i]);
    }
    return res;
}

module.exports = reverse;
