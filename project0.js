
function cart1(name){
    var count1 = Number(document.getElementById('count1').value);
    var price1 = Number(document.getElementById('price1').innerHTML);
    if (count1 <= 0){
        count1 = 0;
    }
    price1 = price1 * count1;
    window.alert("Cart -> " + name + " : " + count1);
    localStorage.setItem('count1', count1);
    localStorage.setItem('price1', price1);
}

function cart2(name){
    var count2 = Number(document.getElementById('count2').value);
    var price2 = Number(document.getElementById('price2').innerHTML);
    if (count2 <= 0){
        count2 = 0;
    }
    price2 = count2 * price2;
    window.alert("Cart -> " + name + " : " + count2);
    localStorage.setItem('count2', count2);
    localStorage.setItem('price2', price2);
}

function cart3(name){
    var count3 = Number(document.getElementById('count3').value);
    var price3 = Number(document.getElementById('price3').innerHTML);
    if (count3 <= 0){
        count3 = 0;
    }
    price3 = count3 * price3;
    window.alert("Cart -> " + name + " : " + count3);
    localStorage.setItem('count3', count3);
    localStorage.setItem('price3', price3);
}

function cart4(name){
    var count4 = Number(document.getElementById('count4').value);
    var price4 = Number(document.getElementById('price4').innerHTML);
    if (count4 <= 0){
        count4 = 0;
    }
    price4 = count4 * price4;
    window.alert("Cart -> " + name + " : " + count4);
    localStorage.setItem('count4', count4);
    localStorage.setItem('price4', price4);
}

function cart5(name){
    var count5 = Number(document.getElementById('count5').value);
    var price5 = Number(document.getElementById('price5').innerHTML);
    if (count5 <= 0){
        count5 = 0;
    }
    price5 = count5 * price5;
    window.alert("Cart -> " + name + " : " + count5);
    localStorage.setItem('count5', count5);
    localStorage.setItem('price5', price5);
}

function cart6(name){
    var count6 = Number(document.getElementById('count6').value);
    var price6 = Number(document.getElementById('price6').innerHTML);
    if (count6 <= 0){
        count6 = 0;
    }
    price6 = count6 * price6;
    window.alert("Cart -> " + name + " : " + count6);
    localStorage.setItem('count6', count6);
    localStorage.setItem('price6', price6);
}

function cart7(name){
    var count7 = Number(document.getElementById('count7').value);
    var price7 = Number(document.getElementById('price7').innerHTML);
    if (count7 <= 0){
        count7 = 0;
    }
    price7 = count7 * price7;
    window.alert("Cart -> " + name + " : " + count7);
    localStorage.setItem('count7', count7);
    localStorage.setItem('price7', price7);
}

function cart8(name){
    var count8 = Number(document.getElementById('count8').value);
    var price8 = Number(document.getElementById('price8').innerHTML);
    if (count8 <= 0){
        count8 = 0;
    }
    price8 = count8 * price8;
    window.alert("Cart -> " + name + " : " + count8);
    localStorage.setItem('count8', count8);
    localStorage.setItem('price8', price8);
}

