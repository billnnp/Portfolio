window.onload = pageLoad;
function pageLoad(){
	let RegisterForm = document.getElementById("myForm")
    RegisterForm.onsubmit = validateForm
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    
	let password = document.forms["myForm"]["password"].value
	let retype = document.forms["myForm"]["retype"].value
	console.log(password);
    console.log(retype);

    if (retype != password){
        alert("Password are not match, Please try again!")
        return false;
    }
    else {
        alert("Register success!")
        return true;
    }
}