const ngay = document.querySelector('.ngay')
const vitri = document.querySelector('.vi_tri')
const dodan = document.querySelector('.dodan')
const nhietdo = document.querySelector('.nhietdo')
const visinh = document.querySelector('.visinh')
const ph = document.querySelector('.ph')
const can = document.querySelector('.can')
const submit = document.querySelector('.submit')

const block__visinh = document.querySelector('.block__vi-sinh')
const block__ph = document.querySelector('.block__ph')
const block__can = document.querySelector('.block__can')


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



submit.addEventListener('click', ()=>{
    
    const data = {
        ngay : 'ngay',
        vitri: 'Vị trí',
        dodan: 'Độ dẫn',
        nhietdo: 'Nhiệt độ',
        visinh: 'vi sinh',
        ph: 'ph',
        can: 'can'
    }    
    
    const url = "https://script.google.com/macros/s/AKfycbzsME5ExqhKEUuKWr5gX62Cs6IQpPr7bGKCNK97cyXHpdBSSsAPQPfGdoxQTWKvXuVRCw/exec?data="
      data = JSON.stringify(data)
    const fullUrl = url+data
    fetch(fullUrl)
    .then((res)=>{
        console.log(res)
    })

})






//https://script.google.com/macros/s/AKfycbzsME5ExqhKEUuKWr5gX62Cs6IQpPr7bGKCNK97cyXHpdBSSsAPQPfGdoxQTWKvXuVRCw/exec