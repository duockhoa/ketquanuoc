var vitri = document.querySelector('.vi_tri')
var ngay = document.querySelector('.ngay')
var dodan = document.querySelector('.dodan')
var nhietdo = document.querySelector('.nhietdo')
var visinh = document.querySelector('.visinh')
var ph = document.querySelector('.ph')
var submit = document.querySelector('.submit')




submit.addEventListener('click', ()=>{
    
    var data = {
        ngay : 'ngay',
        vitri: 'Vị trí',
        dodan: 'Độ dẫn',
        nhietdo: 'Nhiệt độ',
        visinh: 'vi sinh',
        ph: 'ph',
        can: 'can'
    }    
    
    var url = "https://script.google.com/macros/s/AKfycbzsME5ExqhKEUuKWr5gX62Cs6IQpPr7bGKCNK97cyXHpdBSSsAPQPfGdoxQTWKvXuVRCw/exec?data="
      data = JSON.stringify(data)
    var fullUrl = url+data
    fetch(fullUrl)
    .then((res)=>{
        console.log(res)
    })

})








vitri.addEventListener('change', (e)=>{
 var value = e.target.value
 

 
 
 var nguon = ['W1' , 'W2' ,'W3' , 'W4', 'W1.1' , 'W2.1' ,'W3.1' , 'W4.1']
 if(nguon.includes(value)){
    viTriNguon.forEach(vitri=>{
        vitri.classList.remove('hide')
    })
 } else {
    if(nguon.includes(value)){
        viTriNguon.forEach(vitri=>{
            vitri.classList.add('hide')
        })

 }
}})



//https://script.google.com/macros/s/AKfycbzsME5ExqhKEUuKWr5gX62Cs6IQpPr7bGKCNK97cyXHpdBSSsAPQPfGdoxQTWKvXuVRCw/exec