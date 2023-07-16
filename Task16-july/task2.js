let x=document.getElementById('flags');
let y=document.getElementById('img1');


x.addEventListener('change', function(){
  if(x.value=="Jordan"){
    y.src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/2560px-Flag_of_Jordan.svg.png";

  }
  else{
    y.src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/2560px-Flag_of_Palestine.svg.png";
  }
}
)

