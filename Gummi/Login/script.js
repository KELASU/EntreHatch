const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", ()=>{
    modal.classList.add("open")
});

closeBtn.addEventListener("click", ()=>{
    modal.classList.remove("open")
});

const openBtn1 = document.getElementById("openModal1");
const closeBtn1 = document.getElementById("closeModal1");
const modal1 = document.getElementById("modal1");

openBtn1.addEventListener("click", ()=>{
    modal1.classList.add("open")
});

closeBtn1.addEventListener("click", ()=>{
    modal1.classList.remove("open")
});

const openBtn2 = document.getElementById("openModal2");
const closeBtn2 = document.getElementById("closeModal2");
const modal2 = document.getElementById("modal2");

openBtn2.addEventListener("click", ()=>{
    modal2.classList.add("open")
});

closeBtn2.addEventListener("click", ()=>{
    modal2.classList.remove("open")
});

const openBtn5 = document.getElementById("openModal5");
const closeBtn5 = document.getElementById("closeModal5");
const modal5 = document.getElementById("modal5");

openBtn5.addEventListener("click", ()=>{
    modal5.classList.add("open")
});

closeBtn5.addEventListener("click", ()=>{
    modal5.classList.remove("open")
});
const openBtn3 = document.getElementById("openModal3");
const closeBtn3 = document.getElementById("closeModal3");
const modal3 = document.getElementById("modal3");

openBtn3.addEventListener("click", ()=>{
    modal3.classList.add("open")
});

closeBtn3.addEventListener("click", ()=>{
    modal2.classList.remove("open")
});

const openBtn4 = document.getElementById("openModal4");
const closeBtn4 = document.getElementById("closeModal4");
const modal4 = document.getElementById("modal4");

openBtn4.addEventListener("click", ()=>{
    modal4.classList.add("open")
});

closeBtn4.addEventListener("click", ()=>{
    modal4.classList.remove("open")
});



const openBtnContinue = document.getElementById("openModalContinue");
const closeBtnAll = document.getElementById("closeModalAll");


openBtnContinue.addEventListener("click", ()=>{
    modal.classList.add("open")
    modal1.classList.add("open")
});

closeBtnAll.addEventListener("click", ()=>{
    modal.classList.remove("open")
    modal1.classList.remove("open")
    modal2.classList.remove("open")
    modal3.classList.remove("open")
});