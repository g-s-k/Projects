/*convert binary to decimal and vice versa. 
parseInt(x,y) parses string, returns integer.
toString(x) converts a num to string, can use diff bases in place of x */

var toDecimal = function(binary) {
    return parseInt(binary,2).toString(10);
}
var toBinary = function(decnum){
    return parseInt(decnum,10).toString(2);
}
var num= prompt("Enter num"); 
this.console.log(toDecimal(num));