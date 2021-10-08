function outer() {
    // debugger
    var i = 0;

    function inner() {
        i++;
        console.log(i);
    }

    return inner;
}

outer();

var result = outer();
result() //1
result() //2
result() //3
result() //4

var result2 = outer();
// result2(); //1
// result2(); //2

outer();
outer();
outer();

// result() //5

// result = null;
// result2 = null;