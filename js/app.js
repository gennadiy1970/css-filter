const img = document.querySelector('.image img');
const combi = document.querySelector('.combi');
const val = document.querySelector('.list');

val.addEventListener('click', setData, false);
combi.addEventListener('click', setData, false);

function setData(e) {
    console.log(e.target);
    
    img.style.filter = e.target.dataset.filter;
}

