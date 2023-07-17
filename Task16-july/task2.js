
let firstCard = document.getElementById('firstCard');
let namee = document.getElementById('namee');

let nameInput = document.getElementById("uname");

nameInput.addEventListener("input", function () {

    const name = nameInput.value; // Get the value from the input field
    localStorage.setItem("Name", name); // Save the name in local storage with the key "name"

});

const storedName = localStorage.getItem("Name");
console.log(storedName);

namee.innerHTML = storedName;

// *********************************************

const ageInput = document.getElementById("age");
let agee = document.getElementById('agee');

ageInput.addEventListener("input", function () {

    const age = ageInput.value; // Get the value from the input field
    localStorage.setItem("Age", age); // Save the age in local storage with the key "age"

});

const storedAge = localStorage.getItem("Age");
console.log(storedAge); 

agee.innerHTML = storedAge;

// *********************************************

const genderInput = document.getElementById("gender");
let genderr = document.getElementById('genderr');

genderInput.addEventListener("input", function () {

    const gender = genderInput.value; // Get the value from the input field
    localStorage.setItem("Gender", gender); // Save the gender in local storage with the key "gender"

});

const storedGender = localStorage.getItem("Gender");
console.log(storedGender); 

genderr.innerHTML = storedGender;

// *********************************************

const birthdateInput = document.getElementById("birthdate");
let bd = document.getElementById('bd');

birthdateInput.addEventListener("input", function () {

    const birthdate = birthdateInput.value; // Get the value from the input field
    localStorage.setItem("Birth Date", birthdate); // Save the birth date in local storage with the key "birthdate"

});

const storedBD = localStorage.getItem("Birth Date");
console.log(storedBD); 

bd.innerHTML = storedBD;

// *********************************************

const imageInput = document.getElementById("image");
let img = document.getElementById('img');

imageInput.addEventListener("input", function () {

    const file = imageInput.value;


    localStorage.setItem("imageData",file)
   
});

const storedImage = localStorage.getItem("imageData");

img.setAttribute('src' , storedImage);
img.style.width ='150px'

// *********************************************

const descripInput = document.getElementById("description");
let descrip = document.getElementById('descrip');

descripInput.addEventListener("input", function () {

    const descrip = descripInput.value; // Get the value from the input field
    localStorage.setItem("Description", descrip); // Save the description in local storage with the key "Description"

});

const storeddescrip = localStorage.getItem("Description");
console.log(storeddescrip); 

descrip.innerHTML = storeddescrip;

// *********************************************

const majorInput = document.getElementById("major");
let mu = document.getElementById('mu');

majorInput.addEventListener("input", function () {

    const major = majorInput.value; // Get the value from the input field
    localStorage.setItem("Major", major); // Save the major in local storage with the key "Major"

});

const storedmajor = localStorage.getItem("Major");
console.log(storedmajor); 

mu.innerHTML = storedmajor;

// *********************************************

const checkboxes = document.querySelectorAll('input[name="programmingLanguages"]');
let lang = document.getElementById('lang');

let selectedLanguages = []
for (let i = 0; i < checkboxes.length; i++) {
    
    checkboxes[i].addEventListener("change", function () {
        
        selectedLanguages.push(this.id)
        
        localStorage.setItem("Selected Languages", JSON.stringify(selectedLanguages));
    });
} 
const storedLanguages = JSON.parse(localStorage.getItem("Selected Languages"));
console.log(storedLanguages); 

lang.innerHTML = storedLanguages;

// *********************************************
const siblingsNumberInput = document.getElementById("siblingsNumber");
let sn = document.getElementById('sn');

siblingsNumberInput.addEventListener("input", function () {

    const siblingsNumber = siblingsNumberInput.value; // Get the value from the input field
    localStorage.setItem("Siblings Number", siblingsNumber); // Save the siblingsNumber in local storage with the key "Siblings Number"

});

const storedsiblingsNumber = localStorage.getItem("Siblings Number");
console.log(storedsiblingsNumber); 

sn.innerHTML = storedsiblingsNumber;

// *********************************************

const siblingsDescriptionInput = document.getElementById("siblingsDescription");
let sd = document.getElementById('sd');

siblingsDescriptionInput.addEventListener("input", function () {

    const siblingsDescription = siblingsDescriptionInput.value; // Get the value from the input field
    localStorage.setItem("Siblings Description", siblingsDescription); // Save the siblingsDescription in local storage with the key "Siblings Description"

});

const storedsiblingsDescription = localStorage.getItem("Siblings Description");
console.log(storedsiblingsDescription); 

sd.innerHTML = storedsiblingsDescription;