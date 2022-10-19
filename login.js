function validate(){
    var username = document.getElementById('name');
    var password = document.getElementById('password');

    if(username.value == "DaVinci" || password.value == "davinci221103"){
     return true;
    } else{
     alert("User atau Password anda salah");
     return false;
    }
}