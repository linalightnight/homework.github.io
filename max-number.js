var x;
var y;
var a;

x = prompt ("Enter your first number");
y = prompt ("Enter your second number");
a = prompt ("Enter your third number");

if (( x >= y ) && ( x >= a )) {
    result = alert ( x );
}
else if (( y >= x ) && ( y >= a )) {
    result = alert (y);
}
else {
    result = alert (a);
}