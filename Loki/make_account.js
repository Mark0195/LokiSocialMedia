function checkpass(){
    let first_password = document.getElementById("first_password").value;
    let con_password = document.getElementById("con_password").value;
    let firstname_box = document.querySelector("#first_name");
    let lastname_box = document.querySelector("#last_name");
    let username_box = document.querySelector("#user_name");
    let emailname_box = document.querySelector("#e_mail")
    let passname_box = document.querySelector("#first_password");
    localStorage.setItem('firstname', firstname_box.value);
    localStorage.setItem('lastname', lastname_box.value);
    localStorage.setItem('username', username_box.value);
    localStorage.setItem('email', emailname_box.value);
    localStorage.setItem('password', passname_box.value);
    sessionStorage.setItem('firstname', firstname_box.value);
    sessionStorage.setItem('lastname', lastname_box.value);
    sessionStorage.setItem('username', username_box.value);
    sessionStorage.setItem('email', emailname_box.value);
    sessionStorage.setItem('password', passname_box.value);

    if(first_password == '')
    alert("Please enter a password");

    else if(con_password == '')
    alert("Please confirm the password");

    else if(first_password != con_password){
    alert("Passwords dont match! Please re-enter with matching passwords");
    return false;
    }
    else{
        alert("Password confirmed and Account made!! Enjoy LOKi");
        return true;
    }
}

function submitpass(){
    if(checkpass()){
        window.location.replace("mainpage_post.html");
    }
}
window.addEventListener('load', savedinfo);