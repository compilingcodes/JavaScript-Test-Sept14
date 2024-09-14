// 7.	W.A.P JavaScript Logic to convert degree Celsius to Fahrenheit and Vice versa, 
// a.	accept the input as temperature
// b.	give a dropdown option to select conversion type for user


var input=document.querySelector("#num");
var submit=document.querySelector("#btn");


function tempConverter(input){
  
  submit.addEventListener((onclick)=>{
    input=((9/5)*input)+32;
console.log(input);

  })

}
tempConverter();