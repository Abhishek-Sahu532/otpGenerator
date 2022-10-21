


// btn.addEventListener('click',()=>{

// let otpPara = document.getElementById('otpPara');

// otpPara.innerHTML = '123'

// })

function generateOtp() {

    // let btn = document.getElementById('btn');
    let para = document.querySelector('span')

    let digits ='0123456789'
    let count= ''

    for(let i=0; i<6;i++){
        
        count += Math.floor( Math.random()*10)
    }
para.innerHTML= count
    
}