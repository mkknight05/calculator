var val1,val2,result;

function setValue(){
val1 = Number(document.getElementById("val1").value);
val2 = Number(document.getElementById("val2").value);

}
function sum(){
   setValue() ;
   result = val1 + val2;
   alert( "The sum is equal to "+ result);
}
function diff(){
   setValue() ;
   result = val1 - val2;
   alert( "The difference is equal to "+ result);
}
function mult(){
   setValue();
   result = val1 * val2;
   alert( "The sum is equal to "+ result);
}
function divd(){
   setValue();
   result = val1 /val2;
   alert( "The sum is equal to "+ result);
}
function pow(){
   setValue();
   result = Math.pow(val1,val2);
   alert( "The result is equal to "+ result);
}
function sqrt(){

   setValue();
   result = Math.sqrt(val1);
   alert( "The result is equal to "+ result);
}