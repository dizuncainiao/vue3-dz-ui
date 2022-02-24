function createArr(length, value) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(value);
    }
    return arr;
}
var result = createArr(2, '222');
var foo = result[0];
console.log(foo.isArray());
