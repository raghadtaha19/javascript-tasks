let x=document.getElementById('types');
let y=document.getElementById('text');


x.addEventListener('change', function(){
  if(x.value=="Times New Roman"){
    y.style.fontFamily="'Times New Roman', Times, serif";
  }
  else{
    y.style.fontFamily="Fantasy";
  }
}
)
let z=document.getElementById('sizes');
z.addEventListener('change', function(){
    if(z.value=="10px"){
      y.style.fontSize="10px";
    }
    else{
      y.style.fontSize="15px";
    }
  }
  )

  const I = document.getElementById('style1');
  const B = document.getElementById('style2');
  const U = document.getElementById('style3');
  I.addEventListener('change', function () {
      if (I.checked == true) {
          y.style.fontStyle = "Italic"
      }
      else{
        y.style.fontStyle = "normal";
    } 
  });
  
  B.addEventListener('change', function () {
      if (B.checked == true) {
          y.style.fontWeight = "Bold"
      }
      else{
        y.style.fontWeight = "normal";
    } 
  });
  U.addEventListener('change', function () {
      if (U.checked == true) {
         y.style.textDecoration = "underline";
      }
      else{ 
        y.style.textDecoration = "none";
    }  
  });

  
