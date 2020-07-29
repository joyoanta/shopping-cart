// + button event handeler 

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


// - button event handeler 

var productRemove = document.getElementById("productRemove");
productRemove.addEventListener("click", function(){

  var valueAdd =  document.getElementById("valueAdd").value;
  var valueNumber = parseFloat (valueAdd);
  var newValueNumber = valueNumber - 1 ; 
  document.getElementById("valueAdd").value = newValueNumber; 

  var productOne =  document.getElementById("productOne").innerText
  productOneNumber = parseFloat(productOne);
 
  var productOnePrice = productOneNumber -1219;
  document.getElementById("productOne").innerText = productOnePrice;
})