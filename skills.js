// Determine if two numbers are relatively prime
function isRelativelyPrime(var1, var2) {
    var gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };
    return gcd(var1, var2) === 1;
}


module.exports = isRelativelyPrime;