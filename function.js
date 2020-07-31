// case 

document.getElementById("case-increase").addEventListener('click', function(){
  
  handleProductChange(true)
  // var caseInput = document.getElementById('case-count');
  // var caseCount = parseInt(caseInput.value);
  // var caseNewCount = caseCount + 1 ; 
  // caseInput.value = caseNewCount; 
  // var casetotal = caseNewCount * 59 ; 
  // document.getElementById("case-total").innerText = casetotal; 
})


document.getElementById("case-decrease").addEventListener('click', function(){

  handleProductChange(false)
  
  // var caseInput = document.getElementById('case-count');
  // var caseCount = parseInt(caseInput.value);
  // var caseNewCount = caseCount - 1 ; 
  // caseInput.value = caseNewCount; 
  // var casetotal = caseNewCount * 59 ; 
  // document.getElementById("case-total").innerText = casetotal; 

})

function handleProductChange(isIncrease) {

  var caseInput = document.getElementById('case-count');
  var caseCount = parseInt(caseInput.value);
  // var caseNewCount = caseCount - 1 ; 
  var caseNewCount = caseCount;
if (isIncrease == true) {
  caseNewCount = caseCount + 1 ;
}

if (isIncrease == false && caseCount> 0){
  caseNewCount = caseCount - 1 ;
}

  caseInput.value = caseNewCount; 
  var casetotal = caseNewCount * 59 ; 
  document.getElementById("case-total").innerText = casetotal; 
  
}