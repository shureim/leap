function check_leapy(){
var leap;
leap = document.getElementById("year").value;

if (leap%4 === 0){
 if (leap%100 ===0){
  if (leap%400 ===0){
    alert(leap + " is a leap year");
  }
  else
   alert(leap + " is not a leap year");
 }
 else
  alert(leap + " is a leap year");
}
else
alert= (leap + " is not a leap year");

}
