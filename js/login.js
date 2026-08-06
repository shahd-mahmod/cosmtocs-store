const form = document.getElementById("loginForm");


form.addEventListener("submit", function(e){


    e.preventDefault();



    let email =
    document.getElementById("email").value;



    let password =
    document.getElementById("password").value;



    if(email === "" || password === ""){


        alert("Please fill all fields");


    }

    else{


        alert("Login Successfully ✨");


        window.location.href="profile.html";


    }


});





// Show Password


const toggle =
document.querySelector(".toggle-password");


const password =
document.getElementById("password");



toggle.onclick=function(){


    if(password.type==="password"){

        password.type="text";

        toggle.classList.replace(
            "fa-eye",
            "fa-eye-slash"
        );


    }

    else{


        password.type="password";


        toggle.classList.replace(
            "fa-eye-slash",
            "fa-eye"
        );


    }


};