let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let caro = document.querySelector('.caro');
let listHTML = document.querySelector('.caro .list');

nextButton.onclick = function(){
  showSlider('next')
}
prevButton.onclick = function(){
  showSlider('prev')
}
let unAcceptClick;
const showSlider = (type) => {
  nextButton.style.pointerEvents = 'none';
  prevButton.style.pointerEvents = 'none';
  caro.classList.remove('prev', 'next');
  let items = document.querySelectorAll('.caro .list .item')
  if (type === 'next'){
    listHTML.appendChild(items[0]);
    caro.classList.add('next');
  }else{
    let positionLast = items.length - 1;
    listHTML.prepend(items[positionLast])
    caro.classList.add('prev');
  }
  clearTimeout(unAcceptClick)
  unAcceptClick = setTimeout(() => {
    nextButton.style.pointerEvents = 'auto';
    prevButton.style.pointerEvents = 'auto';
  }, 1200);
}

