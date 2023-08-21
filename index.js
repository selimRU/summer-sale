

let number = 0;
let total = 0;

const priceTotal = document.getElementById('total-price');
const discount = document.getElementById('discount');
const finalTotal = document.getElementById('total');
const couponField = document.getElementById('coupon-input');
const applyBtn = document.getElementById('apply');
const homeBtn = document.getElementById('home');
const purchaseBtn = document.getElementById('purchase');
const couponCode = document.getElementById('sell200');

function handleClick(target) {
    const targeted = target.parentElement.children[2].innerText;
    const count = document.getElementById('count');
    const tr = document.createElement('tr');
    tr.innerHTML = `
          <td>${number += 1}.</td>
          <td>${targeted}</td>
          `;
    count.appendChild(tr);
    const priceString = target.parentElement.children[3].innerText;
    const price = parseFloat(priceString);
    total = total + price;
    priceTotal.innerText = parseFloat(total).toFixed(2);
    finalTotal.innerText = parseFloat(total).toFixed(2);

    if (priceTotal.innerText >= 200) {
        applyBtn.removeAttribute('disabled');
    } else {
        applyBtn.setAttribute('disabled', true);
    }
    if (priceTotal.innerText > 0) {
        purchaseBtn.removeAttribute('disabled')
    } else {
        purchaseBtn.setAttribute('disabled', true)
    }
    return tr;
}

// discount apply button

applyBtn.addEventListener('click', function () {
    if (couponField.value === couponCode.innerText) {
        const discountValue = ((parseFloat(total * 0.20)).toFixed(2));
        const finalTotalValue = parseFloat(total - discountValue).toFixed(2);
        discount.innerText = discountValue;
        finalTotal.innerText = finalTotalValue;
        couponField.value = '';
    }
    else {
        alert('Wrong code');
    }
});

// go home button

function goHomeAndClearCart() {
    count.innerHTML = '';
    priceTotal.innerText = '';
    discount.innerText = '';
    finalTotal.innerText = '';
    location.reload();

}

