const ngay = document.querySelector('.ngay')
const vitri = document.querySelector('.vi_tri')
const dodan = document.querySelector('.do_dan')
const nhietdo = document.querySelector('.nhiet_do')
const visinh = document.querySelector('.vi_sinh')
const ph = document.querySelector('.ph')
const can = document.querySelector('.can')
const submit = document.querySelector('.submit')

const block__visinh = document.querySelector('.block__vi-sinh')
const block__ph = document.querySelector('.block__ph')
const block__can = document.querySelector('.block__can')
const block__status = document.querySelector('.status')


// phần ẩn hiện thẻ input
/*
vitri.addEventListener('keydown', (event)=>{
setTimeout(() => {
    showandhide(event) 
}, 0);
} )

function showandhide(event) {
    var value = event.target.value
    console.log(value)
    if(value == 1 || value == 2){
       block__visinh.classList.remove('show')
       block__visinh.classList.add('hide')
   
       block__can.classList.remove('hide')
       block__can.classList.add('show')
       
       block__ph.classList.remove('hide')
       block__ph.classList.add('show')
   
   } else if(value == 3 || value == 4) {
       block__visinh.classList.remove('show')
       block__visinh.classList.add('hide')
   
       block__can.classList.remove('show')
       block__can.classList.add('hide')
       
       block__ph.classList.remove('show')
       block__ph.classList.add('hide')
   
   } else{
   
       block__visinh.classList.remove('hide')
       block__visinh.classList.add('show')
   
       block__can.classList.remove('show')
       block__can.classList.add('hide')
       
       block__ph.classList.remove('show')
       block__ph.classList.add('hide')
   }
}
*/


// phần gửi dữ liệu đi

submit.addEventListener('click',  send)
submit.addEventListener('keydown', event => {
    if(event.keyCode === 13){
        send()
    }
})

function send(){
    const data = {
        ngay : ngay.value,
        vitri: vitri.value,
        dodan: dodan.value,
        nhietdo: nhietdo.value,
        visinh: visinh.value,
        ph: ph.value,
        can: can.value
    }    
    var json =  JSON.stringify(data)
    const url = "https://script.google.com/macros/s/AKfycbw5LgHhsb3PRBjL9ZtopWWH5nJbuYxP9UJpn17GnFwN9Tk6aVFK8k_ckhMiibcENsTcCQ/exec?data="
    const fullUrl = url+json
    fetch(fullUrl)
    .then( response => response.json())
    .then(result =>{
        if(result.status == 'success'){
        block__status.innerHTML= `<div class="status--success status__block">
        <img src="./assets/status icon/success.jpg" alt="">
        <p>Gửi dữ liệu thành công</p>
    </div>`
        } else {
            block__status.innerHTML= `<div class="status--fail status__block">
            <img src="./assets/status icon/cancel.png" alt="">
            <p>Gửi dữ liệu thành công</p>
        </div>`
        }
         block__status.classList.add('show')
         block__status.classList.remove('hide')
         setTimeout(()=>{
            block__status.classList.add('hide')
            block__status.classList.remove('show')
         },5000)
    })
    .catch((error) =>{
    })
    vitri.value = ''
    dodan.value = ''
    nhietdo.value = ''
    visinh.value = ''
    ph.value = ''
    can.value = ''
    ngay.focus()
}

document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input, index) => {
        input.addEventListener('keydown', function (event) {
            if (event.keyCode === 13 || event.keyCode === 40) { // Enter hoặc mũi tên xuống
                event.preventDefault();
                const nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            } else if (event.keyCode === 38) { // Mũi tên lên
                event.preventDefault();
                const prevInput = inputs[index - 1];
                if (prevInput) {
                    prevInput.focus();
                }
            }
        });
    });
});
