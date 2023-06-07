/*function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;
   
   if (estrela == 5){ 
    if (s5 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star1.png";
    document.getElementById("s5").src = "img/star1.png";
    avaliacao = 5;
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star1.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 4;
   }}
    
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star1.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 4;
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 3;
   }}
   
   //ESTRELA 3
   if (estrela == 3){ 
    if (s3 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 3;
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 2;
   }}
    
   //ESTRELA 2
   if (estrela == 2){ 
    if (s2 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 2;
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star0.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 1;
   }}
    
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star0.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 1;
    } else {
    document.getElementById("s1").src = "img/star0.png";
    document.getElementById("s2").src = "img/star0.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 0;
   }}
    
    document.getElementById('rating').innerHTML = avaliacao;
    
   }
   */
  //Funções do Carrinho//
   if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }
  
  var totalAmount = "0,00"
  
  function ready() {
    // Botão remover produto
    const removeCartProductButtons = document.getElementsByClassName("remove-product-button")
    for (var i = 0; i < removeCartProductButtons.length; i++) {
      removeCartProductButtons[i].addEventListener("click", removeProduct)
    }
  
    // Mudança valor dos inputs
    const quantityInputs = document.getElementsByClassName("product-qtd-input")
    for (var i = 0; i < quantityInputs.length; i++) {
      quantityInputs[i].addEventListener("change", checkIfInputIsNull)
    }
  
    // Botão add produto ao carrinho
    const addToCartButtons = document.getElementsByClassName("button-hover-background")
    for (var i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener("click", addProductToCart)
    }
  
    // Botão comprar
    const purchaseButton = document.getElementsByClassName("purchase-button")[0]
    purchaseButton.addEventListener("click", makePurchase)
  }
  
  function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
  }
  
  function checkIfInputIsNull(event) {
    if (event.target.value === "0") {
      event.target.parentElement.parentElement.remove()
    }
  
    updateTotal()
  }
  
  function addProductToCart(event) {
    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImage = productInfos.getElementsByClassName("product-image")[0].src
    const productName = productInfos.getElementsByClassName("product-title")[0].innerText
    const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText
  
    const productsCartNames = document.getElementsByClassName("cart-product-title")
    for (var i = 0; i < productsCartNames.length; i++) {
      if (productsCartNames[i].innerText === productName) {
        productsCartNames[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
        updateTotal()
        return
      }
    }
  
    let newCartProduct = document.createElement("tr")
    newCartProduct.classList.add("cart-product")
  
    newCartProduct.innerHTML =
      `
        <td class="product-identification">
          <img src="${productImage}" alt="${productName}" class="cart-product-image">
          <strong class="cart-product-title">${productName}</strong>
        </td>
        <td>
          <span class="cart-product-price">${productPrice}</span>
        </td>
        <td>
          <input type="number" value="1" min="0" class="product-qtd-input">
          <button type="button" class="remove-product-button">Remover</button>
        </td>
      `
    
    const tableBody = document.querySelector(".cart-table tbody")
    tableBody.append(newCartProduct)
    updateTotal()
  
    newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)
    newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInputIsNull)
  }
  
  function makePurchase() {
    if (totalAmount === "0,00") {
      alert("Poxa!!\nSeu carrinho ainda  está vazio! :(")
    } else {   
      alert(
        `
          Muito brigado pela sua compra!
          Valor  total do pedido: R$${totalAmount}\n
          É um prazer te atender,volte sempre :)
        `
      )
  
      document.querySelector(".cart-table tbody").innerHTML = ""
      updateTotal()
    }
  }
  
  // Atualizar o valor total do carrinho
  function updateTotal() {
    const cartProducts = document.getElementsByClassName("cart-product")
    totalAmount = 0
  
    for (var i = 0; i < cartProducts.length; i++) {
      const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
      const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value
  
      totalAmount += productPrice * productQuantity
    }
    
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
  }