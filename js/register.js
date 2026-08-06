const registerForm =
document.getElementById("registerForm");



registerForm.addEventListener(
"submit",
function(e){


e.preventDefault();



let password =
document.getElementById("password").value;



let confirmPassword =
document.getElementById("confirmPassword").value;




if(password !== confirmPassword){


alert("Passwords do not match ❌");


return;


}




alert(
"Account Created Successfully ✨"
);



window.location.href="login.html";



});





// Show Password


const showPassword =
document.querySelector(".show-password");



const password =
document.getElementById("password");



showPassword.onclick=function(){


if(password.type==="password"){


password.type="text";


showPassword.classList.replace(
"fa-eye",
"fa-eye-slash"
);


}

else{


password.type="password";


showPassword.classList.replace(
"fa-eye-slash",
"fa-eye"
);


}


};