let count = new Date("Dec 31, 2030 23:59:59").getTime();

let counter = setInterval(() => {
    // get date now
    let datenow = new Date().getTime();

    // difference between date now and the countdown date
    let dateDifference = count - datenow;

    // date units
    let years = Math.floor(dateDifference / (1000 * 60 * 60 * 24 * 365));
    let months = Math.floor(dateDifference / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((dateDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

    document.querySelector(".years").innerHTML = years;
    document.querySelector(".months").innerHTML = months;
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

}, 1000);


