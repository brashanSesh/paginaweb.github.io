// this js page was develop by brayanSesh 2022/04/30
function btn_si(){ 
    alert ("Que alegria, ahhhhhhhh gracia 🥺");

    let casar=new Audio();
    casar.src="musica/casar.mp3";
}

const btn_no=document.querySelector('#btn_no');

btn_no.addEventListener('mouseover', function(){
    const ejex = parseInt(Math.random()*100);
    const ejey = parseInt(Math.random()*100);

    btn_no.style.setProperty('top',ejey+'%');
    btn_no.style.setProperty('left',ejex+'%');
    btn_no.style.setProperty('transform',`translate(-${ejex}%,-${ejey}%)`);
})
