const arr1=["raghad","sereen","hala","lama"];
const arr2=[24,22,27,28];

cards();
function cards(){
    for( i=0;i<4;i++){
        let card=document.createElement('div');
        card.style.border="1px solid blue";
        card.style.width='20%';
        card.style.height='60vh';
        card.style.display="inline-block";
        card.style.margin="20px";
        card.style.textAlign="center";
        card.style.borderRadius="10px";
        card.style.background="red";
        card.style.color="white";
        document.body.appendChild(card);
        let cardname=document.createElement('h1');
        cardname.textContent=arr1[i];
        let cardage=document.createElement('h3');
        cardage.textContent=arr2[i];
        let cardimg=document.createElement('img');
        cardimg.src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";
        cardimg.style.width='100%';
        card.appendChild(cardname);
        card.appendChild(cardage);
        card.appendChild(cardimg);
    }
}



