function createAccount() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    let correct="Congratulations you have successfully registered";
    let error="Your data is not correct";
    let passW="Passwords are not matching";
    if (username==="" || password==="" || password2===""){
        document.getElementById("demo").innerHTML = error;
    }
    else if (password2 != password){
        document.getElementById("demo").innerHTML = passW;
    }
    else{
        document.getElementById("demo").innerHTML = correct;
    }
}
function cover() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function cover2() {
    let x = document.getElementById("password2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }}
$( "p" ).click(function() {
    $( this ).slideUp();
});
$('.hah').on("keypress", function(e) {
    if (e.keyCode == 13) {
        createAccount();
    }
});
