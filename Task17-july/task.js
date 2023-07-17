const myarray=[{
    "Name": "Raghad",
    "Age": 26,
    "Major": "VP Marketing",
    "University": "Kigali Institute of Science & Technology",
    "Image": "http://dummyimage.com/161x100.png/dddddd/000000"
  }, {
    "Name": "Sara",
    "Age": 28,
    "Major": "Administrative Assistant II",
    "University": "Universidad Nacional de San Juan",
    "Image": "http://dummyimage.com/250x100.png/cc0000/ffffff"
  }, {
    "Name": "Razan",
    "Age": 53,
    "Major": "Civil Engineer",
    "University": "Lesley University",
    "Image": "http://dummyimage.com/171x100.png/5fa2dd/ffffff"
  }, {
    "Name": "Sujood",
    "Age": 24,
    "Major": "Payment Adjustment Coordinator",
    "University": "Chinese University of Hong Kong",
    "Image": "http://dummyimage.com/196x100.png/dddddd/000000"
  }, {
    "Name": "Ahmad",
    "Age": 21,
    "Major": "Administrative Assistant IV",
    "University": "Westminster International University in Tashkent",
    "Image": "http://dummyimage.com/214x100.png/dddddd/000000"
  }, {
    "Name": "shatha",
    "Age": 23,
    "Major": "Sales Associate",
    "University": "Tashkent State University of Oriental Studies ",
    "Image": "http://dummyimage.com/199x100.png/5fa2dd/ffffff"
  }]
  

// const myarray= new XMLHttpRequest();
// myarray.open("GET", "MOCK_DATA.json");


// myarray.onload = function() {
    
//       var x = JSON.parse(myarray.responseText);
//       buildTable(x);
    
//   };
//   myarray.send();

//   document.getElementById('btn').addEventListener('click', function() {
//     myarray.open("GET", "MOCK_DATA.json");
//     myarray.send();
//   });







 function buildTable(data){
   
    var tbody= document.getElementById('myTable');

    for (let i=0; i<data.length; i++){
        var row = `<tr>
                     <td>${data[i].Name}</td>
                     <td>${data[i].Age}</td>
                     <td>${data[i].Major}</td>
                     <td>${data[i].University}</td>
                     <td>${data[i].Image}</td>
        
                  </tr>  `
                    
       tbody.innerHTML+= row;

    }
    
}

