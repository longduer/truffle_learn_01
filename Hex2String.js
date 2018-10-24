var hex = new Buffer('60fe47b10000000000000000000000000000000000000000000000000000000000000064', 'hex');
console.info(hex.toString());
console.info(hextoString('60fe47b10000000000000000000000000000000000000000000000000000000000000064'));


function hextoString(hex) {
    var arr = hex.split("")
    var out = ""
    for (var i = 0; i < arr.length / 2; i++) {
        var tmp = "0x" + arr[i * 2] + arr[i * 2 + 1]
        var charValue = String.fromCharCode(tmp);
        out += charValue
    }
    return out
}