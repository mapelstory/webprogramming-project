var count1_1 = localStorage.getItem('count1');
var price1_1= localStorage.getItem('price1');
var count2_2 = localStorage.getItem('count2');
var price2_2= localStorage.getItem('price2');
var count3_3 = localStorage.getItem('count3');
var price3_3= localStorage.getItem('price3');
var count4_4 = localStorage.getItem('count4');
var price4_4= localStorage.getItem('price4');
var count5_5 = localStorage.getItem('count5');
var price5_5= localStorage.getItem('price5');
var count6_6 = localStorage.getItem('count6');
var price6_6= localStorage.getItem('price6');
var count7_7 = localStorage.getItem('count7');
var price7_7= localStorage.getItem('price7');
var count8_8 = localStorage.getItem('count8');
var price8_8= localStorage.getItem('price8');

var cart_container = document.getElementById('cart_container');


function cancel(id, count, name){
    var div_cart = document.getElementById(id);
    div_cart.remove();
    window.alert('cancel : ' + name);
    if (count == 1){
        localStorage.setItem('count1', 0);
        count1_1=localStorage.getItem('count1');
        localStorage.setItem('price1', 0);
        price1_1=localStorage.getItem('price1');
    }
    if (count == 2){
        localStorage.setItem('count2', 0);
        count2_2=localStorage.getItem('count2');
        localStorage.setItem('price2', 0);
        price2_2=localStorage.getItem('price2');
    }
    if (count == 3){
        localStorage.setItem('count3', 0);
        count3_3=localStorage.getItem('count3');
        localStorage.setItem('price3', 0);
        price3_3=localStorage.getItem('price3');
    }
    if (count == 4){
        localStorage.setItem('count4', 0);
        count4_4=localStorage.getItem('count4');
        localStorage.setItem('price4', 0);
        price4_4=localStorage.getItem('price4');
    }
    if (count == 5){
        localStorage.setItem('count5', 0);
        count5_5=localStorage.getItem('count5');
        localStorage.setItem('price5', 0);
        price5_5=localStorage.getItem('price5');
    }
    if (count == 6){
        localStorage.setItem('count6', 0);
        count6_6=localStorage.getItem('count6');
        localStorage.setItem('price6', 0);
        price6_6=localStorage.getItem('price6');
    }
    if (count == 7){
        localStorage.setItem('count7', 0);
        count7_7=localStorage.getItem('count7');
        localStorage.setItem('price7', 0);
        price7_7=localStorage.getItem('price7');
    }
    if (count == 8){
        localStorage.setItem('count8', 0);
        count8_8=localStorage.getItem('count8');
        localStorage.setItem('price8', 0);
        price8_8=localStorage.getItem('price8');
    }
    var total = Number(price1_1) + Number(price2_2) + Number(price3_3) + Number(price4_4) 
    + Number(price5_5) + Number(price6_6) + Number(price7_7) + Number(price8_8);
    var total_price = document.getElementById('total_price');
    total_price.innerHTML= total.toString();

}

if (count1_1 > 0){
    var cart1 = document.createElement('div');
    cart1.className="cartitem";
    cart1.id="cart1_1";
    cart1.innerHTML = `<img class="cartitemimg"  src="https://m.media-amazon.com/images/I/61BxdcSpHgL._AC_UY327_FMwebp_QL65_.jpg">
    <div class="cpcontainer">
    <p>COUNT : ${count1_1} </p>
    <p>PRICE : ${price1_1}$</p>
    <input class="cancel" type="button" value="cancel" onclick="cancel('cart1_1', 1, 'sharp')">
    </div>
    `;
    cart_container.appendChild(cart1);
}

if (count2_2 > 0){
    var cart2 = document.createElement('div');
    cart2.className="cartitem";
    cart2.id="cart2_2";
    cart2.innerHTML = `<img class="cartitemimg" src="https://m.media-amazon.com/images/I/81hoeLzM7oL._AC_UY327_FMwebp_QL65_.jpg">
    <div class="cpcontainer">
    <p>COUNT : ${count2_2}</p>
    <p>PRICE : ${price2_2}$</p>
    <input class="cancel" type="button" value="cancel" onclick="cancel('cart2_2', 2, 'hdmi2.0 cable')">
    </div>
    `;
    cart_container.appendChild(cart2);
}

if (count3_3 > 0){
    var cart3 = document.createElement('div');
    cart3.className="cartitem";
    cart3.id="cart3_3";
    cart3.innerHTML = `<img class="cartitemimg" src="https://m.media-amazon.com/images/I/81QrtG0Uw0L._AC_UY327_FMwebp_QL65_.jpg">
    <div class="cpcontainer">
    <p>COUNT : ${count3_3}</p>
    <p>PRICE : ${price3_3}$</p>
    <input class="cancel" type="button" value="cancel" onclick="cancel('cart3_3', 3, 'mariocart deluxe')">
    </div>
    `;
    cart_container.appendChild(cart3);
}

if (count4_4 > 0){
    var cart4 = document.createElement('div');
    cart4.className="cartitem";
    cart4.id="cart4_4";
    cart4.innerHTML = `<img class="cartitemimg" src="https://m.media-amazon.com/images/I/71kfz16POkS._AC_UY327_FMwebp_QL65_.jpg">
    <div class="cpcontainer">
    <p>COUNT : ${count4_4}</p>
    <p>PRICE : ${price4_4}$</p>
    <input class="cancel" type="button" value="cancel" onclick="cancel('cart4_4', 4, 'nintendo switch')">
    </div>
    `;
    cart_container.appendChild(cart4);
}

if (count5_5 > 0){
    var cart5 = document.createElement('div');
    cart5.className="cartitem";
    cart5.id="cart5_5";
    cart5.innerHTML = `<img class="cartitemimg" src="https://m.media-amazon.com/images/I/71oR8s6sqGL._AC_SX466_.jpg">
    <div class="cpcontainer">
    <p>COUNT : ${count5_5}</p>
    <p>PRICE : ${price5_5}$</p>
    <input class="cancel" type="button" value="cancel" onclick="cancel('cart5_5', 5, 'mousepad')">
    </div>
    `;
    cart_container.appendChild(cart5);
}

if (count6_6 > 0){
    var cart6 = document.createElement('div');
    cart6.className="cartitem";
    cart6.id="cart6_6";
    cart6.innerHTML = `<img class="cartitemimg" src="https://m.media-amazon.com/images/I/51ySu55JzAL._AC_UY327_FMwebp_QL65_.jpg">
    <div class="cpcontainer">
    <p>COUNT : ${count6_6}</p>
    <p>PRICE : ${price6_6}$</p>
    <input class="cancel" type="button" value="cancel" onclick="cancel('cart6_6', 6, 'logitech mouse')">
    </div>
    `;
    cart_container.appendChild(cart6);
}

if (count7_7 > 0){
    var cart7 = document.createElement('div');
    cart7.className="cartitem";
    cart7.id="cart7_7";
    cart7.innerHTML = `<img class="cartitemimg" src="https://m.media-amazon.com/images/I/610hMWJg7QL._AC_UY327_FMwebp_QL65_.jpg">
    <div class="cpcontainer">
    <p>COUNT : ${count7_7}</p>
    <p>PRICE : ${price7_7}$</p>
    <input class="cancel" type="button" value="cancel" onclick="cancel('cart7_7', 7, 'keyboard')">
    </div>
    `;
    cart_container.appendChild(cart7);
}

if (count8_8 > 0){
    var cart8 = document.createElement('div');
    cart8.className="cartitem";
    cart8.id="cart8_8";
    cart8.innerHTML = `<img class="cartitemimg" src="https://m.media-amazon.com/images/I/61vJtKbAssL._AC_UL480_FMwebp_QL65_.jpg">
    <div class="cpcontainer">
    <p>COUNT : ${count8_8}</p>
    <p>PRICE : ${price8_8}$</p>
    <input class="cancel" type="button" value="cancel" onclick="cancel('cart8_8', 8, 'wh-1000xm5')">
    </div>
    `;
    cart_container.appendChild(cart8);
}



var total = Number(price1_1) + Number(price2_2) + Number(price3_3) + Number(price4_4) 
+ Number(price5_5) + Number(price6_6) + Number(price7_7) + Number(price8_8);
var total_price = document.getElementById('total_price');
total_price.innerHTML= total.toString();


function purchase(){
    var total = Number(price1_1) + Number(price2_2) + Number(price3_3) + Number(price4_4) 
+ Number(price5_5) + Number(price6_6) + Number(price7_7) + Number(price8_8);
var total_price = document.getElementById('total_price');
total_price.innerHTML= total.toString();
    if (total > 0)
    {
        window.location.assign("project2.php");
    }
    else{
        window.alert('Choose a product!!');
    }
}
