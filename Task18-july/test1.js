async function get(){
    const response=await fetch(`http://universities.hipolabs.com/search?country=${value}`);
    const data=await response.json();
    console.log(data);
    let value=document.getElementById('text').value;


}
get();