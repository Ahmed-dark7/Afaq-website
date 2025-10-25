let landingPage = document.querySelector(".landing-page");
let imgsArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
},10000);


let listButton = document.querySelector('.list');
let list = document.querySelector('nav');

listButton.addEventListener("click", ()=>{
    list.style.visibility = "visible";
});
listButton.addEventListener('blur', ()=>{
    list.style.visibility = "hidden";
})