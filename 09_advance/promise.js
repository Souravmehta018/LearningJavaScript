const promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Promise 1');
    }, 1000);
});
