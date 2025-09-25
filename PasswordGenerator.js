let passbox = document.querySelector(".passbox");
let genbtn = document.querySelector(".genbtn");
let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let copyicon = document.getElementById("copyicon");

//set input slider values
slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input',() => {
    slidervalue.textContent = inputslider.value;
});

//Event listener for the generate button
genbtn.addEventListener('click',() => {
    passbox.value = generatePassword();
});

let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";

//function to generate the password
function generatePassword(){
    let genPassword = "";
    let allchars = "";

    allchars += lowercase.checked ? lowerchars:""; //conditional short method
    allchars += uppercase.checked ? upperchars:"";
    allchars += numbers.checked ? allnumbers:"";
    allchars += symbols.checked ? allsymbols:"";

    if(allchars === "" || genPassword === 0){
        return genPassword;
    }

    let i = 1;
    while( i <= inputslider.value){
        genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length)); //Collect the Random element from the given value
        i++;
    }
    return genPassword;

};

//function to copied the password
copyicon.addEventListener("click",() => {
    if(passbox.value !== "" || passbox.value.length >= 1){
        navigator.clipboard.writeText(passbox.value); //store copied password value
        copyicon.innerText = "check";
        copyicon.title = "Password copied";
    };

    setTimeout(() => {
        copyicon.innerHTML = "content_copy";
        copyicon.title = "";
    },1500);
});