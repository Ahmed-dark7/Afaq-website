//change landpage background
let landingPage = document.querySelector(".landing-page");
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  landingPage.style.backgroundImage =
    'url("images/' + imgsArray[randomNumber] + '")';
}, 10000);
//logo
let logo = document.querySelector(".logo");
let home = document.querySelectorAll(".home");
logo.addEventListener("click", () => {
  navLis.forEach((li) => {
    li.classList.remove("active");
  });
  linksLis.forEach((li) => {
    li.classList.remove("active");
  });
  home.forEach((e) => {
    e.classList.add("active");
  });
});
//navbar li activation
let navLis = document.querySelectorAll(".links-nav-li");
navLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    navLis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
//links activation
let linksLis = document.querySelectorAll(".links-li");
linksLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    linksLis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
//navbar button
let listButton = document.querySelector(".list");
let list = document.querySelector("nav");

listButton.addEventListener("click", () => {
  list.style.visibility = "visible";
});
listButton.addEventListener("blur", () => {
  list.style.visibility = "hidden";
});
