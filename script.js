'use strict'

const cancelBtn = document.querySelector('.cancel');
const transactionBox = document.querySelector('.transactoin');
const qrBtn = document.querySelector('.qr-btn');
const shaddowBox = document.querySelector('.shaddow')
cancelBtn.addEventListener('click',
function(){
    transactionBox.classList.add('hidden');
    shaddowBox.classList.add('hidden');
})

qrBtn.addEventListener('click',
function(){
    transactionBox.classList.remove('hidden');
    shaddowBox.classList.remove('hidden');
})