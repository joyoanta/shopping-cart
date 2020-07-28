var productAdd = document.getElementById("product-add");
productAdd.addEventListener("click", function(){

  var valueAdd =  document.getElementById("value-add").value;
  var valueNumber = parseFloat (valueAdd);
  var newValueNumber = valueNumber + 1 ; 
  document.getElementById("value-add").value = newValueNumber; 
})

var productRemove = document.getElementById("product-remove");
productRemove.addEventListener("click", function(){

    var valueAdd =  document.getElementById("value-add").value;
    var valueNumber = parseFloat (valueAdd);
    var newValueNumber = valueNumber + (-1) ;
    document.getElementById("value-add").value = newValueNumber;

})

