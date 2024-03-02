//Add dynamic date to footer function;
const date = function () {
    let time = new Date().getFullYear();
    return time;
}

//Display the dinamyc date;
document.querySelector(".footer-year").innerHTML = `© Copyright ${date()} TinDog`;

