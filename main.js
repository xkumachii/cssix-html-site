// console.log("js file is connected.");
// console.log(2 + 2);

function checkout (item1, item2, coupon) {
  var subtotal = item1 + item2;
  var couponValue = subtotal *coupon;
  var grandTotal = subtotal - couponValue;
  //console.log(grandTotal);
  return grandTotal;
}

function helloFunction(name) {
  if(name === 'sammy') {
    console.log("screw you, man");
  } else {
    console.log("sup" + name + ".");
  }
};

helloFunction('sammy');

console.log(checkout(33, 19, .15));

checkout(23, 0, 0);

var oneItemResult = checkout(12, 0, 0);

console.log(oneItemResult);

checkout(500, 1000, .05);

var bananaPrice = 1.5;
var chocoPudding = 6;
var superCoupon = .45;

var bankAccount = 100; //fucking shit nigga god dam son

var remainAmount = bankAccount - checkout(bananaPrice, chocoPudding, superCoupon);

console.log('i have ' + remainAmount + " left in my bank account.");
