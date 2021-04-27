function savedata(){
    let gender2 = document.querySelector("#gender");
    let locate2 = document.querySelector("#location");
    let bio2 = document.querySelector("#bio");
    let gender = document.querySelector("#storage_gender");
    let locate = document.querySelector("#storage_location");
    let bio = document.querySelector("#bio_output");
    localStorage.setItem("gender", gender2.options[gender2.selectedIndex].value);
    localStorage.setItem('location', locate2.value );
    localStorage.setItem('bio', bio2.value);
    gender.innerText = localStorage.getItem("gender");
    locate.innerText = localStorage.getItem('location');
    bio.innerText = localStorage.getItem('bio');
}

function main(){
    let first_put = document.querySelector('#storage_firstname');
    first_put.innerText = localStorage.getItem('firstname');
    let last_put = document.querySelector('#storage_lastname');
    last_put.innerText = localStorage.getItem('lastname');
    let output = document.querySelector('#storage_user');
    output.innerText = localStorage.getItem('username');
    let mail_put = document.querySelector('#storage_email');
    mail_put.innerText = localStorage.getItem('email');
}
window.addEventListener('load', main);
