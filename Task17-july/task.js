  function buildTable(){
    var tbody= document.getElementById('myTable');
const x = new XMLHttpRequest();
x.open("get", "task.JSON");


x.onload = function() {
 
  let tableobj = JSON.parse(x.responseText);
    console.log(tableobj);
    for (let i=0; i<tableobj.length; i++){
      var row = `<tr>
                   <td>${tableobj[i].Name}</td>
                   <td>${tableobj[i].Age}</td>
                   <td>${tableobj[i].Major}</td>
                   <td>${tableobj[i].University}</td>
                   <td>${tableobj[i].Image}</td>
      
                </tr>  `
                  
     tbody.innerHTML+= row;

  };
  
  
}
x.send();
    
}

