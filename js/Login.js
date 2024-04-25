// var email = document.getElementById("username").value;
// var password = document.getElementById("password").value;

function func(){
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == 'admin' && password == '12345'){
        alert("Login Successfully !")
        window.location.assign("Home.html")
    }
    else{
        alert("Login invalid !")
    }
}