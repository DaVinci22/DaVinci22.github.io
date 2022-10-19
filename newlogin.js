function validate() {
    var Username = document.getElementById('nama');
    var Password = document.getElementById('pass');

    if(Username.value == "DaVinci22" || 
    Password.value == "davinci221103"){
    return true;
    } else{
    alert("User atau Password anda salah");
    return false;
    }
} 