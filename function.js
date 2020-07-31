// case 

document.getElementById("case-increase").addEventListener('click', function(){
  productChange("case", true)
  // var caseInput = document.getElementById('case-count');
  // var caseCount = parseInt(caseInput.value);
  // var caseNewCount = caseCount + 1 ; 
  // caseInput.value = caseNewCount; 
  // var casetotal = caseNewCount * 59 ; 
  // document.getElementById("case-total").innerText = casetotal; 
})

document.getElementById("case-decrease").addEventListener('click', function(){
  productChange("case", false)
})

// phone 

document.getElementById("phone-increase").addEventListener('click', function(){
  productChange("phone" ,true);
})

document.getElementById("phone-decrease").addEventListener('click', function(){
  productChange("phone" ,false);

})

// Case function 

// function handleCaseChange(isIncrease) {

//   var caseInput = document.getElementById('case-count');
//   var caseCount = parseInt(caseInput.value);
//   var caseNewCount = caseCount;

//   if (isIncrease == true) {
//   caseNewCount = caseCount + 1 ;
// }

// if (isIncrease == false && caseCount> 0){
//   caseNewCount = caseCount - 1 ;
// }

//   caseInput.value = caseNewCount; 
//   var casetotal = caseNewCount * 59 ; 
//   document.getElementById("case-total").innerText = casetotal; 
// }

// phone 

// function handlePhoneChange(isIncrease) {

//   var phoneInput = document.getElementById('phone-count');
//   var phoneCount = parseInt(phoneInput.value);
  
//   var phoneNewCount = phoneCount;
//   if (isIncrease == true) {
//     phoneNewCount = phoneCount + 1 ;
//   }

// if (isIncrease == false && phoneCount> 0){
//   phoneNewCount = phoneCount - 1 ;
// }

//   phoneInput.value = phoneNewCount; 
//   var phonetotal = phoneNewCount * 1219 ; 
//   document.getElementById("phone-total").innerText = phonetotal; 
// }


function subCalculate() {
var phoneInput =  document.getElementById("phone-count");
var phoneCount =  parseInt (phoneInput.value);

var caseInput = document.getElementById("case-count");  
var caseCount =  parseInt (caseInput.value);

var subTotal = phoneCount * 1219 + caseCount * 59 ; 

document.getElementById("sub-total").innerText = subTotal;

var tax = subTotal * 0.05
var taxAmount = Math.round(tax);

var grandTotal = subTotal + tax ; 
var grandAmount = Math.round(grandTotal)

document.getElementById("tax").innerText = taxAmount; 
document.getElementById("total").innerText = grandAmount; 

}


function productChange (product, isIncrease){
  var productInput = document.getElementById(product +'-count');
  var productCount = parseInt(productInput.value);
  var productNewCount = productCount;

    if (isIncrease == true) {
      productNewCount = productCount + 1 ;
    }

    if (isIncrease == false && productCount> 0){
      productNewCount = productCount - 1 ;
    }

  productInput.value = productNewCount; 
  var productTotal = 0; 

    if (product == "phone") {
      var productTotal = productNewCount * 1219 ; 
    } 

    if (product == "case"){
      var productTotal = productNewCount * 59 ; 
    }

  document.getElementById(product +"-total").innerText = productTotal; 
  subCalculate()
  

}








