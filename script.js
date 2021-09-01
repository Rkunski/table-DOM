

var inputValue0 = document.getElementById('inputValue0');
var inputValue1 = document.getElementById('inputValue1');
var inputValue2 = document.getElementById('inputValue2');


function myFunction() {
  if (inputValue0.value.length==0 || inputValue1.value.length==0 || inputValue2.value<=0) {
    alert('Įveskite duomenis!!!');
  }else{
  var tbody = document.getElementById("bodis");
  var row = tbody.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var element0 = document.createElement("p");
  var element1 = document.createElement("p");
  var element2 = document.createElement("p");
  element0.innerText =inputValue0.value;
  element1.innerText =inputValue1.value;
  element2.innerText =inputValue2.value;
  cell1.innerHTML = inputValue0.value;
  cell2.innerHTML = inputValue1.value;
  cell3.innerHTML = inputValue2.value;
  inputValue0.value = "";
  inputValue1.value = "";
  inputValue2.value = "";
  cell1.className = 'cellStyle';
  cell2.className = 'cellStyle';
  cell3.className = 'cellStyle';
}
}
function removeFirstRow(){
  if (document.getElementById("bodis").rows.length <=0){
    alert('Nėra ką trinti');
  }else
  document.getElementById("bodis").deleteRow(0);
}
function removeLastRow(){
  var tbody = document.getElementById("bodis");
  if (document.getElementById("bodis").rows.length <=0){
    alert('Nėra ką trinti');
  }else
  tbody.deleteRow(tbody.rows.length - 1);
}
