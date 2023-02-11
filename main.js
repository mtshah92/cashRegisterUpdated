var billAmount = document.querySelector("#billAmount");
var cashAmount = document.querySelector("#cashAmount");
var nextButton = document.querySelector("#next-button");
var nextButtonField = document.querySelector("#next-button-field");
var checkButton = document.querySelector(".btn-check");
var message = document.querySelector(".msg");
var twoThousand = document.querySelector(".twoThousand");
var fiveHundred = document.querySelector(".fiveHundred");
var twohundred = document.querySelector(".twoHundred");
var hundred = document.querySelector(".hundred");
var fifty = document.querySelector(".fifty");
var twenty = document.querySelector(".twenty");
var ten = document.querySelector(".ten");
var one = document.querySelector(".one");

document.getElementById("cashInputField").style.display = "none";

function checkNotes(difference) {
  var firstOut = Math.trunc(difference / 2000);
  var secondInput = difference % 2000;

  var secondOut = Math.trunc(secondInput / 500);
  var thirdInput = secondInput % 500;

  var thirdOut = Math.trunc(thirdInput / 200);
  var fourthInput = thirdInput % 200;

  var fourthOut = Math.trunc(fourthInput / 100);
  var fifthInput = fourthInput % 100;

  var fifthOut = Math.trunc(fifthInput / 50);
  var sixInput = fifthInput % 50;

  var sixOut = Math.trunc(sixInput / 20);
  var seventhIn = sixInput % 20;

  var seventhOut = Math.trunc(seventhIn / 10);
  var eigthIn = seventhIn % 10;

  var eightOut = Math.trunc(eigthIn / 1);

  twoThousand.innerHTML = firstOut;
  fiveHundred.innerHTML = secondOut;
  twohundred.innerHTML = thirdOut;
  hundred.innerHTML = fourthOut;
  fifty.innerHTML = fifthOut;
  twenty.innerHTML = sixOut;
  ten.innerHTML = seventhOut;
  one.innerHTML = eightOut;
}

function showCashField() {
  if (billAmount.value !== "") {
    document.getElementById("cashInputField").style.display = "block";
    document.getElementById("next-button").style.display = "none";
  } else {
    message.innerText = "Please Enter Bill Amount";
  }
  // document.getElementById("billInputField").style.display = "none";
}

function calculateTransaction() {
  if (billAmount.value !== "" && cashAmount.value !== "") {
    if (billAmount.value >= 0 && cashAmount.value >= 0) {
      var diff = cashAmount.value - billAmount.value;
      if (diff >= 0) {
        checkNotes(diff);
        message.innerHTML = "Amount to be returned " + diff;
      } else message.innerHTML = "Invalid Cash";
    } else {
      message.innerText = "Enter both Positive values";
    }
  } else {
    message.innerText = "Enter both values";
  }
}

nextButton.addEventListener("click", showCashField);
checkButton.addEventListener("click", calculateTransaction);
