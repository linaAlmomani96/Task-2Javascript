function login(){
    debugger;
    var userName = document.getElementById('txtUsername').value;
    let password_val = document.getElementById('txtPassword').value;
    if((userName.length == 0 || password_val.length == 0) )
        document.getElementById('showmsg').setAttribute("class","showBox");
    else{       
     localStorage.setItem("userName_val",userName);
     window.location = "home.html";
    }
}
function hideShowMsg(x){
    x.parentElement.setAttribute("class","hideBox")
}
function highlight(li){
    debugger;
    var allElement = document.getElementsByClassName("liClick")[0];
    allElement.classList.remove("liClick");
    allElement.getElementsByTagName('a')[0].style.color = "black";

    li.getElementsByTagName('a')[0].style.color="white";
    li.classList.add("liClick"); 
}
function addToCart(add){
    debugger;
    document.getElementById('DivShoppingList').setAttribute('class','showBox');
    let item = add.parentElement.parentElement.parentElement.parentElement;
    let type = item.getElementsByTagName('span')[0].classList;
    let price = item.getElementsByClassName('headerpriceItem')[0];
    let productName = item.getElementsByClassName('headerItem')[0];
    let img = item.getElementsByClassName("mainimgItem")[0];
   //add to shoppinglist
    let tbl = document.getElementById('tableItems');
    let tr = document.createElement('tr');
    tr.setAttribute("class",type);

    let td1 = document.createElement('td');
    let chk = document.createElement('input');
    chk.setAttribute("type","checkbox");
    td1.appendChild(chk);
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    let productImg = document.createElement('img');
    productImg.setAttribute('src',img.src);
    productImg.setAttribute("width","40px");
    td2.appendChild(productImg);
    tr.appendChild(td2);


   let td3 = document.createElement('td');
   let span = document.createElement('span');
   let span_val = document.createTextNode(productName.textContent);
   span.appendChild(span_val);
   td3.appendChild(span);
   tr.appendChild(td3);

   let td4 = document.createElement('td');
   let sp = document.createElement('span');
   let sp_val = document.createTextNode(price.textContent);
   sp.appendChild(sp_val);
   td4.appendChild(sp);
   tr.appendChild(td4);

   tbl.appendChild(tr);  
}

function logout(){
    window.location = "Login.html"
}
function showDiscountPart(chk){
    if(chk.checked == true){
    document.getElementById('DiscountPart').style.display="block";
    document.getElementById('DiscountPart').getElementsByTagName('input')[1].classList.remove("mybutton");
    document.getElementById('DiscountPart').getElementsByTagName('input')[1].style.color = "white";
    document.getElementById('DiscountPart').getElementsByTagName('input')[1].style.backgroundColor ="#333333";
    document.getElementById('DiscountPart').getElementsByTagName('input')[1].style.borderStyle ="hidden";
}
else
document.getElementById('DiscountPart').style.display="none";
}
function giveButtonStyle(buyButton){
    debugger;
    buyButton.classList.add("mybutton");
}
function hideButtonStyle(buyButton){
    buyButton.classList.remove("mybutton");
}
function checkedItem(chk){
    debugger;
    let table = document.getElementById('tableItems');
    let input = table.getElementsByTagName('input');
    if(chk.checked == true)
    {
        for(let i = 0; i < input.length ;i++){
            input[i].checked = true;
        }
    }
    else{
        for(let i = 0; i < input.length ;i++){
            input[i].checked = false;
        }
    }
}
function deleteChecked(){
    let table = document.getElementById('tableItems');
    let input = table.getElementsByTagName('input');
debugger;
    let shoppingList = document.getElementById('DivShoppingList');
    let chk = shoppingList.getElementsByTagName('input')[0];
    for(let i = 0; i < input.length ;i++){
        if(input[i].checked == true)
        {
         input[i].parentElement.parentElement.remove();
         i--;
        }
     }
     chk.checked = false;
   if(input.length == 0)
   document.getElementById('DivShoppingList').setAttribute('class','hideBox');
}
function calDiscount(){
    debugger;
    let table = document.getElementById('tableItems');
    let disCode = document.getElementById('txtDiscount').value;
    if(disCode.slice(0,2)=="PR"){
        let plProduct = table.getElementsByClassName('Perfume');
        let disValue = disCode.substr(2);
        for(var i =0 ;i <plProduct.length ;i++){
            let price = plProduct[i].getElementsByTagName('td')[3].textContent.split(" ");          
            plProduct[i].getElementsByTagName('td')[3].textContent = price[0] -(price[0] * (disValue/100)) +" JD";}
        }
       if(disCode.slice(0,2)=="EL")
       { let elProduct = table.getElementsByClassName('Electronic');
        let disValue = disCode.substr(2);
        for(var i =0 ;i <elProduct.length ;i++){
            let price = elProduct[i].getElementsByTagName('td')[3].textContent.split(" ");
            elProduct[i].getElementsByTagName('td')[3].textContent = price[0] -(price[0] * (disValue/100)) + " JD" ;
        }   
    }
    }
    

   


