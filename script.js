
function turnOn() {
  document.getElementById("display").style.backgroundColor = "white";
  document.getElementsByName("square")[0].disabled = false;
  document.getElementsByName("division")[0].disabled = false;
  document.getElementsByName("multiply")[0].disabled = false;
  document.getElementsByName("seven")[0].disabled = false;
  document.getElementsByName("eight")[0].disabled = false;
  document.getElementsByName("nine")[0].disabled = false;
  document.getElementsByName("minus")[0].disabled = false;
  document.getElementsByName("four")[0].disabled = false;
  document.getElementsByName("five")[0].disabled = false;
  document.getElementsByName("six")[0].disabled = false;
  document.getElementsByName("add")[0].disabled = false;
  document.getElementsByName("one")[0].disabled = false;
  document.getElementsByName("two")[0].disabled = false;
  document.getElementsByName("three")[0].disabled = false;
  document.getElementsByName("zero")[0].disabled = false;
  document.getElementsByName("decimal")[0].disabled = false;
}
function reset() { 
  document.getElementById("calculator").reset(); 
}
