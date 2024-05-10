const button = document.getElementById('btn-success')
const unidades = document.getElementsByClassName('unidades')
const costeTotal = document.getElementsByClassName('costTotal')
const precioUnitario = document.getElementsByClassName('costUnit')
const total = document.getElementById('total-price')
//const buttonRemove = document.getElementsByClassName('btn-delete')
const contain = document.getElementsByClassName('contain')
const parent = document.getElementById('global')

//Iteration 1: Creating one product
button.addEventListener('click',()=>{
  let TotalPrice = parseInt(precioUnitario[0].innerText) * parseInt(unidades[0].value)
  costeTotal[0].innerText = TotalPrice + '€'
}) 
 
//Iteration 2: Add another products
button.addEventListener('click', TotalPrice)
function TotalPrice() {
  for (let i = 0; i < precioUnitario.length; i++) {
    let itemInput = parseInt(unidades[i].value)
    let addCost = parseInt(precioUnitario[i].innerText)
    costeTotal[i].innerText = itemInput * addCost
  }
} 

//Iteration 3: Calculating the total price of all products
button.addEventListener('click', totalPrice2)
function totalPrice2() {
  let totalPrecio = 0
  for (let i = 0; i < costeTotal.length; i++) {
    totalPrecio += parseInt(costeTotal[i].innerText)
  }
  //console.log(total)
  total.innerText = totalPrecio + "€"
}

//Iteration 4: Deleting a product

function deleteItem(e) {
const eliminate = parent.removeChild(contain[e])
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

 window.onload = function(){
 // var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function(index) {
      return function() {
        deleteItem(index);
      };
    }(i);
  }
}; 