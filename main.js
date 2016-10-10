// PART ONE

// EXERCISE 1.1

var a = 2;

function pow (x, n) {
    // added var keyword to make scope of a local.
    // prevents the global variable a from updating
    // (second function call returns 2^2 instead of 2^9)
    var a = x;  
    for (var i = 1; i < n; i++) {
        a *= x;
    }
    return a;
}

// console.log(pow(3, a));
// console.log(pow(2, a));

// EXERCISE 1.2

var i = 0;

var logNTimes = function (str, n) {
    // added var keyword to prevent global variable i from incrementing
    // along with the local variable i within the function
    // else i = 2 and while loop only loops once.
    var i = 0;  
    while (i < n) {
        console.log(str);
        i++;
    }
};

while (i < 3) {
    logNTimes('Work', 2);
    i++;
}

// EXERCISE 1.3

(function () {
    var url = 'http://openweathermap.com/api/'
    var apiKey = '1ab2-01bd45-30dab-22232';

    function request (path, method) {
        // changed variable name from url -> address inside inner function to prevent function's local url variable from chaining
        // onto the global url variable with each request.
        var address = url + path + apiKey;
        return http.requestSync(address, method);
    }

    // var users = request('/users', 'GET');
    // var cities = request('/cities', 'GET');
})();

// EXERCISE 1.4

var b;

(function() {
   // declared local variable b to prevent the global variable b
   // from updating to 5.
   var b;
   var a = b = 5;
})();

// console.log(typeof b)
// console.assert(b === undefined);

// PART 2

// EXERCISE 1

var x = 1;
var a = 5;
var b = 10;

var c = function (a, b, c) {
    var x = 10;

    console.log(x);
    console.log(a);

    var f = function (a, b, c) {
        var x = 5;
        b = a;
        console.log(b);
        b = c;
    }

    f(a, b, c);

    console.log(b);
 }

c(8, 9, 10);

// 10, 8, 8, 9












