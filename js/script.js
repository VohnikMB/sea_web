let offset=0;
const sliderLine = document.querySelector('.slider-line');


function go(){

  if(offset>(436*6)){
    offset = -540;
  }
  sliderLine.style.left = -offset+'px'
offset+=1;
}

setInterval(go, 5);
