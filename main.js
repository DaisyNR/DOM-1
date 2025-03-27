let p = document.querySelectorAll('p')
let secondParagraph = document.querySelector('#secondParagraph');
let thirdParagraph = document.querySelector('#thirdParagraph');
let colorBtn = document.querySelector('#color-btn');
let strongBtn = document.querySelector('#strong-btn');
let vanishBtn = document.querySelector('#vanish-btn');

colorBtn.addEventListener('click', ()=>{
    p.forEach(p => {
        let r = Math.floor(Math.random() * (255 - 1 +1) + 1)
        let g = Math.floor(Math.random() * (255 - 1 +1) + 1)
        let b = Math.floor(Math.random() * 255)
        p.style.color = `rgb(${r}, ${g}, ${b})`
    });
});


strongBtn.addEventListener('click', ()=>{
    secondParagraph.classList.toggle('font-custom');
    // strongBtn.innerText = 'Torna indietro'  
});

vanishBtn.addEventListener('click', ()=>{
    thirdParagraph.classList.toggle('display')
})





