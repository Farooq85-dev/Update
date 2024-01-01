setInterval(() => {
    document.getElementById('time').innerHTML = moment().format("hh:mm:ss");
    document.getElementById('date').innerHTML = moment().format("D MMMM YYYY");
    document.getElementById('a').innerHTML = moment().format("A");
}, 1000);
