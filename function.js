// product one  + button event handeler 

var productAdd = document.getElementById("product-add");
productAdd.addEventListener("click", function(){

  var valueAdd =  document.getElementById("valueAdd").value;
  var valueNumber = parseFloat (valueAdd);

  var newValueNumber = valueNumber + 1 ; 
  document.getElementById("valueAdd").value = newValueNumber; 

  

 var productOne =  document.getElementById("productOne").innerText
 productOneNumber = parseFloat(productOne);

 var productOnePrice = 1219 * newValueNumber
 document.getElementById("productOne").innerText = productOnePrice;


})


// product one - button event handeler 

var productRemove = document.getElementById("productRemove");
productRemove.addEventListener("click", function(){

  var valueAdd =  document.getElementById("valueAdd").value;
  var valueNumber = parseFloat (valueAdd);
  var newValueNumber = valueNumber + (-1) ; 
  document.getElementById("valueAdd").value = newValueNumber; 

  var productOne =  document.getElementById("productOne").innerText
  productOneNumber = parseFloat(productOne);
 
  var productOnePrice = productOneNumber - 1219;
  document.getElementById("productOne").innerText = productOnePrice;
})


// Product two + button event handeler

var productPlus = document.getElementById("productPlus");
productPlus.addEventListener("click", function(){

  var valueAdd =  document.getElementById("valueChange").value;
  var valueNumber = parseFloat (valueAdd);

  var newValueNumber = valueNumber + 1 ; 
  document.getElementById("valueChange").value = newValueNumber; 

  

 var productTwo =  document.getElementById("productTwo").innerText
 productOneNumber = parseFloat(productTwo);

 var productTwoPrice = 59 * newValueNumber
 document.getElementById("productTwo").innerText = productTwoPrice;


})


// Product two - button event handeler

var productMinus = document.getElementById("productMinus");
productMinus.addEventListener("click", function(){

  var valueChange =  document.getElementById("valueChange").value;
  var valueNumber = parseFloat (valueChange);
  var newValueNumber = valueNumber + (-1) ; 
  document.getElementById("valueChange").value = newValueNumber; 

  var productTwo =  document.getElementById("productTwo").innerText
  productTwoNumber = parseFloat(productTwo);
 
  var productTwoPrice = productTwoNumber - 59;
  document.getElementById("productTwo").innerText = productTwoPrice;
})


// subtotal 











