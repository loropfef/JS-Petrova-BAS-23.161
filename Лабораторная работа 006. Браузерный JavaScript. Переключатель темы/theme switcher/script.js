let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
    console.log('onclick!');
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
};
//Его нужно скопировать и вставить в консоль сайта, только после этого он заработает
