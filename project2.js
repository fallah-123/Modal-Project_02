const openBtn = document.getElementById('open-btn');
const mainContainer = document.getElementById('mainContainer');
const closeBtn  = document.getElementById('close-btn');



openBtn.addEventListener('click', ()=>{
    mainContainer.style.display = 'block';
})


closeBtn.addEventListener('click', ()=>{
    mainContainer.style.display = 'none';
})

window.addEventListener('click', (e)=>{
    
    if(e.target === mainContainer){
        mainContainer.style.display = 'none';
        alert('model is closed')
    }
})