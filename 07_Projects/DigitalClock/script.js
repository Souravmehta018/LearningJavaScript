const cl = document.getElementById('clock');

setInterval(() => {
    let date = new Date();
    //console.log(date.toLocaleString());
    clock.innerText = date.toLocaleString();
}, 1000);