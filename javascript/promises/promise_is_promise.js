function promiseHelloWorld() {
    return new Promise(resolve => {
        resolve('Hello World!');
    })
}

promiseHelloWorld().then(result => {
    console.log(result);
});