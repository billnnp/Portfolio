window.onload = Blink;
function Blink(){
    var form = document.getElementById("Blacks");
    form.onsubmit = myFormFunction;
}
function myFormFunction(){
    alert("Submit")
}

// alert("BlackPink! in Your area Ya!!")

function myFunction(){
    alert("Oh no Oh no Oh no no no no no~");
}

//กำหนดตัวแปร
var topic1 = document.getElementById("topic1")
var comment1 = document.getElementById("comment1")
var comment2 = document.getElementById("comment2")

//ไม่มีข้อความในกล่องข้อความ
topic1 = 0
comment1 = 0
comment2 = 0

//เช็คว่าทำงานไหม
console.log("topic1 ", topic1)
console.log("comment1 ", comment1)
console.log("comment2 ", comment2)

//ตั้งเงื่อนไขการใส่ข้อมูล
function postFunction() {
    var aaa = document.getElementById("text1").value
    if (topic1 == 0) {
        document.getElementById("topic1").innerText = aaa
        topic1 = 1
    }
    else if (comment1 == 0) {
        document.getElementById("comment1").innerText = aaa
        comment1 = 1
    }
    else if (comment2 == 0) {
        document.getElementById("comment2").innerText = aaa
        comment2 = 1
    }
}

function clearFunction() {
    alert("Are You Sure?")   
    topic1 = 0
    comment1 = 0
    comment2 = 0
    text1 = 0
//clear comment
    document.getElementById("topic1").innerText = ""
    document.getElementById("comment1").innerText = ""
    document.getElementById("comment2").innerText = ""
    document.getElementById("text1").value = ""
}

