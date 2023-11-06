let contentbx = document.querySelectorAll(" .contentbox")

contentbx.forEach(list_e => {
    list_e.addEventListener("click", function () {
        list_e.classList.toggle("active")
    })
});

localStorage.setItem("siyahi", JSON.stringify(contentbx))
console.log(JSON.parse(localStorage.getItem("siyahi")));

     // const arr=[{text:"wake up at 8:00"}, {text:"brush your teeth"},{text:"brush your face"}, {text:"make your bed"},{text:"to do homework"}]
        // localStorage.setItem("todolist",JSON.stringify(arr))
        // console.log(JSON.parse(localStorage.getItem("todolist")));

        // // const arr=[{text: "seehr durmaq"}, {text: "dis yumaq"}]
        // // localStorage.setItem("todolist",JSON.stringify(arr))
        // // console.log(JSON.parse(localStorage.getItem("todolist")));