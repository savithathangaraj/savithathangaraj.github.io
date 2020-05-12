const hero=document.querySelector(".hero");

const tl= new TimelineMax();

tl.fromTo(hero,1,{heigth:"0%"},{height:"80%",ease:Power2.easeInOut})
.fromTo(hero,1.2,{width:"100%"},{width:"80%",ease:Power2.easeInOUT});


var button=document.getElementById('btn-left1');

button.addEventListener("click",function(){
  alert("download");
});


 


// Start file download.


