function log_in(){
    let user_stored = localStorage.getItem('username');
    let pass_stored = localStorage.getItem('password');
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    console.log(user)
    console.log(pass)
    if(user === '')
    alert("Please enter a username");

    else if(pass === '')
    alert("Please enter a password");

    else if(user_stored == user && pass_stored == pass){
    alert("Welcome Back!!! We hope you are enjoying LOKi");
        return true;
    }
    else{
        alert("Username and Password are not valid!! Account does not exist!!");
        return false;
    }
}
function logged(){
    if(log_in()){
        window.location.replace("mainpage_post.html");
    }
}

function make_account(){
    window.location.replace("make_account.html");
}