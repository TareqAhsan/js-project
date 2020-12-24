var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discount_code1 = document.getElementById('discount_code1');
const decreaseNumber = (incdec, itemv) => {
    var itemval = document.getElementById(incdec);
    var itemv = document.getElementById(itemv);
    // console.log(itemval.value);
    if (itemval.value <= 0) {
        itemval.value = 0;
        alert('negarive is not allowed')
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = 'white';
        itemval.style.color = 'black';
        itemv.innerHTML = parseInt(itemv.innerHTML) - 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

const increaseNumber = (incdec,itemv) => {
    var itemval = document.getElementById(incdec);
    var itemv = document.getElementById(itemv);
    if (itemval.value >= 5) {
        itemval.value = 5;
        itemval.style.background = 'red';
        itemval.style.color = 'white';
        alert('max item 5')
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemv.innerHTML = parseInt(itemv.innerHTML) + 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML)
    }
} 

const discount_code = () => {
    let totallcurr = parseInt(total_cart_amt.innerHTML);
    let error_trw = document.getElementById('error_trw');

    if (discount_code1.value == 'tareq') {
        let distotal = totallcurr - 15;
        total_cart_amt.innerHTML = distotal;
        error_trw.innerHTML = 'you have used your code thanks';
        discount_code1.value = '';
    } else {
        error_trw.innerHTML = 'try again';
    }
}
